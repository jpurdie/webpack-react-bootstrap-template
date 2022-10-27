import subtract from './subtract';
import { it, expect, describe } from 'vitest';

describe('subtract()', () => {
  it('Should subtract 2 from 3 and equal 1', () => {
    const a = 3;
    const b = 2;
    const actual = subtract(a, b);
    const expected = 1;

    expect(actual).toBe(expected);
  });

  // it('Should error when a string is given.', () => {
  //   const a = 'a';
  //   const b = 2;
  //   const actual = subtract(a, b);
  //   const expected = NaN;
  //   expect(actual).toBe(expected);
  // });
});
