/* Catalog coverage and original-file integrity. Uses only Node built-ins. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const catalog = require('../dist/plate-catalog.js');
const assetRoot = path.join(__dirname, '../dist/assets');

test('includes every audited DOL entry, including newer and restricted designs', () => {
  assert.equal(catalog.plates.length, 75);
  assert.equal(catalog.designCount, 73);
  assert.equal(catalog.emblemCount, 2);
  assert.equal(new Set(catalog.plates.map(plate => plate.id)).size, 75);
  for (const id of ['standard', 'smokey-bear', 'honeybees-and-pollinators', 'mount-st-helens', 'keep-wa-evergreen', 'lemay-americas-car-museum', 'state-sport-pickleball', 'throwback-plate', 'seattle-kraken', 'muckleshoot-tribe', 'disabled-parking']) {
    assert.ok(catalog.plates.some(plate => plate.id === id), id);
  }
  assert.equal(catalog.plates.filter(plate => plate.personalization === 'personalizable').length, 63);
});

test('restricted plate types cannot be offered as personalized designs', () => {
  for (const id of ['disabled-american-veteran', 'former-prisoner-war', 'medal-honor', 'military-affiliate-radio-system-mars', 'collector-vehicle', 'horseless-carriage', 'restored', 'amateur-radio-operator-ham', 'disabled-parking']) {
    assert.equal(catalog.plates.find(plate => plate.id === id).personalization, 'not-personalizable', id);
  }
  assert.equal(catalog.plates.find(plate => plate.id === 'rideshare').personalization, 'not-documented');
  assert.equal(catalog.plates.filter(plate => plate.personalization === 'emblem-example').length, 2);
});

test('personalizable entries have safe local artwork and bounded text calibration', () => {
  for (const plate of catalog.plates) {
    assert.match(plate.artwork, /^official\/[a-z0-9-]+\.(png|jpg)$/);
    assert.ok(fs.existsSync(path.join(assetRoot, plate.artwork)), plate.id);
    const page = new URL(plate.pageUrl);
    assert.equal(page.protocol, 'https:'); assert.equal(page.hostname, 'dol.wa.gov');
    assert.ok(Object.isFrozen(plate) && Object.isFrozen(plate.profile));
    if (plate.personalization !== 'personalizable') continue;
    assert.match(plate.profile.inkColor, /^#[a-f0-9]{6}$/i);
    assert.ok(plate.profile.masks.length > 0);
    for (const mask of plate.profile.masks.concat([plate.profile.textRect])) {
      const rect = Array.isArray(mask) ? mask : mask.rect;
      assert.equal(rect.length, 4);
      assert.ok(rect.every(value => Number.isFinite(value) && value >= 0 && value <= 1));
      assert.ok(rect[0] + rect[2] <= 1.001 && rect[1] + rect[3] <= 1.001, plate.id);
    }
  }
});

test('all 79 official artwork files retain the recorded source bytes', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(assetRoot, 'ASSET-MANIFEST.json'), 'utf8'));
  assert.equal(manifest.officialImages.length, 79);
  for (const asset of manifest.officialImages) {
    const bytes = fs.readFileSync(path.join(__dirname, '../dist', asset.file));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), asset.sha256, asset.file);
    assert.equal(new URL(asset.sourceUrl).hostname, 'dol.wa.gov');
    assert.equal(asset.bytesUnchanged, true);
  }
});

test('each personalized source has documented bounded lettering calibration', () => {
  const report = JSON.parse(fs.readFileSync(path.join(__dirname, '../docs/font-matches.json'), 'utf8'));
  assert.equal(report.sourceSampleCount, 64);
  assert.equal(report.candidateCount, 84);
  const fonts = new Set(['barlow-condensed', 'noto-sans-mono', 'inconsolata-500', 'inconsolata-600', 'roadgeek-2014-b', 'ibm-plex-mono', 'droid-sans-mono']);
  for (const plate of catalog.plates.filter(plate => plate.personalization === 'personalizable')) {
    for (const [id, profile] of [[plate.id, plate.profile], ...(plate.smallArtwork ? [[plate.id + '-motorcycle', plate.smallArtwork.profile]] : [])]) {
      const calibration = profile.lettering;
      const evidence = report.matches.find(match => match.id === id);
      assert.ok(evidence, id);
      assert.deepEqual(calibration, evidence.calibration, id);
      assert.ok(Object.isFrozen(calibration));
      assert.ok(fonts.has(calibration.font), id);
      assert.ok(calibration.capHeight > 0 && calibration.capHeight <= 1, id);
      if (calibration.layout === 'cells') {
        assert.ok(calibration.glyphWidth > 0 && calibration.glyphWidth < calibration.cellAdvance, id);
        assert.ok(calibration.cellAdvance <= 1, id);
        for (const [character, width] of Object.entries(calibration.glyphWidths)) {
          assert.match(character, /^[A-Z0-9]$/);
          assert.ok(width > 0 && width < calibration.cellAdvance, id + ':' + character);
        }
      } else {
        assert.equal(calibration.layout, 'proportional');
        assert.ok(Number.isFinite(calibration.widthScale) && calibration.widthScale > 0);
        assert.ok(Number.isFinite(calibration.letterSpacing));
      }
    }
  }
});

test('the six local font derivatives and full licenses match recorded hashes', () => {
  const directory = path.join(assetRoot, 'fonts');
  const manifest = JSON.parse(fs.readFileSync(path.join(directory, 'FONT-MANIFEST.json'), 'utf8'));
  assert.equal(manifest.fonts.length, 6);
  assert.equal(new Set(manifest.glyph_characters).size, 38);
  const buildConfig = fs.readFileSync(path.join(__dirname, '../tools/registration-fonts.json'));
  assert.equal(crypto.createHash('sha256').update(buildConfig).digest('hex'), manifest.config_sha256);
  for (const font of manifest.fonts) {
    for (const [filename, expected] of [[font.output_relative_path, font.output_sha256], [font.license_relative_path, font.license_sha256]]) {
      assert.equal(path.basename(filename), filename);
      const bytes = fs.readFileSync(path.join(directory, filename));
      assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), expected, filename);
    }
    assert.ok(['OFL-1.1', 'MIT', 'Apache-2.0'].includes(font.license));
    assert.equal(font.verification.glyph_coverage_verified, true);
    assert.equal(font.verification.reserved_names_absent_from_primary_identities, true);
  }
});
