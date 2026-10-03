# Washington Plate Preview

Explore Washington license plate designs and try your own characters in a live preview.

[![Source checks](https://github.com/gavinwright-engr/washington-license-plate-preview/actions/workflows/checks.yml/badge.svg)](https://github.com/gavinwright-engr/washington-license-plate-preview/actions/workflows/checks.yml)

![Short demo of browsing designs, entering characters, and toggling date tabs](docs/media/demo.gif)

[Watch the full-quality video](docs/media/demo.mp4) · [Desktop](docs/media/desktop.png) · [Mobile](docs/media/mobile.png)

- **Choose your plate:** standard or special, with assigned or custom characters. All 74 special entries are visible, organized into 11 categories with instant search.
- **Try your characters:** live previews enforce the selected six- or seven-character limit and flag extra input in red. Compare the original sample or toggle the month/year tabs.
- **Easy to embed:** responsive HTML, CSS, and JavaScript. No dependencies, build step, accounts, or tracking.

## Try it

Clone the repository or [download the complete project ZIP](https://github.com/gavinwright-engr/washington-license-plate-preview/archive/refs/heads/main.zip), then run:

```sh
python3 -m http.server 8000 --directory dist
```

Open **http://localhost:8000**. The readable files in `dist/` are the source.

To add the preview to an existing website, follow the [integration guide](docs/INTEGRATION.md).

## Status

An independent prototype using published DOL samples. Personalized lettering, reconstructed backgrounds, and date tabs are approximate. Availability and final approval remain with DOL; this preview does not check or reserve a number.

**Verified:** 12 automated checks, all 75 catalog entries, custom rendering for all 63 supported designs, and desktop/mobile checks from 320 to 1920 pixels wide. Keyboard limits, search, filters, and preview recovery were checked in the browser. [See the verification record](docs/VERIFICATION.md). Run the tests with `node --test`.

## License

Original code and documentation: [MIT](LICENSE). DOL artwork and bundled fonts have [separate rights and licenses](ASSET-LICENSES.md).

<details>
<summary>Technical reference</summary>

- [Integration and API](docs/INTEGRATION.md)
- [Artwork and rendering](docs/ARTWORK.md) · [Font calibration](docs/FONTS.md)
- [Sources](docs/SOURCES.md) · [Security and privacy](docs/SECURITY.md)
- [Contributing](CONTRIBUTING.md)

</details>
