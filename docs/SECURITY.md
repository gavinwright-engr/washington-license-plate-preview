# Security and privacy notes

The supplied code keeps the preview local and reviewable. No software can guarantee that it has no security issues. These notes describe the implementation's boundaries, not a certification of an integrating website.

## Threat model and implementation

Visitor-entered candidates are untrusted text. Labels and dynamic feedback use `textContent`; registration characters are drawn with Canvas `fillText`. Neither path interprets the candidate as HTML or script. The code uses no `innerHTML`, `eval`, executable templates, remote dependency loader, availability API, or candidate-derived URL. The registration font override is a CSS font-family value, not executed code.

The catalogue, local CSS, fonts, image files, source URLs, and rendering profiles are trusted maintainer inputs. Artwork loads through a fixed catalogue and a constrained local asset-directory setting. The directory must end in `/`; protocols, hostnames, `//`, `..` segments, query strings, and fragments are rejected. This is a small deployment guard, not a general-purpose sanitizer for arbitrary URLs. Review catalogue or template changes as code changes.

Canvas processing runs only for a supported personalized option. It reads locally served image pixels, applies bounded registration masks, and renders a visual approximation in memory; an empty candidate shows the approximate blank registration region. Assigned options display an unchanged published sample and do not draw a custom Canvas preview. Nothing uploads or saves the resulting image. Loading errors return to the original sample rather than submitting data. Original PNG/JPEG files on disk remain unchanged. The exact-rendering limitations are documented in [ARTWORK.md](ARTWORK.md).

## Requests, data, and host boundaries

The widget creates no account, backend, form, availability request, tracker, analytics call, cookie, local storage, session storage, service worker, or persistent record. Candidate characters remain in the current document and are removed by clearing the input, destroying the widget, or discarding the page. Browser-managed behavior and the host application remain outside this promise.

Two independent radio groups combine standard or special design with DOL-assigned or personalized characters. Assigned mode shows an official design sample, not a generated, issued, predicted, or reserved registration number. View-only entries direct visitors to their DOL numbering requirements rather than promising a next available number; some use call letters, existing plates, or emblems. Switching modes preserves the typed candidate locally for returning to personalization. In assigned mode, character controls are hidden and disabled, and `getState()` returns empty `characters` and `formatValid: false`. Assigned-mode accessibility announcements describe that mode and do not repeat preserved candidate text or inactive format feedback. An unsupported personalized design also keeps its candidate inactive and out of the returned characters. Retention across these choices does not create persistent storage.

Normal page use loads locally served HTML, CSS, JavaScript, WOFF2 fonts, and PNG/JPEG images. Selecting a design or size can load another local image; the first custom render can load its local registration font. Lazy images and browser caching affect when ordinary asset requests occur. Candidate text is never included in an asset URL or transmitted by the supplied preview. There are no network API lookups on typing or selection.

Clicked official links intentionally navigate to DOL, with `rel="noreferrer"`; the candidate is not appended to them. The optional demonstration shell’s source links navigate to the public GitHub repository with `rel="noreferrer"` and no candidate data. A public demo's host can log ordinary document and asset requests, including request metadata. Hosting logs and other sites' behavior are outside the widget.

Other host-page scripts, analytics, session replay, extensions, the browser, or the operating system can read or retain DOM input. Integrators should exclude these controls from existing collection systems when preserving the preview's privacy behavior. The widget cannot protect against a compromised host, modified download, privileged script, or browser extension. Image provenance is recorded in `dist/assets/ASSET-MANIFEST.json`; added font derivatives are recorded in `dist/assets/fonts/FONT-MANIFEST.json`. Official images and fonts retain separate licensing as described in [ASSET-LICENSES.md](../ASSET-LICENSES.md).

Preview tabs read the device’s local date in the page. The clock is rechecked every minute and on page visibility changes; no time service is contacted. Visibility is kept only in the mounted instance, and destruction removes the date timer and visibility listener. Tabs do not represent the vehicle’s actual registration expiration.

## Forms and validation

All input and select controls, including the design-type and registration-mode radios, explicitly refer to a unique nonexistent `wpp-N-no-form` ID, so they have no form owner and do not participate in an enclosing form's submission. Option and design radios use distinct per-instance names for native grouping; preferred characters and size have no `name`. Reserve `wpp-*` IDs and never create a matching `no-form` element. All buttons use `type="button"`; the widget itself creates or submits no form.

`getState()` is a local snapshot, not a submission. Its `designType` and `registrationMode` identify the selected option; `characters` describes only an active supported personalized choice. If a host intentionally transmits the snapshot, explain that action and perform all usual server validation. `personalizable` records a documented design option, not applicant eligibility or the selected registration mode. `formatValid` is advisory and false for assigned mode and unsupported entries; it is not an assigned-number eligibility check and cannot authorize issuance. Current DOL eligibility, reserved patterns, availability, and final approval remain authoritative. The preview does not reserve a plate, collect payment, or approve an application.

Changing an option invalidates pending custom rendering. Each asynchronous image/font render checks its generation before changing the view, so an earlier custom request cannot replace a later assigned sample. Destruction also invalidates pending work, clears candidate input, and makes the controller's state and selection methods reject further use.

## Content Security Policy

The addition requires no inline script, third-party script, remote font host, or connection permission. For a **dedicated standalone demo or widget route**, example HTTP response headers are:

```http
Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
```

`font-src 'self'` permits the bundled local fonts. `data:` supports the demo's data-URL favicon; the minimal widget route needs only `img-src 'self'`. For an intentional same-origin iframe, use `frame-ancestors 'self'`. `frame-ancestors` is enforceable only as an HTTP response header, not a CSP meta tag. The demonstration HTML includes a meta policy for the supported restrictions; server headers are preferable on deployed routes.

**Do not paste the entire policy into the existing application.** `form-action 'none'` blocks its legitimate forms, and `connect-src 'none'` could block its services. Merge relevant permissions into the host's policy and test its functionality. Serve assets with correct content types and use HTTPS through normal deployment practices.

## Review after changes

Run `node --test`, inspect source/profile/font/image changes, and observe the browser Network panel while typing, switching all four combinations, changing designs or size, and clearing input. Check inactive API characters, candidate restoration, delayed-render cancellation, and enclosing-form behavior. Locally served font/image loads and explicit navigation are expected; candidate transmission and remote lookups are not. Adding analytics, remote artwork, availability APIs, saved preferences, submission, or image export changes this documented model and needs separate review.
