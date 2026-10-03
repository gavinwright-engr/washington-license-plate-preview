# Integration guide

The addition uses ordinary browser DOM and Canvas APIs. It needs no framework, dependency, service, account, build step, or server endpoint. A current browser with Canvas support provides the live preview; a static official-link fallback remains available without JavaScript.

## Automatic mounting

Copy `plate-preview.css`, `plate-catalog.js`, `plate-preview.js`, and the complete `assets/` directory from `dist/` to a directory served by your website:

```html
<link rel="stylesheet" href="/plate-preview/plate-preview.css">
<script src="/plate-preview/plate-catalog.js" defer></script>
<script src="/plate-preview/plate-preview.js" defer></script>

<div data-wa-plate-preview data-asset-base="/plate-preview/assets/">
  <p>The preview requires JavaScript.
    <a rel="noreferrer" href="https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/personalized-plates">
      Read DOL's personalized plate instructions.
    </a>
  </p>
</div>
```

Script order matters: the catalogue must load before the widget. Include both once per page. The widget mounts every `[data-wa-plate-preview]` root when the document is ready. A root must be dedicated to the widget because mounting replaces its children, including the fallback. With JavaScript disabled, the original message and official link remain usable.

`data-asset-base` is relative to the **host document URL**, unless it starts with `/`. It defaults to `assets/`. A local absolute value such as `/plate-preview/assets/` works across page directories. It must end in `/`; protocols, hostnames, `//`, `..` path segments, query strings, fragments, and spaces are rejected.

Font URLs are independent of that setting: CSS `@font-face` URLs resolve relative to `plate-preview.css`. Keep `assets/fonts/` next to the stylesheet or update those local URLs. The files and their licenses belong together. Do not substitute remote Google Fonts CSS or third-party imports.

## Manual mounting and lifecycle

For a dynamic route or application-controlled lifecycle, omit `data-wa-plate-preview` to avoid automatic mounting. Include your own initialization file after the catalogue and widget:

```html
<link rel="stylesheet" href="/plate-preview/plate-preview.css">
<script src="/plate-preview/plate-catalog.js" defer></script>
<script src="/plate-preview/plate-preview.js" defer></script>
<script src="/plate-preview/initialize-preview.js" defer></script>
<div id="plate-preview">
  <p>The preview requires JavaScript. Visit DOL for personalized plate instructions.</p>
</div>
```

Contents of `initialize-preview.js`:

```js
const root = document.getElementById('plate-preview');
const preview = window.WAPlatePreview.mount(root, {
  assetBase: '/plate-preview/assets/'
});

// Select a special design, then enable its personalized mode.
// Switching design or registration mode retains the candidate in the page.
preview.selectDesign('washington-state-parks');
preview.selectRegistrationMode('personalized');

// Reading state does not save, submit, reserve, or query anything.
const state = preview.getState();
// { design: 'washington-state-parks', designType: 'special',
//   registrationMode: 'personalized', characters: '', limit: 7,
//   personalizable: true, formatValid: false }

// When your application removes this view:
// preview.destroy();
```

| API | Behavior |
| --- | --- |
| `WAPlatePreview.mount(root, { assetBase })` | Mounts a dedicated DOM element and returns its controller. Repeated mounting returns the existing controller without applying new options. |
| `controller.getState()` | Returns a fresh snapshot with `design`, `designType`, `registrationMode`, `characters`, `limit` (`6` or `7`), `personalizable`, and `formatValid`. Throws after destruction. |
| `controller.selectDesign(id)` | Selects a known catalogue ID, synchronizes the design and character radio groups, and preserves the registration mode and candidate. Unknown IDs throw `RangeError`; a destroyed controller cannot select a design. |
| `controller.selectRegistrationMode(mode)` | Sets `assigned` or `personalized`, synchronizes the design and character radio groups, and preserves the selected design and candidate. Invalid modes throw `RangeError`; a destroyed controller is rejected. |
| `controller.destroy()` | Clears candidate input, removes the widget, cancels its timers, date visibility listener, and preview visibility observer, clears image references, and prevents pending rendering from updating the disposed view. Repeated destruction is safe. |
| `WAPlatePreview.plates` | Read-only catalogue for local integration. |
| `WAPlatePreview.validate(text, limit)` | Returns `{ text, count, valid, message }`; requires a string and a limit of `6` or `7`. Character-format feedback only. |

