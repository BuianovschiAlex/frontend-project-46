import path from 'node:path';
import parse from './parses.js';
import buildTree from './buildTree.js';
import formatOutput from './formatters/index.js';

const getFixturePath = (filename) => path.resolve(process.cwd(), filename);

const dataInFile = (filepath) => {
  const fullPath = getFixturePath(filepath);
  return parse(fullPath);
};

export default (filepath1, filepath2, formatName = 'stylish') => {
  const tree = buildTree(dataInFile(filepath1), dataInFile(filepath2));
  return formatOutput(tree, formatName);
};
