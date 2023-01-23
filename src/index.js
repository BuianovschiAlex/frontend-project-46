import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import parse from './parses.js';
import buildTree from './buildTree.js';
import formatOutput from './formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const dataInFile = (filepath) => {
  const fullPath = getFixturesPath(filepath);
  return parse(fullPath);
};

export const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const tree = buildTree(dataInFile(filepath1), dataInFile(filepath2));
  return formatOutput(tree, formatName);
};
