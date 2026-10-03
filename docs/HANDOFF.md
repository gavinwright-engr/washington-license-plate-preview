# Suggested contribution message

Attach the full project ZIP with code, documentation, tests, `LICENSE`, `ASSET-LICENSES.md`, the source manifest, and adjacent font licenses. This is a draft for you to send; the project sends no external message.

The public repository contains the source, documentation, screenshots, and demo recording. Before sending this draft, attach a current source ZIP and review the message for your intended recipient.

**Subject:** Free code contribution: live preview for Washington plate designs

Hello Washington Department of Licensing team,

I made a small website addition with two simple choices: standard or special design, then DOL-assigned or personalized characters. Visitors can browse the official assigned samples or preview preferred characters when personalization is supported. I would like to offer the code freely for your team to review, adapt, or use.

Repository: https://github.com/gavinwright-engr/washington-license-plate-preview

The attached review ZIP includes the source, desktop and mobile screenshots, and a browser screen recording linked from the README.

The attached ZIP uses plain HTML, scoped CSS, JavaScript, and Canvas, with no dependencies or build step. It includes all 72 special plate designs, the standard mountain design, and two emblem placement examples checked on October 2, 2026. Seventy-nine original published sample images are preserved unchanged with source URLs and SHA-256 records. The interface follows your site's Montserrat typography and colors, using locally hosted fonts.

Assigned mode uses an unchanged published sample with optional illustrative date tabs, without generating a number or claiming to know the actual next available number. Personalized mode performs format feedback only; your availability checker, eligibility rules, and final review remain authoritative. It creates no account, form, tracking, cookie, saved preference, background lookup, or backend. Candidate text stays in the page unless an integrating application deliberately uses it. Integration instructions, security notes, and tests are included.

The code and documentation are MIT licensed at no charge. Official images retain their owners' rights; I did not find an official redistribution license. Registration lettering is calibrated per source, comparing 84 font variants across 64 samples. Chosen fonts retain their separate OFL, MIT, or Apache 2.0 notices, with renamed derivative files and provenance documented. Assigned views retain the original raster lettering. Custom letters, unseen glyphs, and reconstructed pixels remain approximate. Separate assigned/personalized layouts, including an approved Throwback variant, blank templates, and your approved registration font can replace the approximations through documented settings.

You can try `dist/index.html`, or run `python3 -m http.server 8000 --directory dist` and open `http://localhost:8000`. I hope this contribution makes plate personalization a little easier.

Best,
[Your name]
