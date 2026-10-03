# Screenshots and recorded demonstration

Captured on October 3, 2026 from this project's `dist/` app served at `http://127.0.0.1:4176/wa-plate-preview/dist/`, using Python Playwright and Chromium 151.0.7922.173. Local fonts were ready before capture. Reduced motion was enabled. These captures show the four choices for standard or custom plate designs with DOL-assigned or personalized characters, including the updated per-design licensed font substitutes.

| File | Contents | Dimensions / duration | Size |
| --- | --- | --- | --- |
| [desktop.png](desktop.png) | Full desktop page: all four choices, personalized Throwback plate, `PNW VIB` | 1440 × 2387 | 451 KB |
| [mobile.png](mobile.png) | Full mobile page: all four choices, personalized Throwback plate, `PNW VIB` | 390 × 3498 | 230 KB |
| [demo.mp4](demo.mp4) | Actual browser interaction recording, silent H.264 MP4 | 1440 × 1400; 66.72 seconds; 25 fps | 3.54 MB |
| [demo.gif](demo.gif) | Same recording, compact looping preview | 720 × 700; approximately 66.7 seconds; 7 fps | 4.56 MB |

The video records browser scrolling, all four option choices, plate selection, typing, filter changes, and original-sample comparisons. It shows the standard plate's barred `I`, the Throwback prefix/layout distinction, and different lettering shapes on Kraken and Professional Firefighter previews. FFmpeg converted the direct Chromium WebM stream to MP4 and GIF. No synthetic animation or explanatory overlays were added. The MP4 preserves the larger view for reading controls and disclosures; the GIF provides a compact inline demonstration. Raw recordings are outside the repository. Encoding metadata and interaction timestamps are in [capture-metadata.json](capture-metadata.json).

## Text transcript

Times are approximate. The recording is silent.

1. **0–6 seconds:** The independent community demonstration opens with its government-service disclaimer. Scroll to the four choices. Standard plate with DOL-assigned characters displays the genuine DOL `SAMPLE` artwork and explains that this is an example, not an assigned number.
2. **6–13 seconds:** Choose Standard plate + custom characters and type `I1O0WA`. The mountain preview updates while typing, with a barred `I` and fitted visible glyph widths.
3. **13–17 seconds:** Return to the standard DOL-assigned option. The genuine `SAMPLE` artwork returns and custom character controls are hidden.
4. **17–21 seconds:** Choose Custom plate + DOL-assigned characters. Throwback displays the unchanged original sample with its stacked `WA` prefix and `SMPLE` lettering.
5. **21–29 seconds:** Choose Custom plate + custom characters and enter `PNW VIB`. The approximate personalized Throwback layout replaces the sample prefix and lettering. Switch between assigned and personalized options again to compare the layouts and retain the entered characters.
6. **29–34 seconds:** Use Show original DOL sample, then return to the personalized Throwback preview.
7. **34–42 seconds:** Filter to Sports, select Seattle Kraken, and type `SMPLE`. The preview uses a licensed substitute with a deep central `M`. Compare with the original DOL sample and return to the preview.
8. **42–52 seconds:** Search for `firefighter` and choose Professional Firefighter. Its preview uses a different licensed substitute with a conventional `M`. Compare with the original DOL sample and return to the preview.
9. **52–58 seconds:** Search for `collector` and choose Collector Vehicle. Its original sample appears, the page explains that it cannot be personalized, and character editing is disabled.
10. **58–67 seconds:** Clear filters, return to personalized Throwback, and type `PNW VIB`. Scroll to the local-only preview explanation, code/artwork rights disclosure, and independent-community-demo footer.

## Artwork and preview accuracy

These captures include official sample plate artwork, organizational logos, and locally hosted open-license fonts. Their separate rights and source attribution are documented in [ASSET-LICENSES.md](../../ASSET-LICENSES.md), [ARTWORK.md](../ARTWORK.md), and [SOURCES.md](../SOURCES.md). Captures do not grant an additional license to that artwork.

Assigned and original-sample modes display unchanged DOL images. The assigned option illustrates a design and does not generate or reserve a number. Personalized lettering and background reconstruction are approximate. Selected fonts are licensed visual substitutes, not identified manufacturing fonts; exact production previews require DOL's approved blank templates and lettering. The app displays these distinctions in the recording, including the Throwback prefix/layout difference. DOL determines availability, eligibility, and approval. All typed examples in these captures stay in the local page.
