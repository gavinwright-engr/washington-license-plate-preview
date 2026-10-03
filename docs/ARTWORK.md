# Artwork, geometry, and registration lettering

The project preserves **79 official DOL PNG/JPEG sample files unchanged**. Design cards, assigned mode, and the original-sample comparison show published files. The live personalized view is a Canvas rendering built from a sample; it is approximate until DOL supplies approved blank templates, approved lettering, and production geometry.

## Assigned and personalized variants

The independent design and character choices combine standard or special design with assigned or personalized characters. Assigned mode uses the unchanged official sample for that design, with a separate optional preview-tab overlay. Its `SAMPLE`, `SMPLE`, or other published example text is not a generated number or a prediction of the actual next available number. DOL determines the issued characters under the applicable requirements. Radio call signs, qualifying restored plates, and emblems have additional rules; see [SOURCES.md](SOURCES.md).

The standard assigned option uses the generic published standard sample (`official/standard-3.png`); its personalized option uses the large mountain sample as the rendering source. Choosing personalized characters does not by itself change the mountain background to Throwback. Throwback is a special background available with either registration choice.

The [Throwback](https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/throwback-plate) and [Seahawks](https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-seahawks) detail pages distinguish “the next available number” from personalization. DOL's [personalized instructions](https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/personalized-plates) say an organization's sample prefixes do not automatically appear on personalized plates, specifically illustrating omission of `SH` on Seahawks.

The assigned-style Throwback sample has stacked `WA` beside `SMPLE`. This prototype's personalized mask removes those marks to illustrate a custom character region. **The inspected official sources do not specifically confirm omission of `WA` or the exact personalized Throwback layout.** No distinct clean personalized Throwback sample or approved blank was published in the inspected pages or announcement, checked October 3, 2026. This mask is a documented approximation, not an official personalized variant. Exact rendering requires DOL-supplied mode-specific artwork and geometry.

The bundled `seattle-seahawks-2.png` is an instructional graphic with a red X over `SH`, not a realistic personalized plate variant. It is preserved as a source asset and is not used as a production template.

## Current-date preview tabs

An HTML overlay shows the viewer’s current local month and year in the upper-right tab area. It is visible by default; clicking that area or its text toggle hides/restores it without changing the underlying image or Canvas. The preference lasts only for that widget instance. The date refreshes every minute and when the page becomes visible. The original-sample comparison hides the overlay entirely. Collector Vehicle, Horseless Carriage, Restored, and emblem examples omit it.

