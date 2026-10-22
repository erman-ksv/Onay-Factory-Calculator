import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.mjs';

describe('calculator core arithmetic', () => {
  it('addition: 2 + 3 = 5', () => {
    assert.equal(calculate(2, '+', 3), 5);
  });

  it('negative result: 7 - 10 = -3', () => {
    assert.equal(calculate(7, '-', 10), -3);
  });

  it('multiplication: 6 * 4 = 24', () => {
    assert.equal(calculate(6, '*', 4), 24);
  });

  it('division: 9 / 3 = 3', () => {
    assert.equal(calculate(9, '/', 3), 3);
  });

  it('decimals: 0.5 * 4 = 2', () => {
    assert.equal(calculate(0.5, '*', 4), 2);
  });

  it('decimal display: 0.1 + 0.2 = 0.3 without floating artifact', () => {
    const result = calculate(0.1, '+', 0.2);
    assert.equal(result, 0.3);
  });

  it('zero recovery: division by zero throws and subsequent calculation works', () => {
    assert.throws(() => calculate(8, '/', 0), /Division by zero/);
    // subsequent call should work
    assert.equal(calculate(5, '+', 2), 7);
  });
});
