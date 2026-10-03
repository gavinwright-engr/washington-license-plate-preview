/* Run with Node's built-in test runner: node --test tests/format.test.cjs */
const test = require('node:test');
const assert = require('node:assert/strict');
const preview = require('../dist/plate-preview.js');

test('a seven-character standard candidate fits; a smaller plate rejects it', () => {
  assert.equal(preview.validate('PNW VIB', 7).valid, true);
  assert.equal(preview.validate('PNW VIB', 6).valid, false);
});

test('spaces and hyphens remain intact and count toward capacity', () => {
  const result = preview.validate(' go-wa ', 7);
  assert.equal(result.text, ' GO-WA ');
  assert.equal(result.count, 7);
  assert.equal(result.valid, true);
  assert.equal(preview.validate(' GO-WA  ', 7).valid, false);
});

test('a candidate must contain a letter or a number', () => {
  for (const value of ['', ' ', '---', ' - - ']) {
    assert.equal(preview.validate(value, 7).valid, false, value);
  }
  assert.equal(preview.validate('0', 7).valid, true);
});

test('unsupported punctuation, non-ASCII letters, and markup are rejected without deletion', () => {
  for (const [value, expected] of [['A&B', 'A&B'], ['CAFÉ', 'CAFÉ'], ['🚙', '🚙'], ['<img>', '<IMG>'], ['A\nB', 'A\nB'], ['ＡＢ', 'ＡＢ']]) {
    const result = preview.validate(value, 7);
    assert.equal(result.valid, false, value);
    assert.equal(result.text, expected);
  }
});

test('format feedback never promises availability for reserved-looking candidates', () => {
  const result = preview.validate('ABC1234', 7);
  assert.equal(result.valid, true);
  assert.match(result.message, /Availability and approval are determined by DOL/);
});

test('misconfigured character limits fail explicitly', () => {
  assert.throws(() => preview.validate('ABC', 8), TypeError);
  assert.throws(() => preview.validate(null, 7), TypeError);
});
