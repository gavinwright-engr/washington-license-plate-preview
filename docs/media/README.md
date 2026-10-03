# Screenshots and recorded demonstration

Captured October 2, 2026 (America/Los_Angeles), from the locally served dist app in Edge/Chromium 154.0.4258.48. Local fonts were ready before capture. The screenshots use reduced motion; the recording uses normal motion and smooth browser scrolling.

| File | Contents | Dimensions / duration | Size |
| --- | --- | --- | --- |
| [desktop.png](desktop.png) | Wide thumbnail gallery with a compact preview | 1440 × 1000 | 288 KB |
| [mobile.png](mobile.png) | Mobile gallery with a preview shortcut | 390 × 844 | 74 KB |
| [demo.mp4](demo.mp4) | Silent browser interaction recording with visible cursor and click indicators | 1440 × 1000; 23.18 seconds; 60 fps | 1.79 MB |
| [demo.gif](demo.gif) | Compact looping version of the same recording | 800 × 556; 23.20 seconds; 15 fps | 2.81 MB |

The updated demo shows the gallery layout in under 30 seconds. It follows actual browser interactions: browsing all 74 special entries under category headings, selecting a design, previewing custom characters, blocking excess input with red feedback, finding Fred Hutch by typing “f”, toggling tabs, filtering categories, and comparing the original sample. A recorder-only cursor and subtle click rings follow the real pointer; they are not part of the website. Chromium DevTools captures the rendered frames with their original timing. FFmpeg resamples them to a 60 fps MP4 and a 15 fps GIF; there is no optical-flow interpolation. Both outputs were fully decoded successfully. Raw frames and capture tooling stay outside the repository. [capture-metadata.json](capture-metadata.json) records the timing and output properties.

## Text transcript

Times are approximate. The recording is silent.

- **0.0 seconds:** Start with Standard plate and DOL-assigned characters.
- **1.6 seconds:** Show all special designs under category headings, with no plate preselected.
- **3.2 seconds:** Select 4-H while keeping the complete gallery open.
- **5.2 seconds:** See typed characters on the live 4-H preview.
- **5.8 seconds:** Hide the current-date tabs.
- **6.8 seconds:** Restore the tabs.
- **8.5 seconds:** Block the eighth character and show red limit feedback.
- **11.0 seconds:** Search f and show every match, including Fred Hutch.
- **13.9 seconds:** Filter the gallery to Sports.
- **15.6 seconds:** Compare sports designs without closing the gallery.
- **19.1 seconds:** Compare the original DOL sample.
- **22.0 seconds:** Return to Standard plate with Custom characters preserved.

## Artwork and preview accuracy

These captures include official sample artwork and locally hosted open-license fonts. Their separate rights and source attribution are documented in [ASSET-LICENSES.md](../../ASSET-LICENSES.md), [ARTWORK.md](../ARTWORK.md), and [SOURCES.md](../SOURCES.md). Captures do not grant an additional license to that artwork.

Assigned mode uses the original sample with a separate optional date-tab overlay; it does not generate or reserve a number. Original-sample comparison hides the overlay. Tabs display the current device month and year for illustration, not actual vehicle expiration. Personalized lettering, reconstructed backgrounds, tab colors, and placement are approximate. DOL determines availability, eligibility, and final approval. All typed examples stay in the local page.
