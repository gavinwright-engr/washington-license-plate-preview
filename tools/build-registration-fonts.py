#!/usr/bin/env python3
# SPDX-License-Identifier: MIT
"""Pack six licensed registration-font derivatives using local files only.

Optional developer tooling: Python 3, FontTools 4.57.0, and Brotli 1.1.0.
The website consumes the bundled WOFF2 files and never runs this script.
No network access, subprocesses, font downloads, or runtime dependencies.

Example:
  python3 pack-registration-fonts.py --source-dir font-sources \
      --output-dir packed-registration-fonts

The adjacent JSON records exact local inputs, their SHA-256s, upstream URLs,
license files, and pinned variable-font axes. Supply those original input files
locally. The script intentionally fails if an input or license has changed.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import re

try:
    import brotli
    import fontTools
    from fontTools import subset
    from fontTools.ttLib import TTFont
    from fontTools.varLib.instancer import instantiateVariableFont
except ImportError as exc:
    raise SystemExit(
        "Optional font rebuilding needs FontTools and Brotli. "
        "Use a Python environment with the versions in requirements-fonts.txt. "
        "The bundled website fonts already work without these tools."
    ) from exc


PRIMARY_NAME_IDS = {1, 2, 3, 4, 5, 6, 16, 17, 18, 20, 21, 22, 25}
VERSION = "WPP preview derivative 1.0"


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def read_verified(directory: Path, filename: str, expected_sha: str) -> bytes:
    """Only direct children of the chosen input directory are valid inputs."""
    if Path(filename).name != filename:
        raise ValueError(f"Input must be a plain filename: {filename}")
    path = directory / filename
    data = path.read_bytes()
    if sha256(data) != expected_sha:
        raise ValueError(f"SHA-256 mismatch for {filename}; original source required")
    return data


def set_name(names, name_id: int, value: str) -> None:
    """Write one stable English Windows record and one Unicode record."""
    names.setName(value, name_id, 3, 1, 0x409)
    names.setName(value, name_id, 0, 4, 0)


def rename(font: TTFont, spec: dict, license_text: str) -> None:
    """Rename every primary identity; retain copyright/designer/trademark notices.

    IBM reserves the name 'Plex'. Neither the new file nor its primary family,
    full, PostScript, preferred, compatible, or WWS name includes that name.
    Its original copyright/trademark and full OFL remain legal attribution.
    """
    names = font["name"]
    names.names = [n for n in names.names if n.nameID not in PRIMARY_NAME_IDS]
    family = spec["family"]
    style = spec["style"]
    full_name = f"{family} {style}"
    postscript = f"{family}-{style}"
    values = {
        1: family,
        2: style,
        3: f"{postscript};{spec['source_sha256'][:12]};WPP1",
        4: full_name,
        5: f"Version 1.000; {VERSION}",
        6: postscript,
        16: family,
        17: style,
        18: full_name,
        20: postscript,
        21: family,
        22: style,
        25: family,
    }
    for name_id, value in values.items():
        set_name(names, name_id, value)
    description = (
        f"Renamed {spec['original_family']} derivative for approximate plate "
        f"previews. Fixed axes: {json.dumps(spec['axis_coordinates'], sort_keys=True)}. "
        "Subset: A-Z, 0-9, ordinary space, hyphen. "
        "No official Washington manufacturing-font identification is claimed."
    )
    set_name(names, 10, description)
    set_name(names, 13, license_text)
    if spec["key"].startswith("roadgeek"):
        # The original release has a placeholder copyright name. Retain it and
        # add the actual source project's MIT attribution rather than replacing it.
        original = names.getDebugName(0) or ""
        set_name(names, 0, original + "\nCopyright (c) 2015 Sammi De Guzman")


def validate_font(path: Path, spec: dict, required: set[int]) -> dict:
    """Read the finished WOFF2 and prove coverage, fixed axes, names, and weight."""
    font = TTFont(path, recalcTimestamp=False)
    try:
        cmap = font.getBestCmap()
        if set(cmap) != required:
            raise ValueError(f"Unexpected character coverage in {path.name}")
        if "fvar" in font:
            raise ValueError(f"Unpinned variable axes in {path.name}")
        if font["OS/2"].usWeightClass != spec["weight"]:
            raise ValueError(f"Unexpected weight in {path.name}")
        names = font["name"]
        identity = {}
        for name_id in (1, 4, 6, 16, 18, 20, 21, 25):
            value = names.getDebugName(name_id)
            if not value or not value.startswith("WPPRegistration"):
                raise ValueError(f"Old primary identity {name_id} in {path.name}")
            identity[str(name_id)] = value
        # Check every language/platform record, not only the English record.
        for record in names.names:
            if record.nameID in PRIMARY_NAME_IDS:
                value = record.toUnicode()
                for reserved in spec["reserved_font_names"]:
                    if reserved.lower() in value.lower():
                        raise ValueError(f"Reserved font name retained in {path.name}")
        if not names.getDebugName(0) or not names.getDebugName(13):
            raise ValueError(f"Missing legal notice in {path.name}")
        return {
            "glyph_coverage_verified": True,
            "fixed_axes_verified": True,
            "renamed_primary_identities_verified": True,
            "reserved_names_absent_from_primary_identities": True,
            "internal_names": identity,
            "cmap_codepoints": [f"U+{cp:04X}" for cp in sorted(cmap)],
            "weight_class": font["OS/2"].usWeightClass,
            "glyph_count": len(font.getGlyphOrder()),
        }
    finally:
        font.close()


def pack(spec: dict, source_dir: Path, output_dir: Path, characters: str) -> dict:
    source_bytes = read_verified(source_dir, spec["source_file"], spec["source_sha256"])
    license_bytes = read_verified(source_dir, spec["license_file"], spec["license_sha256"])
    license_text = license_bytes.decode("utf-8")
    source_path = source_dir / spec["source_file"]
    font = TTFont(source_path, recalcTimestamp=False)
    if "fvar" in font:
        axis_tags = {axis.axisTag for axis in font["fvar"].axes}
        if axis_tags != set(spec["axis_coordinates"]):
            raise ValueError(f"Every axis must be pinned in {source_path.name}")
        font = instantiateVariableFont(font, spec["axis_coordinates"], inplace=True)
    elif spec["axis_coordinates"]:
        raise ValueError(f"Static source has axis coordinates: {source_path.name}")
    font.recalcTimestamp = False
    font["OS/2"].usWeightClass = spec["weight"]
    rename(font, spec, license_text)
    options = subset.Options()
    options.name_IDs = ["*"]  # Keep the full legal attribution and renamed identities.
    options.name_languages = ["*"]
    options.notdef_glyph = True
    options.notdef_outline = True
    options.recommended_glyphs = False
    options.recalc_timestamp = False
    options.hinting = True
    # These source metadata tables do not affect glyph rendering and would be
    # discarded by the subsetter anyway. Legal notices remain in the name table.
    options.drop_tables.extend(["FFTM", "meta"])
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes={ord(char) for char in characters})
    subsetter.subset(font)
    # WOFF2 conversion changes font data format. All derivatives therefore use
    # new primary names, even for sources whose OFL lists no Reserved Font Names.
    font.flavor = "woff2"
    font.recalcTimestamp = False
    target = output_dir / spec["output_file"]
    font.save(target, reorderTables=True)
    font.close()
    license_target = output_dir / spec["license_file"]
    license_target.write_bytes(license_bytes)
    result = dict(spec)
    output_bytes = target.read_bytes()
    result.update({
        "output_relative_path": spec["output_file"],
        "output_sha256": sha256(output_bytes),
        "output_byte_count": len(output_bytes),
        "license_relative_path": spec["license_file"],
        "license_original_bytes_preserved": True,
        "derivation": "Pin all axes; rename primary identities; subset registration characters; encode WOFF2",
        "source_original_bytes_verified": sha256(source_bytes) == spec["source_sha256"],
        "verification": validate_font(target, spec, {ord(char) for char in characters}),
    })
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--config", type=Path,
                        default=Path(__file__).with_name("registration-fonts.json"))
    args = parser.parse_args()
    source_dir = args.source_dir.resolve()
    output_dir = args.output_dir.resolve()
    if source_dir == output_dir:
        parser.error("Keep output separate from original input fonts")
    config = json.loads(args.config.read_text(encoding="utf-8"))
    characters = config["glyph_characters"]
    expected = set("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -")
    if set(characters) != expected:
        raise ValueError("Configuration must contain exactly the 38 registration characters")
    # Validate all originals before producing output, so a missing/mismatched
    # source cannot quietly yield a partial reviewed font set.
    for spec in config["fonts"]:
        read_verified(source_dir, spec["source_file"], spec["source_sha256"])
        read_verified(source_dir, spec["license_file"], spec["license_sha256"])
        if Path(spec["output_file"]).name != spec["output_file"]:
            raise ValueError("Output names must be plain filenames")
        if not re.fullmatch(r"[A-Za-z][A-Za-z0-9 ]+", spec["css_alias"]):
            raise ValueError("CSS aliases must contain only letters, digits, and spaces")
        for reserved in spec["reserved_font_names"]:
            if reserved.lower() in spec["css_alias"].lower():
                raise ValueError("CSS aliases must not use a source Reserved Font Name")
    output_dir.mkdir(parents=True, exist_ok=True)
    results = [pack(spec, source_dir, output_dir, characters) for spec in config["fonts"]]
    manifest = {
        "format_version": 1,
        "purpose": config["purpose"],
        "config_sha256": sha256(args.config.read_bytes()),
        "tools": {"fonttools": fontTools.__version__, "brotli": brotli.__version__},
        "glyph_characters": characters,
        "external_runtime_requests": 0,
        "fonts": results,
    }
    (output_dir / "FONT-MANIFEST.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    css = []
    for spec in config["fonts"]:
        css.append(
            "@font-face {\n"
            f"  font-family: '{spec['css_alias']}';\n"
            f"  src: url('./{spec['output_file']}') format('woff2');\n"
            "  font-style: normal;\n"
            f"  font-weight: {spec['weight']};\n"
            "  font-display: swap;\n"
            "  unicode-range: U+0020, U+002D, U+0030-0039, U+0041-005A;\n"
            "}\n"
        )
    (output_dir / "registration-fonts.css").write_text("\n".join(css), encoding="utf-8")
    total = sum(item["output_byte_count"] for item in results)
    print(f"Packed and verified {len(results)} local WOFF2 fonts ({total:,} bytes total)")
    print("Full licenses and FONT-MANIFEST.json written alongside the fonts")


if __name__ == "__main__":
    main()