`designType` is `standard` or `special`; `registrationMode` is `assigned` or `personalized`. `design` is null after first opening Special plate until the viewer selects a design. In that state, `characters` is empty, `personalizable` and `formatValid` are false, and the preview displays a selection prompt. `personalizable` means the checked DOL page documents a personalization option for that design, independently of the selected mode. It is not applicant or vehicle eligibility. `characters` is the uppercased candidate only when the mode is personalized and the design supports it; otherwise it is an empty string. `formatValid` is always false in assigned mode or for a browse-only entry. It is never availability or approval.

If an automatically mounted widget needs a controller, call `WAPlatePreview.mount(root)` to retrieve it. To apply new options, destroy and mount again. Destroy does not restore fallback content; the host supplies any replacement.

## Two choices and mode changes

Choose Standard plate or Special plate, then Assigned (DOL chooses) or Custom (you choose) characters in the preview. Standard starts without a gallery. Special opens a compact searchable gallery with no design preselected. Its preview and character settings appear only after an explicit design selection; later visits restore that selected design. Both plate types support custom characters where documented. The initial selection is standard plus assigned, displaying the original DOL sample with optional current-date preview tabs. Assigned mode does not generate a random number or predict which number DOL will issue. The existing API uses `personalized` for the Custom choice.

Selecting a gallery card or calling `selectDesign()` updates the preview while retaining the registration mode and candidate. The gallery stays open and keyboard focus stays on the selected card. Assigned mode hides and disables character and size controls. Personalized mode enables them only for a supported design; unsupported entries show their requirements.

An empty supported personalized option shows the approximate personalized layout with the sample text removed, ready for candidate entry. Its original-sample comparison control is available before typing as well as afterward.

Character input stops at the current six- or seven-character limit. Attempts to exceed it show a red border and message while retaining the accepted characters in the preview. Paste inserts only the portion that fits, taking selected text into account. A subsequent accepted edit clears the limit warning; switching to the smaller size trims excess characters and reports that limit. Unsupported characters still receive format feedback. `formatValid` describes the retained value, not the rejected keystroke.

If artwork or fonts cannot load, the official sample remains visible with a **Retry preview** action. Failed image loads are removed from the local promise cache so retrying can recover after connectivity returns. Rendering diagnostics include the error name/message, not candidate text.

Switching options or selecting an unsupported design keeps the candidate in the current page so it returns when a supported personalized option is selected. This retained value is excluded from `getState()` while inactive. It is not saved to storage or sent elsewhere; existing host-page scripts can still read DOM input. Clearing or destroying the widget removes the candidate.

## Preview tabs

Current local month/year tabs appear by default in the plate’s upper-right corner. The tab area is a native button: click it or use Enter/Space to hide or restore the overlay. A separate Hide tabs / Show tabs button provides the same action. Both expose their state with aria-pressed, and the tab button’s accessible name includes the displayed month and year. The hidden area stays clickable with a faint outline.

Visibility survives design/mode changes in the current instance but is not saved. The date is refreshed every minute and when page visibility changes. Original-sample comparison hides the overlay; Collector Vehicle, Horseless Carriage, Restored, and emblem examples omit it. Tabs illustrate the current device date, not actual vehicle expiration; placement and colors are approximate. See [ARTWORK.md](ARTWORK.md). Tab visibility is presentation state and is not part of getState().

## Catalogue, filtering, and size

The catalogue contains 75 entries: 73 actual plate designs (one standard and 72 special) and two emblem examples. Sixty-three document personalization. The other entries remain viewable with character/size entry disabled: nine excluded designs, two emblem examples, and Rideshare whose personalization option is not documented. See [SOURCES.md](SOURCES.md).

Standard is a separate plate-type choice. All 74 special entries display by default, under 11 alphabetical category headings with subtle separators. Names are alphabetical within each category, with Throwback first within Special interest. Search matches name and category and shows every matching entry immediately; categories with no matches disappear. The category filter narrows the same visible groups. Filtering preserves the selected plate and candidate. Standard/special switching restores the last special selection and keeps gallery filters.

Desktop uses three columns with thumbnails capped at 160 pixels, ordinary page scrolling, and a compact preview sidebar. Narrower windows use a full-width gallery with three columns, or two on phones, and a **Preview & customize** shortcut; **Back to designs** returns focus to search. The shortcut hides while the preview is in view and throughout standard mode. Native radio arrows select adjacent visible designs.

The preview does not contain pricing data or cost-group controls. An integrating site can supply its own pricing outside the widget.

