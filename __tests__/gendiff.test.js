import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (fileFormat) => fs.readFileSync(getFixturePath(fileFormat), 'utf-8');

const expectedFiles = {
  stylish: readFile('stylish.txt'),
  plain: readFile('plain.txt'),
  json: readFile('json.txt'),
};

test.each([
  ['file1.json', 'file2.json', 'stylish'],
  ['file1.yml', 'file2.yaml', 'plain'],
  ['file1.json', 'file2.json', 'json'],
])('Compare %s with %s, format %p', (filepath1, filepath2, format) => {
  const file1 = getFixturePath(filepath1);
  const file2 = getFixturePath(filepath2);

  expect(genDiff(file1, file2, format)).toEqual(expectedFiles[format]);
});

test('gendiff file1.json, file2.yaml, " "', () => {
  expect(() => genDiff(getFixturePath('file1.json'), getFixturePath('file2.yaml'), ' ')).toThrow();
});
test('gendiff txt file', () => {
  expect(() => genDiff(getFixturePath('file1.txt'), getFixturePath('file2.txt'))).toThrow();
});
