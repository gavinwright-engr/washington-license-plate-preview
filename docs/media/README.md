# Screenshots and recorded demonstration

Captured October 2, 2026 (America/Los_Angeles), from the locally served dist app in Edge/Chromium 154.0.4258.48. Local fonts were ready before capture. The screenshots use reduced motion; the recording uses normal motion and smooth browser scrolling.

| File | Contents | Dimensions / duration | Size |
| --- | --- | --- | --- |
| [desktop.png](desktop.png) | Wide thumbnail gallery with a compact preview | 1440 × 1261 | 442 KB |
| [mobile.png](mobile.png) | Mobile gallery with a preview shortcut | 390 × 2678 | 280 KB |
| [demo.mp4](demo.mp4) | Silent browser interaction recording with visible cursor and click indicators | 1440 × 1000; 22.55 seconds; 60 fps | 3.14 MB |
| [demo.gif](demo.gif) | Compact looping version of the same recording | 800 × 556; 22.54 seconds; 15 fps | 4.43 MB |

The updated demo shows the gallery layout in under 30 seconds. It follows actual browser interactions: gallery selection, typing, tab visibility, category filtering, original-sample comparison, and loading more designs. A recorder-only cursor and subtle click rings follow the real pointer; they are not part of the website. Chromium DevTools captures the rendered frames with their original timing. FFmpeg resamples them to a 60 fps MP4 and a 15 fps GIF; there is no optical-flow interpolation. Both outputs were fully decoded successfully. Raw frames and capture tooling stay outside the repository. [capture-metadata.json](capture-metadata.json) records the timing and output properties.

## Text transcript

Times are approximate. The recording is silent.

- **0.0 seconds:** Browse a wide thumbnail gallery with a compact preview.
- **2.7 seconds:** Select Throwback while keeping the gallery open.
- **4.9 seconds:** Type characters in the compact preview panel.
- **5.5 seconds:** Hide the current-date tabs.
- **6.5 seconds:** Restore the tabs.
- **7.6 seconds:** Filter the gallery to Sports.
- **9.3 seconds:** Compare sports designs without closing the gallery.
- **12.7 seconds:** Compare the original DOL sample.
- **15.1 seconds:** Reveal more designs with ordinary page scrolling.
- **21.3 seconds:** Return to the gallery with the personalized selection preserved.

## Artwork and preview accuracy

These captures include official sample artwork and locally hosted open-license fonts. Their separate rights and source attribution are documented in [ASSET-LICENSES.md](../../ASSET-LICENSES.md), [ARTWORK.md](../ARTWORK.md), and [SOURCES.md](../SOURCES.md). Captures do not grant an additional license to that artwork.

Assigned mode uses the original sample with a separate optional date-tab overlay; it does not generate or reserve a number. Original-sample comparison hides the overlay. Tabs display the current device month and year for illustration, not actual vehicle expiration. Personalized lettering, reconstructed backgrounds, tab colors, and placement are approximate. DOL determines availability, eligibility, and final approval. All typed examples stay in the local page.
