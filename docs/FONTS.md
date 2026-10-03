# Registration fonts and per-plate calibration

The personalized preview uses measured, locally hosted font substitutes. **The official Washington manufacturing font has not been identified from the inspected public assets.** These selections improve resemblance to published samples; they do not establish font identity, complete glyph accuracy, or manufacturing specifications. Interface typography remains the DOL website's Montserrat.

Assigned-mode images and all 12 browse-only entries retain their actual rasterized lettering. Substitution applies only to supported personalized renderings. Original DOL image files remain unchanged.

## Comparison evidence

Checked October 3, 2026. The study compared **84 static font variants** against **64 source samples**: all 63 personalizable plate designs plus the separate standard motorcycle sample. It isolated observed glyphs using the sampled ink color, normalized each to 48 × 96 pixels, and ranked mean binary silhouette intersection-over-union. Cap height, visible widths, and character advances were measured separately.

[font-matches.json](font-matches.json) records source files, observed text, selected family/weight, per-glyph and mean scores, the top three candidates, selection reasoning, and calibration values. A silhouette score ranges from zero to one; it measures this comparison's overlap, not confidence in a font's identity or approval of the preview.

Human structural review matters. Share Tech Mono had a marginally higher numerical score for the standard `JIMSTOY` sample, but its J adds a top bar absent from that source. The selected Noto Sans Mono 500 at width axis 62.5 retains the observed unbarred J and barred I. Some M/O and terminal shapes still differ. Most special sources show only `SMPLE` or `SMPL`, so unseen glyphs cannot be confirmed. Source age, rasterization, antialiasing, and photographic colors affect the ranking. The motorcycle sample is calibrated independently and does not establish the shape of letters absent from `HOGWLD`.

## Selected families

| Source family | Configuration key | Runtime CSS alias | Source profiles | License |
| --- | --- | --- | --- | --- |
| Noto Sans Mono 500, width 62.5 | `noto-sans-mono` | `WPP Registration Standard` | Standard mountain: 1 | OFL 1.1 |
| Inconsolata 500 | `inconsolata-500` | `WPP Registration Curve` | 5 | OFL 1.1 |
| Inconsolata 600 | `inconsolata-600` | `WPP Registration Curve` | 2 | OFL 1.1 |
| Roadgeek 2014 Series B 400 | `roadgeek-2014-b` | `WPP Registration Narrow` | 3 | MIT |
| IBM Plex Mono 400 | `ibm-plex-mono` | `WPP Registration Mono` | Professional Firefighter: 1 | OFL 1.1 |
| Droid Sans Mono 400 | `droid-sans-mono` | `WPP Registration Round` | Seattle Kraken: 1 | Apache 2.0 |
| Barlow Condensed 400 | `barlow-condensed` | `WPP Plate Rounded` | 50 other designs plus motorcycle: 51 | OFL 1.1 |

Bebas Neue remains available through the legacy `profile.font: 'angular'` fallback, using `WPP Plate`. It is not selected by the 64 calibrated profiles. Without a calibrated font, legacy `tall` and `rounded` profiles fall back to Barlow Condensed.

## How geometry uses the selected font

`profile.textRect` is `[x, y, width, height]` normalized to the source image. `profile.lettering` supplies the font key and these measurements:

| Field | Meaning |
| --- | --- |
| `capHeight` | Target cap height as a fraction of `textRect` height |
| `layout` | `cells` for measured character positions, or `proportional` for a font-advance run |
| `glyphWidth` | Typical visible glyph width, relative to target cap height |
| `cellAdvance` | Distance between character cells, relative to target cap height |
| `glyphWidths` | Per-character observed visible widths, relative to target cap height |
| `widthScale` | Horizontal scale for the proportional substitute |
| `letterSpacing` | Additional proportional spacing, relative to target cap height |

The renderer measures the selected font's cap height with Canvas, then fits observed glyph widths to the source measurements. Most profiles use cells so a proportional substitute does not unexpectedly widen M/W or crowd registration spacing. An unseen I, 1, or hyphen uses its natural ink-width ratio relative to S instead of being widened to the typical full glyph width. Spaces take a cell and count toward the character limit.

Professional Firefighter uses a proportional run with its recorded `widthScale` and `letterSpacing`. Runs that exceed the available region compress horizontally while retaining cap height; vertical overshoots or descenders are bounded when needed. This is a browser preview fit, not a production character-spacing rule. [ARTWORK.md](ARTWORK.md) documents mask reconstruction, per-mode artwork, and authorized blank templates.

## Approved local-font override

