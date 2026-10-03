# Sources and catalogue evidence

Official pages, catalogue entries, website styling, and public samples were checked on **October 2, 2026**. Verify current rules and designs again before agency deployment. This research does not establish manufacturing specifications or an image redistribution license.

## Canonical official references

| Reference | URL |
| --- | --- |
| Personalized instructions and character rules | https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/personalized-plates |
| Special design catalogue and detail-page links | https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/special-design-plates |
| Availability checker linked by DOL | https://fortress.wa.gov/dol/extdriveses/ESP/NoLogon/?Link=PersonalizedPlate |
| Plate standards linked by DOL | https://apps.leg.wa.gov/wac/default.aspx?cite=308-96A-065 |

These links are references, not widget APIs. No candidate was submitted during research, and the widget does not query or scrape the checker. Its inspected public page provides a text search, not design selection or a plate rendering font.

## Catalogue coverage

DOL's current special catalogue lists 74 entries: 72 plate designs and two emblem placement examples. Adding the standard mountain background from the personalized instructions produces **75 selectable entries: 73 real plate designs and two emblem examples**.

| Status | Entries | Widget behavior |
| --- | --- | --- |
| Personalization documented | 63 | Candidate preview and format feedback |
| Cannot be personalized | 9 | Original sample and DOL requirements link |
| Emblem placement example | 2 | Original example, no standalone personalized plate claim |
| Personalization not documented | 1 | Rideshare shown for browsing, no candidate entry |

The nine excluded entries are Disabled American veteran, Former Prisoner of War, Medal of Honor, Military Affiliate Radio System (MARS), Collector Vehicle, Horseless Carriage, Restored, Amateur Radio Operator (HAM), and Disabled Parking. The Disabled Parking detail page explicitly excludes personalization even though it is absent from the general exclusions list. The two emblem examples are 988 – Prevent veteran suicide and Veteran/Military Service Award emblems; they are not separate plate backgrounds. Rideshare's detail page does not document a personalization option, so the preview does not invent support or declare it prohibited.

The package contains **79 unchanged original PNG/JPEG image responses**, including the catalogue/detail samples and additional published standard-size, motorcycle, and alternate examples. `dist/assets/ASSET-MANIFEST.json` records each local filename, official source URL, dimensions, SHA-256, and unchanged-byte status. `plate-catalog.js` retains the official detail-page link for each selectable entry. Extra sample images do not imply additional currently offered designs or vehicle variants.

The catalogue and Seattle Seahawks detail page currently show the throwback design. Alternate published samples are preserved as source assets rather than presented as invented offerings. Empty vehicle-type evidence means not documented, not unavailable. Design-specific applicant/vehicle requirements always remain with DOL.

## Assigned and personalized choices

The [Throwback](https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/throwback-plate) and [Seahawks](https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-seahawks) pages distinguish “the next available number” from personalization. The interface uses DOL-assigned for the user's “random” option; it neither generates a number nor predicts which one DOL will issue. Four choices combine standard or special design with assigned or personalized characters.

The original generic standard sample is displayed for the assigned option; the published large personalized mountain sample is used for custom text. Standard personalized samples retain the mountain background. Throwback's black background is available with either number option.

The personalized instructions say an organization's specific sample characters do not automatically appear at the start of a personalized plate, explicitly naming the Seahawks `SH` prefix. The extra Seahawks image with a red X is instructional, not a clean personalized template. The inspected sources do not specifically confirm Throwback's personalized `WA` layout; the prototype's prefix removal remains an approximation until DOL provides approved artwork.

