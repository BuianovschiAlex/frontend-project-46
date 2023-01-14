import { test, expect } from '@jest/globals';
import fs from 'fs';
import { genDiff, getFixturesPath } from '../src/path.js';

const resultFlat = fs.readFileSync(getFixturesPath('result.txt'), 'utf8');

test('Flat JSON files comparison', () => {
  expect(genDiff('filepath1.json', 'filepath2.json')).toEqual(resultFlat);
});