Define an authorized local `@font-face` at weight 400 and set `--wpp-registration-font` on the widget root, as shown in [ARTWORK.md](ARTWORK.md). The override takes precedence over all substitute selections. It bypasses cells and individual glyph-width substitutions, using natural font widths and advances before final bounds fitting.

`profile.lettering.capHeight` still sets the target height. A proportional profile can supply `letterSpacing`; configure it and the text rectangle from approved agency metrics. Existing sample measurements should not be assumed correct for a replacement face. Final horizontal fitting can compress a long run, and vertical bounds can scale overshoots if they exceed the region. The override is a family value, not a font URL or executable input.

## Licensing and local derivative files

Six additional files are renamed derivatives, not unchanged originals. Variable axes are pinned where applicable; supported characters `A–Z`, `0–9`, space, and hyphen are subsetted; primary identities are renamed; and files are encoded as WOFF2. Original copyright, designer, trademark, and full license notices remain. Reserved primary names, including IBM's “Plex,” are absent from derivative identities.

The six files total **44,784 bytes**. [FONT-MANIFEST.json](../dist/assets/fonts/FONT-MANIFEST.json) records source URLs/hashes, selected axes, output hashes, names, modification steps, and license paths. Keep it and the adjacent license notices when sharing the files. Font licenses are separate from the project's MIT notice: Noto, Inconsolata, and IBM Plex are OFL; Roadgeek is MIT; Droid is Apache 2.0. The earlier Montserrat, Public Sans, Barlow Condensed, and Bebas Neue distributions remain unchanged and OFL licensed. [ASSET-LICENSES.md](../ASSET-LICENSES.md) lists every bundled family.

All files are locally served. The website needs no new runtime dependency, font service, package installation, or font build step.

## Optional maintainer rebuild

[build-registration-fonts.py](../tools/build-registration-fonts.py) and [registration-fonts.json](../tools/registration-fonts.json) reproduce the six derivatives from locally supplied, hash-verified source fonts. Their optional Python development requirements are in [requirements-fonts.txt](../tools/requirements-fonts.txt); they are not needed to run or embed the addition. The script does not fetch fonts or other network data.

Provide the source files named in the configuration, then run the tool in a Python environment with those development requirements installed:

```sh
python3 tools/build-registration-fonts.py \
  --source-dir font-sources \
  --output-dir build/registration-fonts
```

Keep this review/build workflow separate from deployment: the checked-in WOFF2 files are ready to serve.

## Every source-profile selection

The score below is the mean observed-glyph silhouette score, rounded to four decimal places. It does not measure unknown glyphs. Each plate name links to the unchanged source sample; exact per-glyph evidence is in [font-matches.json](font-matches.json).

