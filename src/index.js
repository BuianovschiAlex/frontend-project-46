import path from 'node:path';
import fs from 'fs';
import parse from './parses.js';
import { buildTree, changedDiffTree } from './buildTree.js';

const getExtension = (filepath) => path.extname(filepath);
const readFileSync = (filepath) => fs.readFileSync(filepath, 'utf-8');

export default (filepath1, filepath2) => {
  const extension1 = getExtension(filepath1);
  const extension2 = getExtension(filepath2);
  const parsedFile1 = parse(readFileSync((filepath1)), extension1);
  const parsedFile2 = parse(readFileSync((filepath2)), extension2);

  return changedDiffTree(buildTree(parsedFile1, parsedFile2));
};
