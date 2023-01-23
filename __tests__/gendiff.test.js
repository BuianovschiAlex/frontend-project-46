import { test, expect, beforeAll } from '@jest/globals';
import fs from 'fs';
import { genDiff, getFixturesPath } from '../src/index.js';

let resultStylish;

beforeAll(() => {
  resultStylish = fs.readFileSync(getFixturesPath('resultStylish.txt'), 'utf8');
});

describe('gendiff function (stylish)', () => {
  test('between json-json files', () => {
    expect(genDiff('file1.json', 'file2.json')).toEqual(resultStylish);
  });

  test('between yml-yaml files', () => {
    expect(genDiff('file1.yml', 'file2.yaml')).toEqual(resultStylish);
  });

  test('between json-yaml files', () => {
    expect(genDiff('file1.json', 'file2.yaml')).toEqual(resultStylish);
  });

  test('between yml-json files', () => {
    expect(genDiff('file1.yml', 'file2.json')).toEqual(resultStylish);
  });
});
