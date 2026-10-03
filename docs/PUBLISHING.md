# Release packaging

The source, tests, documentation, and demo media are published on [GitHub](https://github.com/gavinwright-engr/washington-license-plate-preview). The demo's source links point to that repository.

## Review materials

- [Watch the 23-second preview](https://github.com/gavinwright-engr/washington-license-plate-preview#demo) directly in the project page, with a visible cursor and smooth scrolling. [Download MP4](media/demo.mp4) for the full-quality file.
- [Desktop](media/desktop.png) and [mobile](media/mobile.png) screenshots.
- [Current DOL page and proposed interaction](COMPARISON.md), with the original page link and comparison screenshots.
- [Complete project ZIP](https://github.com/gavinwright-engr/washington-license-plate-preview/archive/refs/heads/main.zip) from the current main branch, including source, tests, media, and license notices.
- [Integration guide](INTEGRATION.md) and [verification record](VERIFICATION.md).

The linked preview plays inline as an animated GIF without downloading a video or installing anything. The separate MP4 link downloads a file. Running the interactive prototype locally requires serving `dist/` as described in the README. The repository does not currently advertise a public hosted interactive demo.

## Package a fixed version

To package a committed version:

```sh
node --test
git archive --format=zip --prefix=wa-plate-preview/ --output=../wa-plate-preview.zip HEAD
```

The archive includes the project and asset notices, without Git history or duplicate ZIPs. A versioned GitHub release can include this archive, its SHA-256 checksum, and the demo MP4. Link to a release only after it exists.
