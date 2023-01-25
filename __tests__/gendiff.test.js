import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (fileFormat) => fs.readFileSync(getFixturePath(fileFormat), 'utf-8');

describe.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yaml'],
  ['file1.json', 'file2.yaml'],
])('compare two files %s and %s', (a, b) => {
  const file1 = getFixturePath(a);
  const file2 = getFixturePath(b);
  const formats = ['json', 'plain', 'stylish'];
  test.each(formats)('testing with format %s', (format) => {
    const expected = readFile(format);
    expect(genDiff(file1, file2, format)).toEqual(expected);
  });
  test('default formatter', () => {
    const expected = readFile('stylish');
    expect(genDiff(file1, file2)).toEqual(expected);
  });
});