In personalized mode, selecting a six-character limit changes format feedback. A configured `smallArtwork` image takes precedence over `personalizedArtwork`; currently the standard mountain entry has a separate published motorcycle sample. For other sizes, `personalizedArtwork` takes precedence over the legacy `artwork`/`profile` fields. Assigned mode uses `assignedArtwork` when supplied and otherwise the original `artwork`; it never uses the personalized small-size sample. The size selector does not prove that every design is available for every vehicle type; follow each design's DOL requirements link.

To update the catalogue, edit entries in `plate-catalog.js`, then review current official evidence. Fields include `id`, `name`, `category`, `personalization`, `pageUrl`, `artwork`, dimensions, `sourceUrl`, `blankArtwork`, optional `assignedArtwork` and `personalizedArtwork`, eligibility text, vehicle notes, and `profile`. The optional mode-specific objects use `{ file, width, height, profile, blank }`, with `profile` and `blank` supplied where applicable. A `personalizedArtwork` without its own `profile` reuses the entry's legacy normalized geometry; supply an explicit profile when its layout differs. Its `blank` is variant-specific and does not inherit `blankArtwork`. These fields let an agency provide separate assets and geometry for assigned and personalized layouts. See [ARTWORK.md](ARTWORK.md) for examples and source limitations.

Use unique IDs, trusted official page URLs, and local asset filenames. Update summary counts when entries change. Do not relabel an undocumented option as offered without evidence. Update the source manifest when replacing assets.

## Multiple instances, forms, and styling

Each root has independent state. IDs and radio-group names are unique per instance. Gallery and registration-mode radios, search, category, size, and candidate controls explicitly reference a nonexistent `wpp-N-no-form` ID in their `form` attribute, so they have no form owner and do not join an enclosing host form. Character and size controls have no `name` attribute; buttons use `type="button"`. Reserve the `wpp-*` ID namespace and never create a matching `no-form` element. Prefer independent placement outside forms unless intentionally integrating the choice.

If a host application intentionally submits the choice, read `getState()` at a deliberate user action, explain that transmission, and apply normal server validation. Do not silently add background lookups or saved preferences.

CSS selectors are scoped under `.wa-plate-preview`. Local font-family aliases are unique, including `WPP Montserrat`, `WPP Plate Rounded`, and the `WPP Registration …` families; [FONTS.md](FONTS.md) lists the exact mappings. Host styles can still cascade into the widget; check them in context. The interface follows DOL's observed Montserrat typography, blue `#155c91`, green `#0a5e2e`, and near-white page background `#fdfdfd`. Theme variables include `--wpp-blue`, `--wpp-green`, `--wpp-ink`, `--wpp-muted`, and `--wpp-error`. Check contrast and focus visibility after any change.

[ARTWORK.md](ARTWORK.md) explains normalized geometry, approximate Canvas reconstruction, approved blank artwork, and the local `--wpp-registration-font` override. [FONTS.md](FONTS.md) documents per-source `profile.lettering` choices and cap-height/spacing fields. The approved override uses weight 400 and natural font advances, while retaining configured cap height and bounded final fitting. Exact production output needs authorized templates, approved typography, and agency calibration. Font files retain their separate OFL/MIT/Apache licenses and official images retain their owners' rights; see [ASSET-LICENSES.md](../ASSET-LICENSES.md).

## Optional same-origin iframe

For style separation, serve `widget.html` and its adjacent files locally:

```html
<iframe src="/plate-preview/widget.html"
  title="Washington license plate preview"
  width="100%" height="1300" loading="lazy"
  referrerpolicy="no-referrer"></iframe>
```

Adjust the height and test narrow screens; the iframe does not resize its parent automatically. A same-origin iframe separates styles but does not prevent privileged host scripts from reading its content. No iframe messaging API is provided. If the widget route uses a CSP `frame-ancestors 'none'` header, change it to an appropriate value such as `'self'` for intentional same-origin embedding.

## Adoption checks

Run `node --test` from the project root and inspect [VERIFICATION.md](VERIFICATION.md) for the version checked. Test within the actual application: all four combinations, assigned samples, candidate preservation and inactive state, keyboard/radio navigation, assistive technology, zoom, narrow layouts, filtering preservation, view-only entries, original-sample comparison, six-character feedback, current-date rollover, tab click/keyboard toggles, multiple instances, JavaScript-disabled fallback, missing asset handling, and host forms. Review existing analytics or session replay because other scripts may read DOM input.

Use the host application's established CSP. Local font loading needs `font-src 'self'`. [SECURITY.md](SECURITY.md) provides a restrictive standalone-route example; do not copy its `form-action 'none'` rule into an application that needs legitimate forms.
