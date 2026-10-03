/* SPDX-License-Identifier: MIT
 * Washington DOL catalog preview. Plain DOM + Canvas; no runtime dependencies,
 * network APIs, storage, availability requests, or form submission.
 * Original DOL artwork is unchanged on disk. See docs/ARTWORK.md for the
 * limits of removing printed sample text and substituting registration fonts.
 */
(function (global) {
  'use strict';
  const catalog = typeof module !== 'undefined' && module.exports
    ? require('./plate-catalog.js') : global.WAPlateCatalog;
  if (!catalog) throw new Error('Load plate-catalog.js before plate-preview.js.');
  const PLATES = catalog.plates;
  // Fixed local aliases keep font selection separate from plate artwork/configuration.
  // Licensed substitutes, not manufacturer font identities: see docs/FONTS.md.
  const REGISTRATION_FONTS = Object.freeze({
    'barlow-condensed': { family: '"WPP Plate Rounded"', weight: 400 },
    'noto-sans-mono': { family: '"WPP Registration Standard"', weight: 500 },
    'inconsolata-500': { family: '"WPP Registration Curve"', weight: 500 },
    'inconsolata-600': { family: '"WPP Registration Curve"', weight: 600 },
    'roadgeek-2014-b': { family: '"WPP Registration Narrow"', weight: 400 },
    'ibm-plex-mono': { family: '"WPP Registration Mono"', weight: 400 },
    'droid-sans-mono': { family: '"WPP Registration Round"', weight: 400 }
  });
  const mounted = new WeakMap();
  let instanceCount = 0;

  function uppercase(value) {
    return value.replace(/[a-z]/g, function (letter) { return letter.toUpperCase(); });
  }
  /** Format only. DOL decides eligibility, availability, reserved patterns, and approval. */
  function validate(value, limit) {
    if (typeof value !== 'string' || (limit !== 6 && limit !== 7)) throw new TypeError('Expected a string and a limit of 6 or 7.');
    const text = uppercase(value);
    const count = Array.from(text).length;
    if (!text || !/[A-Z0-9]/.test(text)) return { text: text, count: count, valid: false, message: 'Enter at least one letter or number.' };
    if (/[^A-Z0-9 -]/.test(text)) return { text: text, count: count, valid: false, message: 'Use only letters A–Z, numbers 0–9, spaces, and hyphens.' };
    if (count > limit) return { text: text, count: count, valid: false, message: 'You entered ' + count + ' characters. This plate size allows up to ' + limit + '.' };
    return { text: text, count: count, valid: true, message: 'Fits the character format. Availability and approval are determined by DOL.' };
  }

  function mount(root, options) {
    if (!root || root.nodeType !== 1) throw new TypeError('Provide a widget root element.');
    if (mounted.has(root)) return mounted.get(root);
    options = options || {};
    const doc = root.ownerDocument;
    let prefix;
    do { prefix = 'wpp-' + (++instanceCount) + '-'; } while (doc.querySelector('[id^="' + prefix + '"]'));
    // A nonexistent explicit form owner prevents joining or submitting a host form.
    // Reserve wpp-* IDs; never create the matching no-form element.
    const noForm = prefix + 'no-form';
    const assetBase = options.assetBase || root.getAttribute('data-asset-base') || 'assets/';
    if (typeof assetBase !== 'string' || !/^(?!\/\/)[a-zA-Z0-9_./-]+\/$/.test(assetBase) || assetBase.split('/').includes('..')) {
      throw new TypeError('assetBase must be a local directory ending with /, without .. or a host.');
    }
    let selected = PLATES[0];
    const pageSize = 6;
    let visibleLimit = pageSize;
    let plateType = 'standard';
    let lastSpecial = null;
    let registrationMode = 'assigned';
    let showSample = false;
    let composing = false;
    let disposed = false;
    let renderVersion = 0;
    let announcementTimer;
    const images = new Map();
    const browsePlates = PLATES.filter(function (plate) { return plate.id !== 'standard'; }).sort(function (a, b) {
      const priority = ['throwback-plate'];
      const aRank = priority.indexOf(a.id), bRank = priority.indexOf(b.id);
      if (aRank !== bRank && (aRank !== -1 || bRank !== -1)) return (aRank === -1 ? 2 : aRank) - (bRank === -1 ? 2 : bRank);
      return a.name.localeCompare(b.name);
    });
    const categories = Array.from(new Set(browsePlates.map(function (plate) { return plate.category; }))).sort();

    function element(tag, className, text) {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function unowned(node) { node.setAttribute('form', noForm); return node; }
    function labelFor(control, text, suffix) {
      control.id = prefix + suffix;
      const label = element('label', 'wpp-label', text);
      label.htmlFor = control.id;
      return label;
    }
    function personalizable(plate) { return !!plate && plate.personalization === 'personalizable'; }
    function designType() { return plateType; }
    function eligibilityLabel(plate) {
      if (personalizable(plate)) return 'Personalization offered';
      if (plate.personalization === 'emblem-example') return 'Emblem example';
      if (plate.personalization === 'not-documented') return 'Personalization not documented';
      return 'Cannot be personalized';
    }
    function announce(message) {
      global.clearTimeout(announcementTimer);
      announcementTimer = global.setTimeout(function () { if (!disposed) status.textContent = message; }, 450);
    }

    const backgroundChoices = element('fieldset', 'wpp-background-options');
    backgroundChoices.append(element('legend', 'wpp-heading', '1. Choose a plate type'));
    const backgroundGrid = element('div', 'wpp-background-grid');
    const backgroundRecords = [];
    [['standard', 'Standard plate', 'Mountain background'], ['special', 'Special plate', 'Choose a design']].forEach(function (entry) {
      const label = element('label', 'wpp-option');
      const radio = unowned(element('input', 'wpp-option-radio'));
      radio.type = 'radio'; radio.name = prefix + 'background'; radio.value = entry[0];
      const face = element('span', 'wpp-option-face');
      face.append(element('span', 'wpp-option-title', entry[1]), element('span', 'wpp-option-description', entry[2]));
      label.append(radio, face); backgroundGrid.append(label);
      radio.addEventListener('change', function () {
        if (!radio.checked) return;
        if (entry[0] === 'standard' || lastSpecial) choose(entry[0] === 'standard' ? 'standard' : lastSpecial, true);
        else {
          plateType = 'special'; selected = null; showSample = false;
          records.forEach(function (record) { record.radio.checked = false; });
          filterDesigns(false); update(true);
        }
      });
      backgroundRecords.push({radio: radio, value: entry[0]});
    });
    backgroundChoices.append(backgroundGrid);
    const registrationChoices = element('fieldset', 'wpp-registration-options');
    registrationChoices.append(element('legend', 'wpp-heading', '2. Choose characters'));
    const registrationGrid = element('div', 'wpp-registration-grid');
    const registrationRecords = [];
    [['assigned', 'Assigned', 'DOL chooses'], ['personalized', 'Custom', 'You choose']].forEach(function (entry) {
      const label = element('label', 'wpp-option');
      const radio = unowned(element('input', 'wpp-option-radio'));
      radio.type = 'radio'; radio.name = prefix + 'registration'; radio.value = entry[0];
      const face = element('span', 'wpp-option-face');
      face.append(element('span', 'wpp-option-title', entry[1]), element('span', 'wpp-option-description', entry[2]));
      label.append(radio, face); registrationGrid.append(label);
      radio.addEventListener('change', function () { if (radio.checked) { registrationMode = entry[0]; showSample = false; update(true); } });
      registrationRecords.push({ radio: radio, value: entry[0] });
    });
    registrationChoices.append(registrationGrid);
    const layout = element('div', 'wpp-layout');
    const designs = element('section', 'wpp-designs');
    const heading = element('h2', 'wpp-heading', 'Browse special designs');
    heading.id = prefix + 'gallery-heading';
    designs.setAttribute('aria-labelledby', heading.id);
    const toolbar = element('div', 'wpp-gallery-toolbar');
    const filters = element('div', 'wpp-filters');
    const search = unowned(element('input', 'wpp-search'));
    search.type = 'search'; search.autocomplete = 'off'; search.spellcheck = false;
    search.placeholder = 'Plate name or organization';
    const searchLabel = labelFor(search, 'Search designs', 'search');
    const category = unowned(element('select', 'wpp-select'));
    const categoryLabel = labelFor(category, 'Category', 'category');
    ['All categories'].concat(categories).forEach(function (name) {
      const option = element('option', '', name); option.value = name; category.append(option);
    });
    const searchGroup = element('div', 'wpp-filter-field'); searchGroup.append(searchLabel, search);
    const categoryGroup = element('div', 'wpp-filter-field'); categoryGroup.append(categoryLabel, category);
    filters.append(searchGroup, categoryGroup);
    const count = element('p', 'wpp-result-count');
    const cards = element('fieldset', 'wpp-design-grid');
    cards.id = prefix + 'design-grid';
    cards.append(element('legend', 'wpp-sr-only', 'Plate design'));
    const empty = element('p', 'wpp-empty', 'No designs match these filters. Try another name or category.');
    empty.hidden = true;
    const clearFilters = element('button', 'wpp-clear-filters', 'Clear filters'); clearFilters.type = 'button'; clearFilters.hidden = true;
    const resultsBar = element('div', 'wpp-results-bar'); resultsBar.append(count, clearFilters);
    const more = element('button', 'wpp-show-more'); more.type = 'button'; more.setAttribute('aria-controls', cards.id);
    const records = [];

    const panel = element('section', 'wpp-panel');
    const pendingPreview = element('div', 'wpp-pending-preview');
    pendingPreview.append(element('h2', 'wpp-heading', 'Choose a special plate'), element('p', '', 'Select a design to preview it here.'));
    const panelHeading = element('h2', 'wpp-heading', 'Your plate preview');
    panel.id = prefix + 'preview'; panelHeading.tabIndex = -1;
    const previewName = element('h3', 'wpp-preview-name', selected.name);
    const mobileBar = element('div', 'wpp-mobile-bar');
    const mobileName = element('span', 'wpp-mobile-name');
    const previewJump = element('button', 'wpp-preview-jump', 'Preview & customize'); previewJump.type = 'button';
    const backToDesigns = element('button', 'wpp-back-designs', 'Back to designs'); backToDesigns.type = 'button';
    function reveal(target, focusTarget) {
      const reduceMotion = global.matchMedia('(prefers-reduced-motion: reduce)').matches;
      focusTarget.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'instant' : 'smooth' });
    }
    previewJump.addEventListener('click', function () { reveal(panel, panelHeading); });
    backToDesigns.addEventListener('click', function () { reveal(designs, search); });
    mobileBar.append(mobileName, previewJump);
    const previewObserver = global.IntersectionObserver ? new global.IntersectionObserver(function (entries) {
      mobileBar.hidden = entries[0].isIntersecting;
    }) : null;
    const badge = element('p', 'wpp-eligibility');
    const registrationNote = element('p', 'wpp-registration-note');
    const stage = element('div', 'wpp-stage');
    const sourceImage = element('img', 'wpp-source-image'); sourceImage.draggable = false;
    const canvas = element('canvas', 'wpp-canvas'); canvas.hidden = true; canvas.setAttribute('role', 'img');
    const plateSurface = element('div', 'wpp-plate-surface');
    const tabButton = element('button', 'wpp-tabs'); tabButton.type = 'button';
    const monthTab = element('span', 'wpp-tab wpp-tab--month');
    const yearTab = element('span', 'wpp-tab wpp-tab--year');
    tabButton.append(monthTab, yearTab);
    let tabsVisible = true;
    let tabDateKey = '';
    const tabToggle = element('button', 'wpp-tabs-toggle'); tabToggle.type = 'button';
    function updateTabs() {
      if (!selected) { tabButton.hidden = true; tabToggle.hidden = true; return; }
      const now = new Date();
      const month = now.getMonth();
      const year = now.getFullYear();
      const key = year + '-' + month;
      if (key !== tabDateKey) {
        tabDateKey = key;
        monthTab.replaceChildren(element('small', '', String(month + 1)), element('strong', '', ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][month]), element('small', '', 'WASHINGTON'));
        yearTab.replaceChildren(element('small', '', 'WASHINGTON'), element('strong', '', String(year)), element('small', '', 'PREVIEW'));
        monthTab.dataset.quarter = String(Math.floor(month / 3) + 1);
        // 2026 is observed blue; future, unverified years use a neutral treatment.
        yearTab.classList.toggle('wpp-tab--2026', year === 2026);
      }
      const available = !['collector-vehicle', 'horseless-carriage', 'restored'].includes(selected.id) && selected.personalization !== 'emblem-example';
      tabButton.hidden = !available || showSample;
      tabToggle.hidden = !available || showSample;
      tabButton.classList.toggle('wpp-tabs--hidden', !tabsVisible);
      tabButton.setAttribute('aria-pressed', String(tabsVisible));
      const label = (tabsVisible ? 'Hide' : 'Show') + ' preview tabs for ' + now.toLocaleString('en-US', { month: 'long' }) + ' ' + year;
      tabButton.setAttribute('aria-label', label); tabButton.title = label;
      tabToggle.textContent = tabsVisible ? 'Hide tabs' : 'Show tabs';
      tabToggle.setAttribute('aria-pressed', String(tabsVisible));
      plateSurface.dataset.tabLayout = selected.id === 'throwback-plate' ? 'throwback' : (selected.id === 'standard' ? (Number(size.value) === 6 && registrationMode === 'personalized' ? 'motorcycle' : 'standard') : 'special');
    }
    function toggleTabs() { tabsVisible = !tabsVisible; updateTabs(); }
    tabButton.addEventListener('click', toggleTabs); tabToggle.addEventListener('click', toggleTabs);
    // Re-read the viewer's local date after midnight or when returning to this tab.
    const tabTimer = global.setInterval(updateTabs, 60000);
    doc.addEventListener('visibilitychange', updateTabs);
    plateSurface.append(sourceImage, canvas, tabButton);
    stage.append(plateSurface);
    const caption = element('p', 'wpp-caption');
    const variantNote = element('p', 'wpp-variant-note'); variantNote.hidden = true;
    const toggle = element('button', 'wpp-sample-toggle'); toggle.type = 'button'; toggle.hidden = true;
    const controls = element('div', 'wpp-controls');
    const size = unowned(element('select', 'wpp-select'));
    const sizeLabel = labelFor(size, 'Plate size', 'size');
    [['7', 'Standard-size plate · up to 7 characters'], ['6', 'Motorcycle / small trailer · up to 6']].forEach(function (entry) {
      const option = element('option', '', entry[1]); option.value = entry[0]; size.append(option);
    });
    const sizeHint = element('p', 'wpp-hint', 'Vehicle eligibility varies by design.');
    const sizeGroup = element('details', 'wpp-size-controls'); sizeGroup.append(element('summary', '', 'Plate size'), sizeLabel, size, sizeHint);
    const input = unowned(element('input', 'wpp-input')); input.type = 'text'; input.autocomplete = 'off'; input.spellcheck = false;
    input.placeholder = 'e.g. PNW VIB'; input.setAttribute('autocapitalize', 'characters');
    const inputLabel = labelFor(input, 'Preferred characters', 'characters');
    const counter = element('span', 'wpp-counter'); counter.id = prefix + 'counter';
    const labelRow = element('div', 'wpp-label-row'); labelRow.append(inputLabel, counter);
    const hint = element('p', 'wpp-hint', 'A–Z, 0–9, spaces, and hyphens. Spaces and hyphens count.'); hint.id = prefix + 'hint';
    const feedback = element('p', 'wpp-feedback'); feedback.id = prefix + 'feedback';
    input.setAttribute('aria-describedby', hint.id + ' ' + counter.id + ' ' + feedback.id);
    const reset = element('button', 'wpp-reset', 'Clear characters'); reset.type = 'button'; reset.hidden = true;
    const characterGroup = element('div', 'wpp-character-controls'); characterGroup.append(labelRow, input, hint, feedback, reset);
    const official = element('a', 'wpp-official-link'); official.rel = 'noreferrer';
    const details = element('a', 'wpp-details-link', 'Design details and requirements at DOL'); details.rel = 'noreferrer';
    const privacy = element('p', 'wpp-official-note', 'Characters stay in this page. No availability lookup or reservation is performed.');
    controls.append(characterGroup, sizeGroup);
    const caveat = element('p', 'wpp-artwork-note', 'Original DOL sample artwork. Custom lettering and the background hidden behind printed sample text are approximations; exact production previews require DOL’s blank templates and approved lettering.');
    const status = element('p', 'wpp-sr-only'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); status.setAttribute('aria-atomic', 'true');
    const previewDetails = element('details', 'wpp-preview-details');
    previewDetails.append(element('summary', '', 'Preview details'), registrationNote, variantNote, caveat, privacy, details);
    const tabNote = element('p', 'wpp-tab-note', 'Tabs use the current month and year on your device for illustration, not a vehicle’s actual expiration. Colors and placement are approximate. Click the tab area to hide or restore them.');
    previewDetails.append(tabNote);
    const previewActions = element('div', 'wpp-preview-actions'); previewActions.append(toggle, tabToggle);
    const approvalNote = element('p', 'wpp-approval-note', 'Preview only. DOL confirms availability, eligibility, and final appearance.');
    const previewVisual = element('div', 'wpp-preview-visual');
    previewVisual.append(panelHeading, previewName, badge, stage, caption, previewActions);
    const previewSettings = element('div', 'wpp-preview-settings');
    previewSettings.append(registrationChoices, controls, official, approvalNote, previewDetails);
    panel.append(pendingPreview, backToDesigns, previewVisual, previewSettings, status);

    function currentArtwork() {
      // Separate published/authorized artwork can capture a design change between
      // assigned and personalized plates. A sample is never an issued number.
      if (registrationMode === 'assigned' && selected.assignedArtwork) return selected.assignedArtwork;
      if (registrationMode === 'assigned') return { file: selected.artwork, width: selected.width, height: selected.height };
      if (Number(size.value) === 6 && selected.smallArtwork) return selected.smallArtwork;
      if (selected.personalizedArtwork) return Object.assign({}, selected.personalizedArtwork, { profile: selected.personalizedArtwork.profile || selected.profile });
      return { file: selected.artwork, width: selected.width, height: selected.height, profile: selected.profile, blank: selected.blankArtwork };
    }
    function loadImage(file) {
      if (!images.has(file)) {
        images.set(file, new Promise(function (resolve, reject) {
          const image = new global.Image();
          image.onload = function () { resolve(image); };
          image.onerror = function () { reject(new Error('Unable to load the local plate artwork.')); };
          image.src = assetBase + file;
        }));
      }
      return images.get(file);
    }
    function rgb(hex) { return [1, 3, 5].map(function (offset) { return parseInt(hex.slice(offset, offset + 2), 16); }); }

    /** Reconstruct only sample-ink pixels inside maintainer-reviewed masks.
     * Missing background pixels cannot be recovered exactly from a published sample.
     * Solid designs use a sampled fill; photos average neighboring background pixels.
     * Authorized blank artwork bypasses this entire operation.
     */
    function removeSampleInk(context, profile, width, height) {
      const original = context.getImageData(0, 0, width, height);
      const output = new Float32Array(original.data);
      (profile.masks || []).forEach(function (mask) {
        const rect = Array.isArray(mask) ? mask : mask.rect;
        const ink = rgb(mask.inkColor || profile.inkColor);
        const fill = (mask.backgroundColor || profile.backgroundColor) ? rgb(mask.backgroundColor || profile.backgroundColor) : null;
        const x0 = Math.max(1, Math.floor(rect[0] * width));
        const y0 = Math.max(1, Math.floor(rect[1] * height));
        const x1 = Math.min(width - 1, Math.ceil((rect[0] + rect[2]) * width));
        const y1 = Math.min(height - 1, Math.ceil((rect[1] + rect[3]) * height));
        const hits = new Uint8Array((x1 - x0) * (y1 - y0));
        const reconstructed = [];
        const tolerance = mask.tolerance || profile.tolerance || 105;
        for (let y = y0; y < y1; y++) {
          for (let x = x0; x < x1; x++) {
            const at = (y * width + x) * 4;
            const distance = Math.hypot(original.data[at] - ink[0], original.data[at + 1] - ink[1], original.data[at + 2] - ink[2]);
            if (distance <= tolerance) hits[(y - y0) * (x1 - x0) + x - x0] = 1;
          }
        }
        // Include antialiased edges, bounded to the reviewed registration region.
        for (let y = y0; y < y1; y++) {
          const blend = (y - y0 + 1) / (y1 - y0 + 2);
          for (let x = x0; x < x1; x++) {
            let isInk = false;
            for (let dy = -2; dy <= 2 && !isInk; dy++) {
              for (let dx = -2; dx <= 2; dx++) {
                if (x + dx >= x0 && x + dx < x1 && y + dy >= y0 && y + dy < y1 && hits[(y + dy - y0) * (x1 - x0) + x + dx - x0]) { isInk = true; break; }
              }
            }
            if (!isInk) continue;
            const at = (y * width + x) * 4;
            if (!fill) reconstructed.push(at);
            const top = ((y0 - 1) * width + x) * 4;
            const bottom = (y1 * width + x) * 4;
            for (let channel = 0; channel < 3; channel++) {
              output[at + channel] = fill ? fill[channel] : Math.round(original.data[top + channel] * (1 - blend) + original.data[bottom + channel] * blend);
            }
          }
        }
        // Smooth the holes toward their unchanged surrounding pixels. This simple,
        // bounded diffusion reduces streaks; it cannot recover obscured real artwork.
        for (let pass = 0; pass < 150 && reconstructed.length; pass++) {
          const backwards = pass % 2 === 1;
          for (let step = 0; step < reconstructed.length; step++) {
            const at = reconstructed[backwards ? reconstructed.length - step - 1 : step];
            for (let channel = 0; channel < 3; channel++) {
              output[at + channel] = (output[at - 4 + channel] + output[at + 4 + channel] + output[at - width * 4 + channel] + output[at + width * 4 + channel]) / 4;
            }
          }
        }
      });
      original.data.set(output); context.putImageData(original, 0, 0);
    }

    async function drawCandidate(text, artwork) {
      const version = ++renderVersion;
      const profile = artwork.profile;
      const customFont = global.getComputedStyle(root).getPropertyValue('--wpp-registration-font').trim();
        const lettering = profile.lettering;
      const face = lettering && REGISTRATION_FONTS[lettering.font];
      const family = customFont || (face ? face.family : (profile.font === 'angular' ? '"WPP Plate"' : '"WPP Plate Rounded"'));
      const weight = customFont ? 400 : (face ? face.weight : 400);
      try {
        const image = await loadImage(artwork.blank || artwork.file);
        if (doc.fonts) await doc.fonts.load(weight + ' 48px ' + family, text || 'H');
        if (disposed || version !== renderVersion) return;
        const scale = Math.min(1, 1000 / image.naturalWidth);
        canvas.width = Math.round(image.naturalWidth * scale);
        canvas.height = Math.round(image.naturalHeight * scale);
        const context = canvas.getContext('2d');
        if (!context) throw new Error('Canvas is unavailable in this browser.');
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        if (!artwork.blank) removeSampleInk(context, profile, canvas.width, canvas.height);
        const rect = profile.textRect;
        const x = rect[0] * canvas.width, y = rect[1] * canvas.height;
        const width = rect[2] * canvas.width, height = rect[3] * canvas.height;
        const targetCap = height * (lettering ? lettering.capHeight : 1);
        let fontSize = targetCap;
        context.font = weight + ' ' + fontSize + 'px ' + family;
        const capHeight = context.measureText('H').actualBoundingBoxAscent;
        if (capHeight > 0) { fontSize *= targetCap / capHeight; context.font = weight + ' ' + fontSize + 'px ' + family; }
        context.fillStyle = profile.inkColor;
        context.textAlign = 'left'; context.textBaseline = 'alphabetic';
        // Source samples mostly use equally spaced cells. Fit observed visible
        // widths per glyph; do not let a proportional substitute widen M/W or
        // turn a narrow I/1 into a thick full-width stem. Retain rounded overshoots.
        // Approved font overrides retain their natural outlines and glyph widths.
        let position = 0;
        const typical = context.measureText('S');
        const typicalWidth = typical.actualBoundingBoxLeft + typical.actualBoundingBoxRight;
        const glyphs = Array.from(text).map(function (character) {
          const metrics = context.measureText(character);
          const inkWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
          let scaleX = lettering && !customFont ? (lettering.widthScale || 1) : 1;
          let center;
          if (lettering && lettering.layout === 'cells' && !customFont) {
            const narrow = character === 'I' || character === '1' || character === '-';
            const ratio = narrow && typicalWidth > 0 ? Math.min(1, inkWidth / typicalWidth) : 1;
            const observed = lettering.glyphWidths && lettering.glyphWidths[character];
            if (!customFont && inkWidth > 0) scaleX = targetCap * (observed || lettering.glyphWidth * ratio) / inkWidth;
            center = position + targetCap * lettering.glyphWidth / 2;
            position += targetCap * lettering.cellAdvance;
          } else {
            center = position + (metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft) * scaleX / 2;
            position += metrics.width * scaleX + targetCap * (lettering ? lettering.letterSpacing || 0 : 0);
          }
          return { character: character, metrics: metrics, inkWidth: inkWidth, scaleX: scaleX, center: center };
        });
        if (glyphs.length) {
          // Include spaces in the cell run; bound visible ink as well so every
          // accepted candidate fits even with a host-provided approved font.
          const runWidth = lettering && lettering.layout === 'cells' && !customFont
            ? targetCap * ((glyphs.length - 1) * lettering.cellAdvance + lettering.glyphWidth)
            : Math.max(0, position - targetCap * (lettering ? lettering.letterSpacing || 0 : 0));
          const left = Math.min(0, ...glyphs.map(function (glyph) { return glyph.center - glyph.inkWidth * glyph.scaleX / 2; }));
          const right = Math.max(runWidth, ...glyphs.map(function (glyph) { return glyph.center + glyph.inkWidth * glyph.scaleX / 2; }));
          const fit = right > left ? Math.min(1, width / (right - left)) : 1;
          const ascent = Math.max(targetCap, ...glyphs.map(function (glyph) { return glyph.metrics.actualBoundingBoxAscent; }));
          const descent = Math.max(0, ...glyphs.map(function (glyph) { return glyph.metrics.actualBoundingBoxDescent; }));
          const fitY = Math.min(1, height / (ascent + descent));
          const baseline = y + (height - (ascent + descent) * fitY) / 2 + ascent * fitY;
          const origin = x + (width - (right - left) * fit) / 2 - left * fit;
          glyphs.forEach(function (glyph) {
            if (glyph.inkWidth <= 0) return;
            context.save();
            context.translate(origin + glyph.center * fit, baseline);
            context.scale(glyph.scaleX * fit, fitY);
            context.fillText(glyph.character, (glyph.metrics.actualBoundingBoxLeft - glyph.metrics.actualBoundingBoxRight) / 2, 0);
            context.restore();
          });
        }
        sourceImage.hidden = true; canvas.hidden = false;
        canvas.setAttribute('aria-label', selected.name + (text ? ' approximate personalized preview showing ' + text + '.' : ' approximate personalized layout with no characters selected.'));
      } catch (error) {
        if (disposed || version !== renderVersion) return;
        canvas.hidden = true; sourceImage.hidden = false;
        caption.textContent = 'Official DOL sample. The custom preview could not render; check the local artwork and font files.';
      }
    }

    function update(shouldAnnounce) {
      const standard = designType() === 'standard';
      root.classList.toggle('wpp-standard-view', standard);
      root.classList.toggle('wpp-awaiting-design', !selected);
      designs.hidden = standard;
      backgroundRecords.forEach(function (record) { record.radio.checked = record.value === designType(); });
      pendingPreview.hidden = !!selected;
      previewVisual.hidden = !selected; previewSettings.hidden = !selected;
      if (!selected) {
        renderVersion++;
        input.disabled = true; size.disabled = true;
        updateTabs();
        if (shouldAnnounce) announce('Choose a special plate design to see its preview.');
        return;
      }
      const allowed = personalizable(selected);
      const custom = registrationMode === 'personalized';
      const active = allowed && custom;
      const result = validate(input.value, Number(size.value));
      const hasInput = input.value.length > 0;
      const artwork = currentArtwork();
      previewName.textContent = selected.name;
      mobileName.textContent = selected.name;
      badge.textContent = !allowed ? eligibilityLabel(selected) : (custom ? 'Custom characters' : 'DOL-assigned characters');
      registrationNote.textContent = custom ? 'Choose your preferred characters. Personalized lettering or layout can differ from the assigned-number sample.' : (allowed ? 'DOL assigns the next available number. This published sample illustrates the design; it is not your assigned number.' : 'View-only catalog entry. Follow its DOL requirements for characters or an existing plate. This published example does not assign a number.');
      registrationRecords.forEach(function (record) { record.radio.checked = record.value === registrationMode; });
      sizeGroup.hidden = !custom || !allowed; characterGroup.hidden = !custom;
      controls.hidden = !custom;
      input.disabled = !active; size.disabled = !active;
      input.hidden = !allowed; hint.hidden = !allowed; labelRow.hidden = !allowed;
      input.setAttribute('aria-invalid', String(active && hasInput && !result.valid));
      counter.textContent = result.count + ' / ' + size.value;
      feedback.classList.toggle('wpp-feedback--error', active && hasInput && !result.valid);
      feedback.textContent = allowed ? (hasInput ? (result.valid ? 'Fits the character limit.' : result.message) : '') : selected.eligibilityNote;
      details.href = !custom && designType() === 'standard' ? 'https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates' : selected.pageUrl;
      official.href = active ? 'https://fortress.wa.gov/dol/extdriveses/ESP/NoLogon/?Link=PersonalizedPlate' : details.href;
      official.textContent = active ? 'Check availability with DOL' : (custom || !allowed ? 'View DOL requirements' : 'Get ' + (designType() === 'standard' ? 'standard plates' : 'this design') + ' at DOL');
      privacy.textContent = custom ? 'Characters stay in this page. No availability lookup or reservation is performed.' : 'No number is generated, assigned, checked, or reserved by this preview.';
      reset.hidden = !active || !hasInput;
      toggle.hidden = !active;
      toggle.setAttribute('aria-pressed', String(showSample));
      toggle.textContent = showSample ? (hasInput ? 'Return to your preview' : 'Return to personalized layout') : 'Show original DOL sample';
      variantNote.hidden = selected.id !== 'throwback-plate';
      variantNote.textContent = custom ? 'Personalized Throwback preview: your characters replace the sample’s stacked WA prefix and lettering. This layout is approximate until DOL supplies approved personalized artwork.' : 'The DOL sample shows a stacked WA prefix. Choosing custom characters switches to an approximate personalized layout; the black background remains.';
      sourceImage.src = assetBase + artwork.file;
      sourceImage.alt = 'Original DOL sample for ' + selected.name + '. Sample registration text is part of the published image.';
      canvas.hidden = true; sourceImage.hidden = false;
      renderVersion++;
      if (active && !showSample) {
        caption.textContent = hasInput ? 'Approximate lettering on the official design.' : 'Your characters will appear here.';
        drawCandidate(result.count > Number(size.value) ? 'TOO LONG' : result.text, artwork);
      } else {
        caption.textContent = showSample ? 'Original DOL sample, without preview tabs.' : (allowed ? 'Example number shown. DOL assigns your number.' : 'Official sample. Special requirements apply.');
      }
      updateTabs();
      if (shouldAnnounce) announce(selected.name + '. ' + (custom ? feedback.textContent : registrationNote.textContent));
    }

    function filterDesigns(shouldAnnounce) {
      const query = search.value.trim().toLocaleLowerCase();
      const matching = browsePlates.filter(function (plate) {
        return (category.value === 'All categories' || plate.category === category.value) &&
          (plate.name + ' ' + plate.category).toLocaleLowerCase().includes(query);
      });
      const shown = matching.slice(0, visibleLimit);
      const ids = new Set(shown.map(function (plate) { return plate.id; }));
      records.forEach(function (record) { record.label.hidden = !ids.has(record.data.id); });
      // Filtering never changes the selected plate or silently selects a different one.
      count.textContent = shown.length + ' of ' + matching.length + ' designs';
      more.hidden = shown.length === matching.length;
      more.textContent = 'Show ' + Math.min(pageSize, matching.length - shown.length) + ' more designs';
      empty.hidden = matching.length !== 0;
      clearFilters.hidden = !query && category.value === 'All categories';
      if (shouldAnnounce) announce(count.textContent + (selected ? '. Selected: ' + selected.name + '.' : '. Choose a design to preview.'));
    }
    function choose(id, shouldAnnounce) {
      const found = PLATES.find(function (plate) { return plate.id === id; });
      if (!found) throw new RangeError('Unknown plate design.');
      selected = found; showSample = false;
      plateType = found.id === 'standard' ? 'standard' : 'special';
      if (found.id !== 'standard') lastSpecial = found.id;
      records.forEach(function (record) { record.radio.checked = record.data.id === id; });
      filterDesigns(false); update(shouldAnnounce);
    }
    browsePlates.forEach(function (data) {
      const label = element('label', 'wpp-design-card');
      const radio = unowned(element('input', 'wpp-design-radio'));
      radio.type = 'radio'; radio.name = prefix + 'design'; radio.value = data.id; radio.checked = data.id === selected.id;
      const face = element('span', 'wpp-card-face');
      const image = element('img', 'wpp-card-image'); image.src = assetBase + (data.assignedArtwork ? data.assignedArtwork.file : data.artwork); image.alt = ''; image.loading = 'lazy'; image.draggable = false;
      image.width = data.width; image.height = data.height;
      const title = element('span', 'wpp-card-title', data.name);
      const kind = element('span', 'wpp-sr-only', personalizable(data) ? '' : eligibilityLabel(data));
      face.append(image, title, kind); label.append(radio, face);
      radio.addEventListener('change', function () {
        if (!radio.checked) return;
        choose(data.id, true);
      });
      radio.addEventListener('focus', function () {
        if (global.getComputedStyle(toolbar).position === 'sticky' && label.getBoundingClientRect().top < toolbar.getBoundingClientRect().bottom) {
          global.scrollBy({ top: label.getBoundingClientRect().top - toolbar.getBoundingClientRect().bottom - 12, behavior: 'instant' });
        }
      });
      cards.append(label); records.push({ data: data, label: label, radio: radio });
    });
    search.addEventListener('input', function () { visibleLimit = pageSize; filterDesigns(true); });
    category.addEventListener('change', function () { visibleLimit = pageSize; filterDesigns(true); });
    clearFilters.addEventListener('click', function () { search.value = ''; category.value = 'All categories'; visibleLimit = pageSize; filterDesigns(true); search.focus(); });
    more.addEventListener('click', function () {
      const previous = new Set(records.filter(function (record) { return !record.label.hidden; }));
      visibleLimit += pageSize; filterDesigns(true);
      const firstNew = records.find(function (record) { return !record.label.hidden && !previous.has(record); });
      if (firstNew) reveal(firstNew.label, firstNew.radio);
    });
    input.addEventListener('compositionstart', function () { composing = true; });
    input.addEventListener('compositionend', function () { composing = false; handleInput(); });
    function handleInput() {
      if (composing) return;
      const start = input.selectionStart, end = input.selectionEnd;
      const normalized = uppercase(input.value);
      if (normalized !== input.value) { input.value = normalized; input.setSelectionRange(start, end); }
      showSample = false; update(true);
    }
    input.addEventListener('input', handleInput);
    size.addEventListener('change', function () { showSample = false; update(true); });
    reset.addEventListener('click', function () { input.value = ''; showSample = false; update(true); input.focus(); });
    toggle.addEventListener('click', function () { showSample = !showSample; update(true); });
    toolbar.append(heading, filters, resultsBar);
    designs.append(toolbar, cards, empty, more);
    layout.append(designs, panel); root.classList.add('wa-plate-preview'); root.replaceChildren(backgroundChoices, layout, mobileBar);
    if (previewObserver) previewObserver.observe(panel);
    filterDesigns(false); update(false);
    const controller = Object.freeze({
      getState: function () {
        if (disposed) throw new Error('This widget was destroyed.');
        const result = validate(input.value, Number(size.value));
        const active = registrationMode === 'personalized' && personalizable(selected);
        return { designType: designType(), registrationMode: registrationMode, design: selected ? selected.id : null, characters: active ? result.text : '', limit: Number(size.value), personalizable: personalizable(selected), formatValid: active && result.valid };
      },
      selectDesign: function (id) { if (disposed) throw new Error('This widget was destroyed.'); choose(id, true); },
      selectRegistrationMode: function (mode) {
        if (disposed) throw new Error('This widget was destroyed.');
        if (mode !== 'assigned' && mode !== 'personalized') throw new RangeError('Choose assigned or personalized characters.');
        registrationMode = mode; showSample = false; update(true);
      },
      destroy: function () {
        if (mounted.get(root) !== controller) return;
        disposed = true; renderVersion++; global.clearTimeout(announcementTimer); global.clearInterval(tabTimer); doc.removeEventListener('visibilitychange', updateTabs); images.clear(); input.value = '';
        if (previewObserver) previewObserver.disconnect();
        root.replaceChildren(); root.classList.remove('wa-plate-preview', 'wpp-standard-view', 'wpp-awaiting-design'); mounted.delete(root);
      }
    });
    mounted.set(root, controller); return controller;
  }
  const api = Object.freeze({ mount: mount, validate: validate, plates: PLATES });
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.WAPlatePreview = api;
  if (typeof document !== 'undefined') {
    function start() { document.querySelectorAll('[data-wa-plate-preview]').forEach(function (root) { mount(root); }); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
  }
}(typeof window !== 'undefined' ? window : globalThis));