| Plate/source | Observed text | Selected source family and weight | Score | Layout |
| --- | --- | --- | --- | --- |
| [Standard mountain background](../dist/assets/official/standard.png) | `JIMSTOY` | Noto Sans Mono 500 · width 62.5 | 0.8014 | cells |
| [Air Force](../dist/assets/official/air-force.png) | `SMPLE` | Barlow Condensed 400 | 0.8081 | cells |
| [Army](../dist/assets/official/army.png) | `SMPLE` | Barlow Condensed 400 | 0.8144 | cells |
| [Coast Guard](../dist/assets/official/coast-guard.png) | `SMPLE` | Barlow Condensed 400 | 0.8358 | cells |
| [Marine Corps](../dist/assets/official/marine-corps.png) | `SMPLE` | Barlow Condensed 400 | 0.8336 | cells |
| [National Guard](../dist/assets/official/national-guard.png) | `SMPLE` | Barlow Condensed 400 | 0.8226 | cells |
| [Navy](../dist/assets/official/navy.png) | `SMPLE` | Barlow Condensed 400 | 0.8129 | cells |
| [Gold Star](../dist/assets/official/gold-star.png) | `SMPLE` | Barlow Condensed 400 | 0.8149 | cells |
| [Purple Heart](../dist/assets/official/purple-heart.png) | `SMPLE` | Barlow Condensed 400 | 0.8163 | cells |
| [4-H](../dist/assets/official/4-h.png) | `SMPLE` | Barlow Condensed 400 | 0.8215 | cells |
| [Breast Cancer](../dist/assets/official/breast-cancer.png) | `SMPLE` | Inconsolata 500 | 0.8006 | cells |
| [FFA Foundation](../dist/assets/official/ffa-foundation.png) | `SMPLE` | Barlow Condensed 400 | 0.8255 | cells |
| [Fred Hutchinson Cancer Center](../dist/assets/official/fred-hutchinson-cancer-center.png) | `SMPLE` | Barlow Condensed 400 | 0.7962 | cells |
| [Helping Kids Speak](../dist/assets/official/helping-kids-speak.png) | `SMPLE` | Barlow Condensed 400 | 0.8293 | cells |
| [J.P. Patches Pal](../dist/assets/official/jp-patches-pal.png) | `SMPLE` | Barlow Condensed 400 | 0.8164 | cells |
| [Keep Kids Safe](../dist/assets/official/keep-kids-safe.png) | `SMPLE` | Barlow Condensed 400 | 0.8259 | cells |
| [Washington Apple Commission](../dist/assets/official/washington-apple-commission.jpg) | `SMPL` | Inconsolata 500 | 0.8070 | cells |
| [We Love Our Pets](../dist/assets/official/we-love-our-pets.png) | `SMPLE` | Barlow Condensed 400 | 0.8064 | cells |
| [Central Washington University](../dist/assets/official/central-washington-university.png) | `SMPLE` | Barlow Condensed 400 | 0.8229 | cells |
| [Eastern Washington University](../dist/assets/official/eastern-washington-university.png) | `SMPL` | Inconsolata 600 | 0.8171 | cells |
| [Evergreen State College](../dist/assets/official/evergreen-state-college.png) | `SMPLE` | Barlow Condensed 400 | 0.7989 | cells |
| [Gonzaga University](../dist/assets/official/gonzaga-university.png) | `SMPLE` | Barlow Condensed 400 | 0.8293 | cells |
| [Seattle University](../dist/assets/official/seattle-university.png) | `SMPLE` | Barlow Condensed 400 | 0.8104 | cells |
| [University of Washington](../dist/assets/official/university-washington.png) | `SMPLE` | Inconsolata 500 | 0.8287 | cells |
| [Washington State University](../dist/assets/official/washington-state-university.png) | `SMPL` | Barlow Condensed 400 | 0.8078 | cells |
| [Western Washington University](../dist/assets/official/western-washington-university.png) | `SMPL` | Barlow Condensed 400 | 0.8241 | cells |
| [Law Enforcement Memorial](../dist/assets/official/law-enforcement-memorial.png) | `123A` | Roadgeek 2014 Series B 400 | 0.7675 | cells |
| [Professional Firefighter](../dist/assets/official/professional-firefighter.png) | `SMPLE` | IBM Plex Mono 400 | 0.8759 | proportional |
| [Volunteer Firefighter](../dist/assets/official/volunteer-firefighter.png) | `SMPLE` | Barlow Condensed 400 | 0.8063 | cells |
| [Endangered Wildlife: Orca](../dist/assets/official/endangered-wildlife-orca.jpg) | `SMPLE` | Barlow Condensed 400 | 0.8178 | cells |
| [Honeybees and Pollinators](../dist/assets/official/honeybees-and-pollinators.png) | `SMPLE` | Barlow Condensed 400 | 0.7963 | cells |
| [Lighthouses](../dist/assets/official/lighthouses.png) | `SMPLE` | Barlow Condensed 400 | 0.8174 | cells |
| [Mount St. Helens](../dist/assets/official/mount-st-helens.png) | `SMPLE` | Barlow Condensed 400 | 0.8162 | cells |
| [San Juan Islands](../dist/assets/official/san-juan-islands.png) | `SMPLE` | Barlow Condensed 400 | 0.8237 | cells |
| [Smokey Bear](../dist/assets/official/smokey-bear.png) | `SMPLE` | Barlow Condensed 400 | 0.8195 | cells |
| [State Flower](../dist/assets/official/state-flower.png) | `SMPLE` | Barlow Condensed 400 | 0.8243 | cells |
| [Washington National Parks](../dist/assets/official/washington-national-parks.jpg) | `SMPLE` | Barlow Condensed 400 | 0.8079 | cells |
| [Washington State Parks](../dist/assets/official/washington-state-parks.jpg) | `SMPLE` | Inconsolata 500 | 0.7871 | cells |
| [Washington's Wildlife: Bear](../dist/assets/official/washingtons-wildlife-bear.jpg) | `SMPLE` | Barlow Condensed 400 | 0.8115 | cells |
| [Washington's Wildlife: Deer](../dist/assets/official/washingtons-wildlife-deer.jpg) | `SMPLE` | Barlow Condensed 400 | 0.8196 | cells |
| [Washington's Wildlife: Elk](../dist/assets/official/washingtons-wildlife-elk.jpg) | `SMPLE` | Barlow Condensed 400 | 0.8300 | cells |
| [Washington's Wildlife: Steelhead](../dist/assets/official/washingtons-wildlife-steelhead.png) | `SMPLE` | Barlow Condensed 400 | 0.8127 | cells |
| [Wild on Washington: Eagle](../dist/assets/official/wild-washington-eagle.jpg) | `SMPLE` | Barlow Condensed 400 | 0.8107 | cells |
| [Fly Washington aviation](../dist/assets/official/fly-washington-aviation.png) | `SMPLE` | Inconsolata 500 | 0.7695 | cells |
| [Keep WA Evergreen](../dist/assets/official/keep-wa-evergreen.png) | `SMPLE` | Barlow Condensed 400 | 0.8122 | cells |
| [LeMay-America's Car Museum](../dist/assets/official/lemay-americas-car-museum.png) | `SMPLE` | Barlow Condensed 400 | 0.8155 | cells |
| [Music Matters](../dist/assets/official/music-matters.png) | `MU12345` | Roadgeek 2014 Series B 400 | 0.7409 | cells |
| [Share the Road](../dist/assets/official/share-road.png) | `SMPLE` | Barlow Condensed 400 | 0.8363 | cells |
| [Square Dancer](../dist/assets/official/square-dancer.png) | `SMPLE` | Barlow Condensed 400 | 0.8170 | cells |
| [Throwback plate](../dist/assets/official/throwback-plate.png) | `SMPLE` | Barlow Condensed 400 | 0.8291 | cells |
| [Washington Wine Commission](../dist/assets/official/washington-wine-commission.png) | `SMPLE` | Barlow Condensed 400 | 0.8205 | cells |
| [Seattle Kraken](../dist/assets/official/seattle-kraken.png) | `SMPLE` | Droid Sans Mono 400 | 0.8471 | cells |
| [Seattle Mariners](../dist/assets/official/seattle-mariners.png) | `SMPLE` | Barlow Condensed 400 | 0.8049 | cells |
| [Seattle Seahawks](../dist/assets/official/seattle-seahawks.png) | `SMPLE` | Barlow Condensed 400 | 0.8180 | cells |
| [Seattle Sounders FC](../dist/assets/official/seattle-sounders-fc.png) | `SMPLE` | Barlow Condensed 400 | 0.8317 | cells |
| [Seattle Storm](../dist/assets/official/seattle-storm.png) | `SMPLE` | Roadgeek 2014 Series B 400 | 0.8062 | cells |
| [Ski and Ride](../dist/assets/official/ski-and-ride.jpg) | `SMPLE` | Barlow Condensed 400 | 0.8237 | cells |
| [State sport: Pickleball](../dist/assets/official/state-sport-pickleball.png) | `SMPLE` | Inconsolata 600 | 0.7883 | cells |
| [Tennis](../dist/assets/official/tennis.png) | `SMPLE` | Barlow Condensed 400 | 0.8146 | cells |
| [Wrestling](../dist/assets/official/wrestling.png) | `SMPLE` | Barlow Condensed 400 | 0.8239 | cells |
| [Chehalis Tribe](../dist/assets/official/chehalis-tribe.png) | `SMPLE` | Barlow Condensed 400 | 0.8139 | cells |
| [Muckleshoot Tribe](../dist/assets/official/muckleshoot-tribe.png) | `SMPLE` | Barlow Condensed 400 | 0.8206 | cells |
| [Puyallup Tribe](../dist/assets/official/puyallup-tribe.png) | `SMPLE` | Barlow Condensed 400 | 0.8399 | cells |
| [Standard mountain background (motorcycle/small)](../dist/assets/official/standard-motorcycle.png) | `HOGWLD` | Barlow Condensed 400 | 0.8508 | cells |

## Entries that keep original lettering only

These 12 entries do not receive a substitute font or personalized overlay. Their actual source lettering remains rasterized in the original sample.

| Entry | Catalogue status |
| --- | --- |
| 988 – Prevent veteran suicide emblem | Emblem example |
| Disabled American veteran | Cannot be personalized |
| Former Prisoner of War | Cannot be personalized |
| Medal of Honor | Cannot be personalized |
| Military Affiliate Radio System (MARS) | Cannot be personalized |
| Veteran/Military Service Award emblems | Emblem example |
| Collector Vehicle | Cannot be personalized |
| Horseless Carriage | Cannot be personalized |
| Restored | Cannot be personalized |
| Amateur Radio Operator (HAM) | Cannot be personalized |
| Disabled Parking | Cannot be personalized |
| Rideshare | Personalization not documented |
