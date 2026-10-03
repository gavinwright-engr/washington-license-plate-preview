# Washington Plate Preview

A small, dependency-free addition for an existing website. Choose a standard or special plate design, then DOL-assigned or personalized characters. Browse the official samples or type a candidate to see a live preview. Built with plain HTML, scoped CSS, JavaScript, and Canvas: **no framework, package manager, or build step**.

An independent community contribution offered for Washington Department of Licensing (DOL) review. It is not an official government service. Original code and documentation are [MIT licensed](LICENSE); official images and fonts retain [separate rights](ASSET-LICENSES.md).

![Screen recording of choosing plate and registration options and typing characters into the live preview](docs/media/demo.gif)

[Watch the MP4 screen recording](docs/media/demo.mp4) · [Desktop screenshot](docs/media/desktop.png) · [Mobile screenshot](docs/media/mobile.png)

## Getting started

The public [GitHub repository](https://github.com/gavinwright-engr/washington-license-plate-preview) includes the complete code, documentation, screenshots, and demo recording. Clone the repository or use GitHub's **Code → Download ZIP** to try the project. No versioned release has been published yet. [PUBLISHING.md](docs/PUBLISHING.md) explains release packaging and the demo’s GitHub source links.

From the repository directory, serve the demonstration with Python's built-in static server:

```sh
python3 -m http.server 8000 --directory dist
```

Open **http://localhost:8000**. Open `/widget.html` for the standalone addition. You can also open `dist/index.html` directly; use the server if your browser restricts local scripts, fonts, or Canvas image access.

There is no `npm install` command. The readable files in `dist/` are both the source and the files to deploy.

## Two choices, four combinations

| Design | Characters | Preview |
| --- | --- | --- |
| Standard mountain | DOL assigned | Official standard sample with optional preview tabs; the default option |
| Standard mountain | Personalized | Type preferred characters on the mountain background |
| Special design | DOL assigned | Choose a design and view its official sample with optional preview tabs |
| Special design | Personalized | Choose a design and type characters when personalization is documented |

Assigned characters are sometimes called “random.” This preview shows a published example; it does not generate a number or predict the actual next available number DOL will assign. Switching to a special design restores the last special selection, starting with Throwback. Switching options retains a typed candidate in the page so it can be restored when you return to a supported personalized option.

Some catalog entries use official call signs or qualifying restored plates; emblems attach to existing plates. Their [DOL requirements](docs/SOURCES.md) govern the characters rather than a next-available-number choice.

## Drop it into an existing page

Copy these files to a directory served by your website:

- `dist/plate-preview.css`
- `dist/plate-catalog.js`
- `dist/plate-preview.js`
- The complete `dist/assets/` directory, including the font licenses

Add the stylesheet, the two deferred scripts **in this order**, and a dedicated root:

```html
<link rel="stylesheet" href="/plate-preview/plate-preview.css">
<script src="/plate-preview/plate-catalog.js" defer></script>
<script src="/plate-preview/plate-preview.js" defer></script>
<div data-wa-plate-preview data-asset-base="/plate-preview/assets/">
  <p>The live preview requires JavaScript.
    <a rel="noreferrer" href="https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/special-design-plates">
      Browse DOL's official plate catalog.
    </a>
  </p>
</div>
```

Include each script once. `data-asset-base` is a local artwork directory; the absolute path above works across page directories. Fonts load from `assets/fonts/` relative to the stylesheet, so keep that directory beside the CSS or update its local font URLs. The demonstration shell and `demo.css` are optional.

[INTEGRATION.md](docs/INTEGRATION.md) documents manual mounting, multiple instances, `selectDesign()`, `selectRegistrationMode()`, `getState()`, `destroy()`, styling, JavaScript-disabled fallback, and host form isolation.

## What it does

- Includes **75 entries** checked against DOL on October 2, 2026: the standard mountain design, all 72 published special plate designs, and two emblem placement examples.
- Offers candidate entry in personalized mode for 63 entries with documented personalization. Nine excluded designs, two emblem examples, and Rideshare with an undocumented personalization option remain viewable with character entry disabled.
- Preserves **79 original DOL PNG/JPEG images unchanged**, including published sample and size variants. [The asset manifest](dist/assets/ASSET-MANIFEST.json) records source URLs, dimensions, and SHA-256 hashes.
- Keeps the flow to two choices: design, then characters, with the preview beside them on desktop. A collapsible design browser provides search, categories, a scrollable desktop grid, and a compact mobile picker. Filtering preserves the selected plate and candidate. **Show original DOL sample** compares the preview with the published image.
- Shows the viewer’s current local month and year as optional preview tabs. Click the tabs, or use **Hide tabs / Show tabs**, to toggle them. Details and less common size controls stay collapsed until needed.
- Uses the DOL website's actual Montserrat font locally, with its observed green `#0a5e2e`, blue `#155c91`, and near-white `#fdfdfd` styling.
- Gives format feedback for A–Z, 0–9, spaces, and hyphens, with seven- or six-character limits. Spaces and hyphens count; ASCII lowercase becomes uppercase; input is not silently truncated.

## Preview boundaries

A fitting character format does **not** mean a plate is available, eligible, reserved, or approved. DOL handles reserved patterns, eligibility, availability, and final review. The official links do not include the candidate.

Preview tabs are an illustrative overlay, not a vehicle’s actual expiration date. Their colors and placement are approximate; original-sample comparison hides them.

Assigned and personalized layouts may differ. The Throwback assigned sample has stacked `WA` and sample registration text; the personalized rendering removes configured sample marks as an approximation. The inspected sources do not confirm the exact personalized Throwback layout. Separate authorized assigned/personalized artwork can be configured; [ARTWORK.md](docs/ARTWORK.md) explains the source evidence and overrides.

Published sample images are exact copies; **custom lettering and reconstructed background pixels are approximate**. Canvas removes configured sample-ink pixels and draws the candidate. Photographic pixels hidden by sample text cannot be recovered exactly. Registration fonts are selected per source sample, comparing 84 static font variants across all 63 personalizable designs plus the separate standard motorcycle sample. The standard uses a condensed Noto Sans Mono derivative that preserves its observed barred I and unbarred J; other designs use calibrated Barlow Condensed, Inconsolata, Roadgeek, IBM Plex Mono, or Droid Sans Mono substitutes. [FONTS.md](docs/FONTS.md) records all 64 selections and their limits. These are measured approximations, not identified manufacturing fonts. Assigned views and the 12 browse-only entries retain their actual rasterized sample lettering.

No publicly approved blank templates or manufacturing font were found. [ARTWORK.md](docs/ARTWORK.md) explains the rendering limits and the authorized blank-template and local-font overrides DOL can use for a faithful production preview.

The widget creates no account, form, backend, tracking, cookies, persistent storage, or availability lookup. It loads locally served fonts and images; clicked official links navigate to DOL. A hosting provider can log ordinary requests, and other host-page scripts may read DOM input. See [SECURITY.md](docs/SECURITY.md) for the implementation boundaries and standalone-route CSP guidance. No software can promise an absolute absence of security issues.

## License and asset rights

**MIT was chosen for the original code and documentation because it is permissive and straightforward to adopt.** A team can use, modify, and redistribute the code at no charge while retaining the copyright and license notice. It imposes no requirement to use this demonstration's hosting or a particular framework. Read the full [LICENSE](LICENSE).

MIT does **not** cover the official DOL images, designs, logos, or bundled fonts:

- Official images retain their owners' rights. No explicit redistribution license was found. They are included for review and reference to this proposed DOL addition; publishing this repository grants no additional rights in the images or designs. Confirm appropriate permissions for your intended deployment or redistribution, or replace them with authorized assets.
- Font files carry their own licenses: **SIL OFL 1.1**, **MIT** for Roadgeek, and **Apache 2.0** for Droid Sans Mono. Six registration fonts are renamed, static ASCII-subset derivatives; the other bundled distributions remain unchanged. Keep their full notices and provenance with the files. [ASSET-LICENSES.md](ASSET-LICENSES.md) lists every family and license.

[ASSET-LICENSES.md](ASSET-LICENSES.md) documents this distinction. The screenshots, GIF, and MP4 recording show the same official artwork and do not grant additional rights in it. This repository is not a claim that every bundled asset is MIT licensed.

## Tests and contributions

Run the built-in Node.js checks from the repository directory:

```sh
node --test
```

[VERIFICATION.md](docs/VERIFICATION.md) records the automated and Chromium checks, including all catalogue entries, asset integrity, local requests, responsive layouts, multiple instances, and form isolation. Test the actual integrating site's styles, CSP, analytics, supported browsers, and assistive technology before adoption.

GitHub Actions runs `node --test` on pushes and pull requests with read-only permissions, pinned upstream actions, and no dependency installation.

Small, documented improvements are welcome. [CONTRIBUTING.md](CONTRIBUTING.md) explains how to keep the addition simple, private, accessible, and easy to integrate.

## Documentation

| Document | Purpose |
| --- | --- |
| [Integration](docs/INTEGRATION.md) | Embedding, API, lifecycle, styling, and host forms |
| [Artwork](docs/ARTWORK.md) | Geometry, Canvas approximation, authorized template/font overrides |
| [Fonts](docs/FONTS.md) | Per-plate selections, comparison evidence, spacing, and font provenance |
| [Security](docs/SECURITY.md) | Data boundaries, threat model, CSP, and review guidance |
| [Sources](docs/SOURCES.md) | Official rules, catalogue evidence, fonts, and style references |
| [Asset rights](ASSET-LICENSES.md) | Separate official-image rights and font licenses |
| [Verification](docs/VERIFICATION.md) | Completed checks and remaining integration checks |
| [Handoff](docs/HANDOFF.md) | Suggested message for offering the contribution to DOL |
| [Publishing](docs/PUBLISHING.md) | Repository setup, GitHub permissions, and release packaging |

To offer the contribution to DOL, send the full project ZIP with the handoff message. Retain the project MIT notice, image and font manifests, and each asset's separate license or rights information.
