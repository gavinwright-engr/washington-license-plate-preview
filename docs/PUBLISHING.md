# Publishing the repository

This project is published as a public code repository. The readable `dist/` files, documentation, tests, screenshots, GIF, and MP4 are included. Keep the official artwork and font notices; MIT applies to the original code and documentation, not every bundled asset.

## Repository and write access

The repository is [gavinwright-engr/washington-license-plate-preview](https://github.com/gavinwright-engr/washington-license-plate-preview). The complete project is available on `main`; no versioned release has been published yet.

Publication uses the repository owner's `gavinwright-engr` account. Future updates require an authenticated account with write access. Public visibility allows reading; it does not grant permission to upload code.

For a personal repository, the owner can invite the publishing account through the repository's collaborator/access settings; accept the invitation before pushing. For an organization repository, grant an appropriate repository or team role. If a GitHub app supplies authentication, its installation must also include this repository and the permissions needed to write its contents and workflow file. Account access and app permissions are separate; connecting one account does not automatically grant access to another account's repositories. Confirm write access before the push below.

## Push the prepared Git repository

Once write access is authorized, add the verified repository as the remote and push the main branch from the prepared local checkout:

```sh
git remote add origin https://github.com/gavinwright-engr/washington-license-plate-preview.git
git push -u origin main
```

Use GitHub's normal authentication flow. Do not put access tokens in source files, remote URLs, issues, or this documentation. If starting from the source ZIP rather than a Git checkout, first run `git init -b main`, `git add .`, and `git commit -m "Add Washington plate preview"`.

Suggested repository description:

> Drop-in Washington license plate preview with official samples, live lettering and DOL-style UI. No dependencies or tracking. MIT code.

The included GitHub Actions workflow runs the 12 built-in Node.js checks with read-only permissions. Enable private vulnerability reporting in the repository's security settings if available.

## Package a release

Create a ZIP from the committed source. The generated archive is kept outside the repository to avoid committing duplicate archives:

```sh
git archive --format=zip --prefix=wa-plate-preview/ --output=../wa-plate-preview.zip HEAD
```

To publish a versioned release, attach the ZIP to a GitHub release along with a SHA-256 checksum and, optionally, `docs/media/demo.mp4` as a separate easy-to-download asset. The handoff draft contains the confirmed repository URL. Add a release-download link to the README only after that release exists.

The optional demo shell's download buttons use the local `wa-plate-preview.zip` filename. Copy the generated review ZIP to `dist/wa-plate-preview.zip` when serving those buttons:

```sh
cp ../wa-plate-preview.zip dist/wa-plate-preview.zip
```

That generated copy is ignored by Git and excluded from the review ZIP to avoid recursive archives. A recipient extracting the ZIP can use the same procedure after initializing and committing the Git checkout, or update the two demo download links to the actual published release asset. The embeddable widget has no project-download controls.

The ZIP contains all source files and media but excludes `.git/` and duplicate generated ZIPs. Extract it, serve `dist/`, and review the README, integration instructions, approximation limits, and separate asset rights before offering it to DOL.