Some view-only catalog entries have other numbering rules. HAM uses FCC-assigned call letters under [RCW 46.18.205](https://app.leg.wa.gov/RCW/default.aspx?cite=46.18.205); MARS uses Department of Defense call letters under [WAC 308-96A-071](https://app.leg.wa.gov/wac/default.aspx?cite=308-96A-071). Restored uses qualifying existing historic plates; Collector Vehicle and Horseless Carriage also allow qualifying restored plates. Emblems attach to a plate rather than allocate a number. Their preview directs visitors to the applicable DOL requirements and does not promise a next available number. Some other restricted types do offer next available numbers, but this preview does not implement their issuance rules.

These mode and variant sources were checked October 3, 2026. All seven relevant previously bundled image responses still matched their recorded SHA-256 values.

## Format feedback scope

DOL describes A–Z, 0–9, hyphens, and spaces, with 1–7 characters on standard plates and 1–6 on motorcycle/small-trailer plates. This preview counts all entered spaces and hyphens, uppercases ASCII lowercase, reports unsupported characters, and blocks input beyond the selected limit with visible feedback. Switching to the smaller size trims the value to six characters with the same feedback. It requires at least one letter or number; all-space or all-hyphen input is not a meaningful preview candidate.

DOL also reserves letter/number combinations, excludes offensive words and some plate types, and reviews applications. The preview does not implement a complete issuance rules engine or word filter. A fitting character format never means available, eligible, reserved, or approved. No fees, processing estimates, payment, application, or availability service are implemented.

The reserved-format table describes “4 numbers followed by 1 letter and 1 number” beside `1234GO` (two letters). It does not specify every interaction with spaces and hyphens. Exact enforcement requires DOL's interpretation. DOL also says organizational sample prefixes do not automatically remain on personalized plates. The preview removes configured sample lettering rather than fixing those prefixes. Published alignment options and physical manufacture are beyond this prototype's centered rendering.

## Website typography and colors

The live special-design page and its CSS/computed styles use **Montserrat** for normal content. The font is locally bundled from the same unmodified Latin WOFF2 distribution used by the site's Google Fonts stylesheet. Public Sans is used only for the small banner font. No Google Fonts request is needed at runtime.

Observed DOL values include navigation green `#0a5e2e`, link/heading blue `#155c91`, near-white background `#fdfdfd`, and text `#1b1b1b`. The demonstration follows these colors, typography, square controls, and page layout while clearly identifying itself as a community contribution. It does not claim government affiliation.

Style evidence: [DOL theme styles](https://dol.wa.gov/themes/drupalbase_custom/assets/styles/style.css), [DOL colors](https://dol.wa.gov/themes/drupalbase_custom/assets/styles/colors.css), and [the website's selected font stylesheet](https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Public+Sans:wght@300;400;500;700&display=swap). These are research references only, not imported dependencies.

## Registration lettering and artwork

The official high-resolution standard samples have tall navy characters and a capital I with horizontal bars at top and bottom. Image metadata does not identify a font. No publicly approved manufacturing font or clean blank template was found in the inspected pages or checker.

On October 3, 2026, 84 static font variants were compared against 64 published source samples: all 63 personalizable designs and the standard motorcycle sample. Observed glyphs were isolated by sample-ink color, normalized to 48 × 96 pixels, and ranked by mean silhouette intersection-over-union. Cap height, visible glyph widths, and advances were measured separately. Human review chose condensed Noto Sans Mono 500 for the standard source to preserve its barred I and unbarred J, despite a slightly higher numerical score for Share Tech Mono whose J differs.

Other sources use Barlow Condensed, Inconsolata 500/600, Roadgeek 2014 Series B, IBM Plex Mono, or Droid Sans Mono substitutes. [FONTS.md](FONTS.md) and [font-matches.json](font-matches.json) record every selection and the comparison limits. The 12 browse-only entries and assigned-mode views preserve the actual raster lettering without substitution. Most sources reveal only SMPLE or SMPL, so unseen letters and digits remain unverified; some M/O and terminal shapes still differ. The chosen families are approximate matches, not identified official fonts.

Canvas reconstructs only configured sample-ink pixels and overlays substituted lettering. Missing photographic pixels are interpolated and locally smoothed, so a personalized render is not an unchanged official blank or an exact production preview.

[ARTWORK.md](ARTWORK.md) documents the geometry, limits, original-sample control, and authorized blank/font overrides. [ASSET-LICENSES.md](../ASSET-LICENSES.md) separates project MIT code, official image rights, and fonts licensed under SIL OFL 1.1, Roadgeek's MIT notice, and Droid's Apache 2.0 notice. Six static registration subsets are renamed derivatives, with source hashes and transformation records in the [font manifest](../dist/assets/fonts/FONT-MANIFEST.json). No official-image redistribution license was found; published image rights remain with their owners.
