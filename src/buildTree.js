import _ from 'lodash';

const makeObject = (name, value, type, children = '', oldValue = '') => ({
  name,
  value,
  type,
  children,
  oldValue,
});

const buildTree = (file1, file2) => {
  const keys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  return keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return makeObject(key, '', 'nested', buildTree(value1, value2));
    }
    if (!Object.hasOwn(file1, key)) {
      return makeObject(key, value2, 'added');
    }
    if (!Object.hasOwn(file2, key)) {
      return makeObject(key, value1, 'removed');
    }
    if (file1[key] !== file2[key]) {
      return makeObject(key, value2, 'updated', '', value1);
    }
    return makeObject(key, value1, 'unchanged');
  });
};

export default buildTree;
