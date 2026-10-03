# Contributing

Keep this addition small enough for an existing website's maintainers to inspect and adopt. The readable files in `dist/` are the source; there is no install or build step.

## Work locally

Serve the demonstration from the repository directory:

```sh
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000`, or `/widget.html` for the minimal addition. Run the tests with Node's built-in runner:

```sh
node --test
```

## Keep the contribution focused

- Prefer plain browser APIs and scoped CSS. Preserve unique IDs, independent instances, safe destruction, and controls that do not join host forms.
- Preserve labels, native keyboard behavior, visible focus, responsive layouts, and the JavaScript-disabled fallback. Check the affected behavior on both desktop and mobile.
- Keep candidates local. Do not introduce trackers, storage, cookies, background availability requests, dependencies, or silent submission. Render untrusted text as text or Canvas lettering, never as executable HTML.
- Keep format feedback distinct from DOL availability, eligibility, and final approval. Document any rule change with a current official source.
- For catalogue or artwork changes, retain provenance and separate rights, update the manifest, and review the rendering geometry. Do not describe substitute fonts or reconstructed pixels as exact manufacturing output. See [ARTWORK.md](docs/ARTWORK.md) and [ASSET-LICENSES.md](ASSET-LICENSES.md).

## Submit a change

Explain the problem, resulting behavior, and relevant validation in the pull request. Include an updated screenshot or short recording when a visible change benefits from one. Update the integration or security documentation if behavior changes, and add a meaningful test when the change needs one.

Offer original code and documentation contributions under the project's [MIT license](LICENSE). Include appropriate notices and documented permissions for any third-party material; official images and OFL fonts remain separately licensed. Do not include real plate applications, personal information, or credentials in examples or recordings.
