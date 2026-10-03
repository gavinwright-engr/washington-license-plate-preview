const test = require('node:test');
const assert = require('node:assert/strict');
const catalog = require('../dist/plate-catalog.js');

test('every plate has one cost group; exceptions never inherit the common special-design rate', () => {
  const groups = new Map(catalog.feeGroups.map(group => [group.id, group]));
  assert.equal(groups.size, catalog.feeGroups.length);
  for (const plate of catalog.plates) {
    assert.ok(groups.has(plate.feeGroup), plate.id);
    if (['standard', 'square-dancer', 'keep-kids-safe', 'amateur-radio-operator-ham'].includes(plate.id) ||
        ['Military services and veterans', 'Collector vehicles', 'Tribal', 'Miscellaneous'].includes(plate.category)) {
      assert.equal(plate.feeGroup, plate.id, plate.id);
    }
  }
  assert.equal(catalog.plates.filter(p => p.feeGroup === 'special').length, 55);
  for (const group of groups.values()) {
    assert.ok(Object.isFrozen(group));
    assert.equal(new URL(group.source).hostname, 'dol.wa.gov');
    for (const field of ['assigned', 'personalized', 'renewalAssigned', 'renewalPersonalized']) {
      assert.ok(group[field] === null || (Number.isFinite(group[field]) && group[field] >= 0));
    }
  }
});

test('passenger fees distinguish personalization, exceptions, and unquoted amounts', () => {
  const fee = id => catalog.feeGroups.find(group => group.id === id);
  assert.deepEqual(['standard', 'special', 'square-dancer', 'keep-kids-safe'].map(id => [fee(id).assigned, fee(id).personalized]), [[null,174],[162,214],[157.25,209.25],[167,219]]);
  assert.equal(fee('standard').renewalAssigned, null); // Unknown is not free.
  assert.equal(fee('square-dancer').renewalAssigned, 0); // Explicit DOL exception.
  assert.equal(fee('keep-kids-safe').renewalPersonalized, null); // Conflicting DOL pages: do not guess.
  assert.equal(fee('puyallup-tribe').assigned, null); // Applicant-specific details remain at DOL.
  assert.match(catalog.feeBasis, /Passenger vehicle/);
});
