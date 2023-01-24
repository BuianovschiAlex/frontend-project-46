import path from 'node:path';
import { test, expect } from '@jest/globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

const expectedStylish = readFile('expectedStylish.txt');
const plainFile = readFile('expectedPlain.txt');

const filepath1Json = getFixturePath('file1.json');
const filepath2Json = getFixturePath('file2.json');
const filepath1Yml = getFixturePath('file1.yml');
const filepath2Yaml = getFixturePath('file2.yaml');

describe('gendiff function (stylish)', () => {
  test('between json-json files', () => {
    expect(genDiff(filepath1Json, filepath2Json)).toEqual(expectedStylish);
  });

  test('between yml-yaml files', () => {
    expect(genDiff(filepath1Yml, filepath2Yaml)).toEqual(expectedStylish);
  });

  test('between json-yaml files', () => {
    expect(genDiff(filepath1Json, filepath2Yaml)).toEqual(expectedStylish);
  });

  test('between yml-json files', () => {
    expect(genDiff(filepath1Yml, filepath2Json)).toEqual(expectedStylish);
  });
});

describe('gendiff function (plain)', () => {
  test('between json-json files', () => {
    expect(genDiff(filepath1Json, filepath2Json, 'plain')).toEqual(plainFile);
  });

  test('between yml-yaml files', () => {
    expect(genDiff(filepath1Yml, filepath2Yaml, 'plain')).toEqual(plainFile);
  });

  test('between json-yaml files', () => {
    expect(genDiff(filepath1Json, filepath2Yaml, 'plain')).toEqual(plainFile);
  });

  test('between json-yml files', () => {
    expect(genDiff(filepath1Yml, filepath2Json, 'plain')).toEqual(plainFile);
  });
});