These tabs are illustrative, not a vehicle’s actual expiration. Washington tabs represent the registration expiration period; see [WAC 308-96A-295](https://app.leg.wa.gov/wac/default.aspx?cite=308-96A-295) and [DOL tab renewal](https://dol.wa.gov/vehicles-and-boats/vehicles/renew-or-replace-vehicle-tabs). Placement follows the adjacent month/year placeholders in the bundled official samples, with approximate layouts for standard, Throwback, motorcycle, and other designs. Agency-approved geometry should replace these approximations for production.

Month colors follow the historical quarterly pattern documented by the [University of Washington plate archive](https://staff.washington.edu/islade/cyclestickers.htm). The blue 2026 year treatment is a visual approximation of an [observed 2026 tab](https://komonews.com/news/local/wa-proposal-would-boost-fees-for-expired-tabs-parked-cars-included-registered-drivers-in-washington-state-licensing-parked-cars-tickets-sound-transit). No future color cycle is assumed: unverified years use a neutral color. The year tab is marked PREVIEW. Neither artwork files nor image metadata are modified.

## Mode-specific artwork configuration

Catalogue entries may provide `assignedArtwork` and `personalizedArtwork` objects, each with `file`, `width`, `height`, and optional rendering `profile` and `blank`. Files are local paths relative to `assetBase`. Assigned mode displays `assignedArtwork.file` unchanged when configured and otherwise the original `artwork`; it never uses the personalized `smallArtwork` sample. For personalized mode, six-character `smallArtwork` takes precedence, then `personalizedArtwork`, then the existing `artwork`, dimensions, `profile`, and `blankArtwork` fields.

When `personalizedArtwork.profile` is omitted, the renderer reuses the entry's legacy normalized `profile`. Provide a matching explicit profile when the variant's layout differs. `personalizedArtwork.blank` belongs only to that variant: the renderer does not inherit a legacy `blankArtwork`, which could have the wrong layout. Supply its own approved blank when available.

For example, separate standard-size source images and an agency-approved personalized blank can be configured in the entry:

```js
assignedArtwork: {
  file: 'official/standard-3.png',
  width: 332,
  height: 183
},
personalizedArtwork: {
  file: 'official/standard.png', // Original personalized sample for comparison
  width: 1720,
  height: 809,
  blank: 'approved/standard-personalized-blank.png',
  profile: {
    masks: [],
    textRect: [0.08, 0.35, 0.84, 0.51], // Example only; use approved bounds
    inkColor: '#00355b',
    font: 'tall'
  }
}
```

Supply the real authorized files and matching geometry before using this example. An approved `blank` bypasses sample reconstruction for custom previews while the mode's `file` remains available for original-sample comparison. Different layouts need different profiles; do not assume the assigned registration region matches the personalized region. Size-specific `smallArtwork` configuration is described below. Update asset provenance and retain each asset's applicable rights.

## What the renderer does

The following steps run only for a supported personalized option. An empty candidate shows the reconstructed registration region ready for input; entering characters adds them to that layout. Assigned options display the unchanged source without a custom Canvas overlay.

1. Load the selected personalized source or approved blank. Use the size-specific artwork when the six-character size is selected and a matching published or authorized asset is configured.
2. Draw it to Canvas, limiting large image rendering to 1000 pixels wide while retaining its aspect ratio. Original source bytes and metadata stay untouched on disk.
3. Unless approved blank artwork is configured, inspect only the registration regions declared in `profile.masks`. Compare pixel colors to the sampled registration `inkColor`, using a configured tolerance or the default color-distance threshold. Expand matching ink pixels by two neighboring pixels to include antialiased edges within the mask.
4. Replace matching pixels with a sampled solid `backgroundColor`, or initially interpolate the colors immediately above and below that mask when no solid fill is configured. For photographic backgrounds, perform 150 bounded local-neighbor averaging passes on only those detected ink pixels to reduce streaking. Other pixels are left alone; the whole registration rectangle is not erased.
5. Draw the candidate in the normalized `profile.textRect`, using its calibrated local font, ink color, cap height, observed glyph widths, and spacing. Most profiles place glyphs in measured cells; Professional Firefighter uses a proportional run. Fit long runs horizontally while preserving cap height, and bound vertical overshoots or descenders to the region when necessary. Input is capped at the selected six- or seven-character limit. A blocked overflow attempt shows red feedback while the retained characters remain in the preview.

Masks are intended to remove sample characters and organization prefixes without painting over the whole background. They are maintainer-reviewed geometry, not semantic image recognition. A photographic detail with a similar color inside a mask can be mistaken for ink; antialiasing or nonmatching ink can remain. Interpolation cannot recover pixels hidden by the original letters. It can produce smears or missing detail. Solid designs are simpler but still need visual review. A reconstructed background is never described as an official blank template.

The **Show original DOL sample** control provides a comparison with the unchanged source for the personalized mode. It is available on supported personalized options before and after candidate entry. Assigned options, emblem examples, excluded plates, and Rideshare remain original-sample views with character entry disabled. If rendering fails, the widget keeps the original sample and reports that the custom preview could not render.

## Geometry and configuration

Each catalogue entry in `plate-catalog.js` has a `profile`. Its `masks` and `textRect` use `[x, y, width, height]` normalized to the full image: values between zero and one represent fractions of the image's dimensions. This preserves the relationship across rendering sizes. `inkColor` is a six-digit hex sample-lettering color. Optional `backgroundColor` supplies a solid fill, and optional `tolerance` adjusts color matching. A mask may also be an object with its own `rect`, `inkColor`, `backgroundColor`, and `tolerance`.

`profile.lettering` holds the per-source font and measured cap-height/spacing configuration. All 63 personalizable designs and the separate standard motorcycle source have calibrated profiles, documented in [FONTS.md](FONTS.md) and [font-matches.json](font-matches.json). Most use measured character cells; Professional Firefighter uses proportional widths and letter spacing. Unseen narrow I, 1, and hyphen glyphs retain a ratio based on the substitute's natural ink width rather than being widened to a full cell. These measurements improve the sample resemblance without proving the font's identity or unknown glyphs.

The legacy `profile.font` remains a fallback when no calibrated font is selected: `tall` and `rounded` use Barlow Condensed, while `angular` selects Bebas Neue. The approved CSS font override takes precedence over all defaults.

`textRect` reserves the intended registration region, including room for left-side imagery. Check every design with short and seven-character candidates. A six-character limit is format feedback, not evidence that every special design is issued for that vehicle type. The standard mountain entry has a separate published motorcycle sample; other entries use their available source image unless an authorized size-specific asset is supplied.

Canvas `measureText` cap-height measurement, per-glyph calibration, run centering, and bounded fitting live in `drawCandidate()` in `plate-preview.js`. If the agency replaces approximate fonts or supplies measured production geometry, review `profile.lettering`, `textRect`, ink color, and alignment together. The current renderer centers text; it does not implement all DOL alignment options or physical embossing.

## Approved blank-template override

Obtain an authorized blank template and place it in the local asset directory. Edit the relevant source catalogue entry before deployment:

```js
// Fields in the standard-size catalogue entry:
artwork: 'official/standard.png',       // Published original for comparison
blankArtwork: 'approved/standard-blank.png',
profile: {
  masks: [],                          // Bypassed when blankArtwork is present
  textRect: [0.08, 0.35, 0.84, 0.51], // Example only; replace with approved bounds
  inkColor: '#00355b',
  font: 'tall'
}
```

`blankArtwork` is relative to `assetBase` and must identify a trusted local file. The renderer loads that file for custom previews and **bypasses all sample-ink removal**. It continues to display the published `artwork` file for the original-sample comparison. The template's geometry must match its profile; adjust the coordinates for its actual layout. The example bounds are not a manufacturing specification.

For a size-specific template, set `smallArtwork.blank` and its matching `smallArtwork.profile`:

```js
smallArtwork: {
  file: 'official/standard-motorcycle.png',
  width: 978,
  height: 529,
  blank: 'approved/standard-motorcycle-blank.png',
  profile: {
    masks: [],
    textRect: [0.19, 0.294, 0.617, 0.478], // Example only
    inkColor: '#00355b',
    font: 'tall'
  }
}
```

A blank asset is a configuration change, not a new option passed to `mount()`. Update the catalogue and asset provenance together. Its rights remain those of its owner; the project MIT license does not relicense an agency-provided template.

## Approved local-font override

The interface font is the actual DOL website's Montserrat. It is distinct from the per-design registration substitutes. The standard source uses condensed Noto Sans Mono 500 to retain its barred I and unbarred J; specialty sources select other licensed families from measured observed glyphs. Font identity and unseen glyph details remain unverified. [FONTS.md](FONTS.md) explains the selections, renamed derivatives, and separate OFL/MIT/Apache licenses.

If DOL provides an approved font with appropriate rights, define a uniquely named, local font face in the host stylesheet and set `--wpp-registration-font` on the widget root:

```css
@font-face {
  font-family: 'Agency Approved Registration';
  src: url('/plate-preview/assets/fonts/agency-approved.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.wa-plate-preview {
  --wpp-registration-font: 'Agency Approved Registration';
}
```

The Canvas renderer reads the family value and waits for that local font at weight 400. The override bypasses per-glyph width substitutions and measured cells, using the approved font's natural widths and advances before final fitting. `profile.lettering.capHeight` still controls target height; a proportional profile's `letterSpacing` can configure spacing. A long run may be compressed horizontally to fit `textRect`, and vertical overshoots/descenders are bounded when needed. Configure and review these metrics against agency specifications rather than assuming the substitute's calibration is correct for the approved font.

The property does not download an arbitrary font URL or execute its contents as code. Keep the font locally served and retain its license. Approved assets make faithful rendering possible; they do not automatically certify manufacturing accuracy. See [FONTS.md](FONTS.md) for the configuration fields.

## Provenance and review

`assets/ASSET-MANIFEST.json` records all 79 source URLs and SHA-256 hashes. Original images are exact downloaded responses, with no metadata stripping, cropping, recoloring, or saved sample-removal operation. Only the transient Canvas view and separate HTML preview-tab overlay change. Compare source files and visual output when updating the catalogue. Current automated and browser evidence belongs in [VERIFICATION.md](VERIFICATION.md).

No official-image redistribution license was found in the inspected sources. These reference images retain their owners' rights; see [ASSET-LICENSES.md](../ASSET-LICENSES.md).
