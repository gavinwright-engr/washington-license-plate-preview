# Release packaging

The source, tests, documentation, and demo media are published on [GitHub](https://github.com/gavinwright-engr/washington-license-plate-preview). The demo's source links point to that repository.

## Review materials

- [23-second demonstration](media/demo.mp4), with a visible cursor and smooth scrolling.
- [Desktop](media/desktop.png) and [mobile](media/mobile.png) screenshots.
- [Complete project ZIP](https://github.com/gavinwright-engr/washington-license-plate-preview/archive/refs/heads/main.zip) from the current main branch, including source, tests, media, and license notices.
- [Integration guide](INTEGRATION.md) and [verification record](VERIFICATION.md).

The GitHub project and video links are suitable for review without installing anything. Running the interactive prototype locally requires serving `dist/` as described in the README. The repository does not currently advertise a public hosted demo.

## Package a fixed version

To package a committed version:

```sh
node --test
git archive --format=zip --prefix=wa-plate-preview/ --output=../wa-plate-preview.zip HEAD
```

The archive includes the project and asset notices, without Git history or duplicate ZIPs. A versioned GitHub release can include this archive, its SHA-256 checksum, and the demo MP4. Link to a release only after it exists.
