import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filepathJson1 = getFixturesPath('filepath1.json');
const filepathJson2 = getFixturesPath('filepath2.json');
const filepathYml1 = getFixturesPath('filepath1.yml');
const filepathYaml2 = getFixturesPath('filepath2.yaml');

const resultFlat = readFileSync(getFixturesPath('resultFlat.txt'), 'utf8');

describe('gendiff function (JSON format)', () => {
  test('between json-json files', () => {
    expect(genDiff(filepathJson1, filepathJson2, 'json')).toEqual(resultFlat);
  });

  test('between yml-yaml files', () => {
    expect(genDiff(filepathYml1, filepathYaml2, 'json')).toEqual(resultFlat);
  });

  test('between json-yaml files', () => {
    expect(genDiff(filepathJson1, filepathYaml2, 'json')).toEqual(resultFlat);
  });

  test('between json-yml files', () => {
    expect(genDiff(filepathYml1, filepathJson2, 'json')).toEqual(resultFlat);
  });
});
