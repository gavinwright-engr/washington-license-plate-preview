# Asset licenses and rights

The project's [MIT license](LICENSE) applies to its original code, documentation, catalogue metadata, and rendering configuration. It **does not apply to the official DOL images or bundled font files**. Including these materials in this public reference repository and agency-review package does not change their rights or imply that their owners endorse this contribution.

## Official DOL images

`dist/assets/official/` contains 79 unchanged PNG/JPEG files published by the Washington Department of Licensing. Source URLs, filenames, dimensions, SHA-256 values, and unchanged-byte records are in `dist/assets/ASSET-MANIFEST.json`. The catalogue links each entry to its official detail page.

No explicit official-image redistribution license was found in the inspected pages or assets. The sample images, logos, emblems, and represented designs retain the rights of their respective owners. Public availability is not treated as a public-domain declaration or a blanket reuse grant.

The originals are included as reference samples for **review of the proposed DOL addition**. Their presence in this public repository is not a grant of redistribution or deployment rights. Before independent public deployment or redistribution, confirm applicable permissions with DOL and relevant rights holders, or replace the assets with authorized material. DOL can supply authorized blank templates and confirm the appropriate rights for its own integration. Such replacements retain their applicable permissions; they are not relicensed as MIT.

The same separate artwork and mark rights apply to the official designs visible in `docs/media/` screenshots and demo recordings. The MIT license for the project's original documentation does not relicense depicted third-party artwork.

The Canvas preview does not alter the original files on disk. Its approximate reconstruction and substituted characters do not create a new license for the underlying image. See [ARTWORK.md](docs/ARTWORK.md) for the rendering limitations.

## Locally bundled fonts

Font files are separately licensed under **SIL Open Font License 1.1**, **MIT**, or **Apache License 2.0**, as listed below. Keep their complete adjacent notices when copying or sharing the addition. The project's MIT notice does not replace any third-party font notice.

The four earlier WOFF2 distributions remain unchanged. Six additional registration files are **modified derivatives**: variable axes are pinned where applicable, supported registration characters are subsetted, primary font identities are renamed, and files are encoded as WOFF2. Original copyright, designer, trademark, and license notices are retained. Renaming also avoids retaining reserved primary names, including IBM's “Plex.” The [font manifest](dist/assets/fonts/FONT-MANIFEST.json) records source URLs and hashes, output hashes, axis settings, new identities, and transformation details.

| Source family | Bundled files | Use / transformation | License notice |
| --- | --- | --- | --- |
| Montserrat | `montserrat-latin.woff2` | Unchanged website font distribution | [OFL 1.1](dist/assets/fonts/Montserrat-OFL.txt) |
| Public Sans | `public-sans-400.woff2` | Unchanged optional banner font | [OFL 1.1](dist/assets/fonts/Public-Sans-OFL.txt) |
| Barlow Condensed | `barlow-condensed.woff2` | Unchanged registration substitute, weight 400 | [OFL 1.1](dist/assets/fonts/BarlowCondensed-OFL.txt) |
| Bebas Neue | `bebas-neue.woff2` | Unchanged legacy angular alternative | [OFL 1.1](dist/assets/fonts/BebasNeue-OFL.txt) |
| Noto Sans Mono | `wpp-registration-standard-500.woff2` | Renamed subset; weight 500, width axis 62.5 | [OFL 1.1](dist/assets/fonts/NotoSansMono-OFL.txt) |
| Inconsolata | `wpp-registration-curve-500.woff2`, `wpp-registration-curve-600.woff2` | Renamed subsets; weights 500/600, width axis 100 | [OFL 1.1](dist/assets/fonts/Inconsolata-OFL.txt) |
| Roadgeek 2014 Series B | `wpp-registration-narrow-400.woff2` | Renamed subset; weight 400 | [MIT](dist/assets/fonts/Roadgeek-MIT.txt) |
| IBM Plex Mono | `wpp-registration-mono-400.woff2` | Renamed subset; weight 400; reserved primary name removed | [OFL 1.1](dist/assets/fonts/Google-IBMPlexMono-OFL.txt) |
| Droid Sans Mono | `wpp-registration-round-400.woff2` | Renamed subset; weight 400 | [Apache 2.0](dist/assets/fonts/DroidSansMono-LICENSE.txt) |

Every filename above is relative to `dist/assets/fonts/`. The six derivative files total 44,784 bytes and cover A–Z, 0–9, ordinary space, and hyphen. Their primary families are `WPPRegistrationStandard`, `WPPRegistrationCurve`, `WPPRegistrationNarrow`, `WPPRegistrationMono`, and `WPPRegistrationRound`; runtime CSS aliases add spaces and are listed in [FONTS.md](docs/FONTS.md).

The full notices control reuse and any further modification. OFL fonts retain their OFL terms, including applicable naming conditions; Roadgeek retains its own MIT notice; Droid retains its Apache 2.0 notice and its modification/provenance record. No font is downloaded from an external host at runtime. Montserrat matches the inspected website distribution, while registration selections are approximate source-sample matches, not identified manufacturing typefaces.

For source URLs, reproducible derivation, the 64 source-profile selections, and calibration limits, see [FONTS.md](docs/FONTS.md), [font-matches.json](docs/font-matches.json), and the [font manifest](dist/assets/fonts/FONT-MANIFEST.json).

## Code contribution

The original JavaScript, CSS, HTML, documentation, catalogue metadata, and mask/geometry configuration are copyright 2026 Washington Plate Preview contributors and offered under MIT. You may review, modify, and reuse that code at no charge under the license terms. Retain both the MIT notice and each asset's separate applicable notices when sharing the complete package.
