import _ from 'lodash';

const buildTree = (file1, file2) => {
  const keys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  return keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, type: 'nested', children: buildTree(value1, value2) };
    }
    if (!Object.hasOwn(file1, key)) {
      return { key, value: value2, type: 'added' };
    }
    if (!Object.hasOwn(file2, key)) {
      return { key, value: value1, type: 'removed' };
    }
    if (value1 !== value2) {
      return {
        key,
        oldValue: value1,
        newValue: value2,
        type: 'updated',
      };
    }
    return { key, value: value1, type: 'unchanged' };
  });
};

export default buildTree;
