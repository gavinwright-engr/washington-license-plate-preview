# Screenshots and recorded demonstration

Captured October 2, 2026 (America/Los_Angeles), from the locally served dist app in Edge/Chromium 154.0.4258.48. Local fonts were ready before capture. The screenshots use reduced motion; the recording uses normal motion and smooth browser scrolling.

| File | Contents | Dimensions / duration | Size |
| --- | --- | --- | --- |
| [desktop.png](desktop.png) | Two-step flow with personalized Throwback preview and current-date tabs | 1440 × 1240 | 164 KB |
| [mobile.png](mobile.png) | The same flow on a narrow screen | 390 × 1970 | 137 KB |
| [demo.mp4](demo.mp4) | Silent browser interaction recording with visible cursor and click indicators | 1440 × 1000; 29.97 seconds; 60 fps | 2.03 MB |
| [demo.gif](demo.gif) | Compact looping version of the same recording | 800 × 556; 30.00 seconds; 15 fps | 3.30 MB |

The updated demo is about 55% shorter than the previous 67-second recording. It follows actual browser interactions: design/character choices, typing, tab visibility, design search, original-sample comparison, and a restricted design. A recorder-only cursor and subtle click rings follow the real pointer; they are not part of the website. Chromium DevTools captures the rendered frames with their original timing. FFmpeg resamples them to a 60 fps MP4 and a 15 fps GIF; there is no optical-flow interpolation. Both outputs were fully decoded successfully. Raw frames and capture tooling stay outside the repository. [capture-metadata.json](capture-metadata.json) records the timing and output properties.

## Text transcript

Times are approximate. The recording is silent.

- **0.0 seconds:** Simple design and character choices; current-date tabs are shown by default.
- **2.9 seconds:** Personalize the standard mountain plate.
- **6.2 seconds:** Click the tabs to hide them.
- **7.2 seconds:** Click the same area to restore tabs.
- **8.3 seconds:** Switch to Throwback while keeping the same characters.
- **11.7 seconds:** Find Seattle Kraken; the design browser closes after selection.
- **15.4 seconds:** Compare the original DOL sample.
- **17.8 seconds:** Use DOL-assigned characters on a special design.
- **22.3 seconds:** A restricted design shows its requirements.
- **28.4 seconds:** Return to the personalized Throwback preview.

## Artwork and preview accuracy

These captures include official sample artwork and locally hosted open-license fonts. Their separate rights and source attribution are documented in [ASSET-LICENSES.md](../../ASSET-LICENSES.md), [ARTWORK.md](../ARTWORK.md), and [SOURCES.md](../SOURCES.md). Captures do not grant an additional license to that artwork.

Assigned mode uses the original sample with a separate optional date-tab overlay; it does not generate or reserve a number. Original-sample comparison hides the overlay. Tabs display the current device month and year for illustration, not actual vehicle expiration. Personalized lettering, reconstructed backgrounds, tab colors, and placement are approximate. DOL determines availability, eligibility, and final approval. All typed examples stay in the local page.
