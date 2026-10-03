# Screenshots and recorded demonstration

Captured October 2, 2026 (America/Los_Angeles), from the locally served dist app in Edge/Chromium 154.0.4258.48. Local fonts were ready before capture. The screenshots use reduced motion; the recording uses normal motion and smooth browser scrolling.

| File | Contents | Dimensions / duration | Size |
| --- | --- | --- | --- |
| [desktop.png](desktop.png) | Wide thumbnail gallery with a compact preview | 1440 × 1441 | 229 KB |
| [mobile.png](mobile.png) | Mobile gallery with a preview shortcut | 390 × 2431 | 211 KB |
| [demo.mp4](demo.mp4) | Silent browser interaction recording with visible cursor and click indicators | 1440 × 1000; 17.00 seconds; 60 fps | 1.17 MB |
| [demo.gif](demo.gif) | Compact looping version of the same recording | 800 × 556; 17.00 seconds; 15 fps | 1.89 MB |

The 17-second demo shows Standard/Special and Assigned/Custom choices, with no pricing. The special gallery starts with no selection, then an explicit design choice opens its preview. The recording includes typing, tab visibility, category filtering, original-sample comparison, and returning to Standard with the candidate preserved. A recorder-only cursor and subtle click rings follow the real pointer; they are not part of the website. Chromium DevTools captures the rendered frames with their original timing. FFmpeg resamples them to a 60 fps MP4 and a 15 fps GIF; there is no optical-flow interpolation. Both outputs were fully decoded successfully. Raw frames and capture tooling stay outside the repository. [capture-metadata.json](capture-metadata.json) records the timing and output properties.

[Standard starting view](standard.png) · [Special gallery before selecting a design](unselected.png)

## Text transcript

Times are approximate. The recording is silent.

- **0.0 seconds:** Start with Standard plate and DOL-assigned characters.
- **1.6 seconds:** Choose Special plate and browse six compact thumbnails.
- **3.1 seconds:** Select Throwback while keeping the gallery open.
- **5.3 seconds:** Type characters in the compact preview panel.
- **5.9 seconds:** Hide the current-date tabs.
- **6.8 seconds:** Restore the tabs.
- **7.9 seconds:** Filter the gallery to Sports.
- **9.6 seconds:** Compare sports designs without closing the gallery.
- **13.0 seconds:** Compare the original DOL sample.
- **15.8 seconds:** Return to Standard plate with Custom characters preserved.

## Artwork and preview accuracy

These captures include official sample artwork and locally hosted open-license fonts. Their separate rights and source attribution are documented in [ASSET-LICENSES.md](../../ASSET-LICENSES.md), [ARTWORK.md](../ARTWORK.md), and [SOURCES.md](../SOURCES.md). Captures do not grant an additional license to that artwork.

Assigned mode uses the original sample with a separate optional date-tab overlay; it does not generate or reserve a number. Original-sample comparison hides the overlay. Tabs display the current device month and year for illustration, not actual vehicle expiration. Personalized lettering, reconstructed backgrounds, tab colors, and placement are approximate. DOL determines availability, eligibility, and final approval. All typed examples stay in the local page.
