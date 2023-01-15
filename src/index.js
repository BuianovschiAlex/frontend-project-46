import _ from 'lodash';

const initObj = (name, value, type, oldValue = '') => ({
  name,
  value,
  type,
  oldValue,
});

const symbols = {
  added: '+',
  removed: '-',
  unchanged: ' ',
};

export const buildTree = (files) => {
  const [file1, file2] = files;
  const sortedKeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  const objects = sortedKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (!Object.hasOwn(file1, key)) {
      return initObj(key, value2, 'added');
    }
    if (!Object.hasOwn(file2, key)) {
      return initObj(key, value1, 'removed');
    }
    if (file1[key] !== file2[key]) {
      return initObj(key, value2, 'updated', value1);
    }
    return initObj(key, value2, 'unchanged');
  });
  return objects;
};

export const changedDiffTree = (tree) => {
  const genDiff = tree.map((el) => {
    const {
      name, value, type, oldValue,
    } = el;
    if (type === 'added') return `  ${symbols[type]} ${name}: ${value}`;
    if (type === 'removed') return `  ${symbols[type]} ${name}: ${value}`;
    if (type === 'unchanged') return `  ${symbols[type]} ${name}: ${value}`;
    return `  - ${name}: ${oldValue}\n  + ${name}: ${value}`;
  });
  return `{\n${genDiff.join('\n')}\n}`;
};
