import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { buildTree, changedDiffTree } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

export const genDiff = (filepath1, filepath2) => {
  const paths = [filepath1, filepath2];
  const dataInFile = paths.map((filepath) => {
    const fullPath = getFixturesPath(filepath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(content);
  });
  return changedDiffTree(buildTree(dataInFile));
};
