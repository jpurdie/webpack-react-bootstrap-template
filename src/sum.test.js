import sum from './sum';
import { it, expect, describe } from 'vitest';

describe('sum()', () => {
  it('It should be 3', () => {
    const a = 1;
    const b = 2;
    const expected = 3;
    const actual = sum(a, b);

    expect(actual).toBe(expected);
  });

  it('Should be a number', () => {
    const a = 1;
    const b = 2;
    const expected = true;
    const actual = sum(a, b);
    expect(typeof actual === 'number').toBe(expected);
  });

  it('Should not be a number', () => {
    const a = 1;
    const b = 2;
    const expected = false;
    const actual = sum(a, b);
    expect(typeof actual === 'string').toBe(expected);
  });
});
