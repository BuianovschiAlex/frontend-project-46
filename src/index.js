import fs from 'fs';
import path from 'node:path';
import parse from './parses.js';
import buildTree from './buildTree.js';
import formatOutput from './formatters/index.js';

const getExtension = (filepath) => path.extname(filepath).slice(1);
const getAbsolutePath = (filepath) => path.resolve(filepath);
const readFileSync = (filepath) => fs.readFileSync(filepath, 'utf-8');

export default (filepath1, filepath2, formatName = 'stylish') => {
  const parsedFile1 = parse(readFileSync(getAbsolutePath(filepath1)), getExtension(filepath1));
  const parsedFile2 = parse(readFileSync(getAbsolutePath(filepath2)), getExtension(filepath2));

  const tree = buildTree(parsedFile1, parsedFile2);
  return formatOutput(tree, formatName);
};
