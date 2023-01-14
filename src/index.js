import _ from 'lodash';

export const buildTree = (files) => {
  const [file1, file2] = files;
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keysBoth = _.union(keys1, keys2);
  const keysSorted = _.sortBy(keysBoth);
  const res = [];
  for (const key of keysSorted) {
    if (!Object.hasOwn(file1, key)) {
      res.push(`  + ${key}: ${file2[key]}`);
    } else if (!Object.hasOwn(file2, key)) {
      res.push(`  - ${key}: ${file1[key]}`);
    } else if (file1[key] !== file2[key]) {
      res.push(`  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`);
    } else res.push(`    ${key}: ${file1[key]}`);
  }
  return `{\n${res.join('\n')}\n}`;
};
