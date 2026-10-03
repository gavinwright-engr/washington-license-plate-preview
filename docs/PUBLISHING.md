# Release packaging

The source, tests, documentation, and demo media are published on [GitHub](https://github.com/gavinwright-engr/washington-license-plate-preview). The demo's source links point to that repository.

To package a committed version:

```sh
node --test
git archive --format=zip --prefix=wa-plate-preview/ --output=../wa-plate-preview.zip HEAD
```

The archive includes the project and asset notices, without Git history or duplicate ZIPs. A versioned GitHub release can include this archive, its SHA-256 checksum, and the demo MP4. Link to a release only after it exists.
