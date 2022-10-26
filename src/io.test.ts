import { it, expect, vi } from 'vitest';
import writeData from './io';

vi.mock('fs');

it('Should execute the write file method', async () => {
  const testData = 'foo';
  const testFileName = 'bar.txt';

  const actual = await writeData(testData, testFileName);

  expect(actual).toBeUndefined;
});
