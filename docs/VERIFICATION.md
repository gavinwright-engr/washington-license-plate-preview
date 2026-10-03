# Verification record — four options and calibrated lettering

Checked October 3, 2026. These results cover the supplied contribution, not an official issuance system or a certification of an integrating website.

## Automated tests

Run from the project directory with Node's built-in runner:

```sh
node --test
```

The format and catalogue/asset test files completed successfully. Their **12 checks** verify size limits, preservation of spaces and hyphens, unsupported characters, format-only wording, complete audited catalogue coverage, restricted personalization types, bounded rendering geometry, safe local paths, SHA-256 integrity of all **79 unchanged DOL image files**, and the six new font derivatives with their complete license notices. Every personalized profile is cross-checked against its documented lettering calibration. Individual test counts are also visible with `node tests/catalog.test.cjs` and `node tests/format.test.cjs`.

## Browser verification

The standalone demonstration was served over local HTTP and tested in Chromium **151.0.7922.173** under its restrictive CSP. Browser automation and its result files stayed outside the distributable; the addition itself has no runtime dependencies.

The four option cards were exercised: standard with DOL-assigned characters, standard with custom characters, special design with DOL-assigned characters, and special design with custom characters. The initial state used the exact published `official/standard-3.png` sample in assigned mode, with character controls hidden and disabled and no custom Canvas visible.

All **75 catalogue entries** were selected through the public API in assigned mode. Each displayed its configured original sample, kept custom Canvas inactive, and returned empty active characters with `formatValid: false`. In personalized mode, all **63 supported entries** rendered a candidate on Canvas; all **12 unsupported entries** retained original samples, disabled editing, and returned no active candidate. Browser page errors, request failures, and HTTP error responses: **zero**.

The following checks passed:

- All four choices synchronize the selected radio, design type, registration mode, controls, preview, and public API state.
- A supported personalized choice renders an approximate empty registration region before input. Clearing the candidate returns to that layout and focuses the character field.
- Candidate text and the last selected special design survive switching between standard/special and assigned/personalized options. Assigned mode keeps preserved custom text out of the displayed preview and API characters.
- A targeted follow-up verified that assigned-mode status announcements describe assignment rather than repeating preserved candidate text or inactive format feedback. All 12 view-only entries use requirements wording and a requirements CTA; the HAM announcement avoids a next-available-number claim.
- Live uppercase conversion, caret preservation, counting of spaces/hyphens, and no silent candidate truncation.
- Seven- and six-character limits; standard personalization at the six-character size uses its published motorcycle sample. An overlong candidate becomes inactive with `aria-invalid="false"` in assigned mode and is restored with its format feedback on returning to personalization.
- The special-design picker contains **74 entries** and excludes Standard. Its category menu excludes the standard-only category. Every special category, name search, empty results, and preservation of selected design and candidate through filtering were checked.
- Desktop native option/design radio keyboard navigation and mobile picker synchronization, including a selected design excluded by current filters.
- Original-sample comparison and return to the live personalized preview.
- Unsupported markup remains inert text in the field and Canvas; no HTML node is created from it.
- No page horizontal overflow at 320, 375, 768, 1024, and 1440 CSS pixels.
- Invalid registration-mode API values throw without changing state. State and selection methods reject destroyed controllers.
- A deliberately delayed font promise cannot finish an old custom render over an assigned sample. Delayed work also cannot alter a replacement instance after destroy/remount; repeated stale destruction leaves the replacement intact.
- Multiple instances have independent candidates and modes, unique IDs, and distinct option/design radio-group names.
- Controls mounted inside a host form with a submit button have null form owners. Host FormData contains only the host's named field, and Enter in the widget's character and search inputs does not submit the host form.
- All requests recorded during the full matrix check stayed on the local test origin and used GET without a request body. Candidate text was never used in an asset URL; no external font, analytics, availability, or submission request occurred.
- Official fallback links remain usable with JavaScript disabled.

Earlier catalogue work included inspection of original image dimensions, masks, ink colors, unusual text placements, and a gallery of personalized renders. The interface font and theme values were checked against DOL's actual website. The October 3 browser checks above verify mode behavior and rendering execution; they do not certify pixel accuracy or manufacturing geometry. Source review found no tracking, storage, executable input, dynamic HTML insertion, or network data API.

## Font comparison and glyph bounds

The lettering study compared **84 static font variants** against **64 source samples**: all 63 personalizable designs and the standard motorcycle variant. The actual sample characters were inspected individually, with organization prefixes excluded from font scoring. Normalized glyph silhouettes, measured cap heights, visible widths, and spacing informed the selections; independent visual review checked structural details. The standard selection preserves its barred I and unbarred J. [FONTS.md](FONTS.md) and [font-matches.json](font-matches.json) record choices and limits for every source.

A separate Chromium check exercised **512 rendering cases across all 64 profiles**. It captured actual Canvas transforms and measured glyph ink bounds for wide W, narrow I and 1, hyphens, Q descenders, spaces, blank layouts, and a local approved-font override. Every drawn glyph remained within its configured `textRect`. The override retained natural character advances without overlapping wide letters. All configured local font families loaded, and the check recorded zero browser or HTTP errors and no external requests. The full four-option regression was repeated with these fonts installed, including the delayed-font cancellation checks.

The six new subset fonts total **44,784 bytes**. Their build record verifies original font and license hashes, the 38 registration characters, fixed variable-font axes, renamed primary identities, and reserved-name conditions. Rebuilding independently with the recorded FontTools and Brotli versions produced identical bytes. Font rebuilding is optional developer tooling; the widget does not run it.

## Limits and checks for adoption

Assigned views show published example registrations, not a generated or predicted next number. No live availability query, reservation, payment, or issuance action was performed.

Custom lettering and reconstructed background pixels are approximations. Successful rendering does not certify typography, hidden image details, placement, embossing, vehicle eligibility, availability, or plate approval. **The exact personalized Throwback layout, including omission of its stacked WA prefix, remains unverified by the inspected official sources.** Its current mask illustrates a possible custom-character region; DOL must confirm that geometry. [ARTWORK.md](ARTWORK.md) explains this limitation and the use of approved blank templates, mode-specific artwork, and manufacturing fonts.

Test the real host application's styles, CSP, analytics, and assistive-technology requirements. Chromium was exercised here; Firefox, Safari, and agency-supported screen readers still need integration testing. The local HTTP-server method was verified. Direct local-file behavior was not part of these checks and may depend on browser policy.
