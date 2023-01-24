import _ from 'lodash';

const stringifyData = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (data === null) {
    return 'null';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

const makePlain = (nodes, path = '') => nodes
  .flatMap((node) => {
    const {
      key, value, oldValue, newValue, type, children,
    } = node;
    switch (type) {
      case 'added':
        return `Property '${path}${key}' was added with value: ${stringifyData(value)}`;
      case 'removed':
        return `Property '${path}${key}' was removed`;
      case 'updated':
        return `Property '${path}${key}' was updated. From ${stringifyData(oldValue)} to ${stringifyData(newValue)}`;
      case 'nested':
        return makePlain(children, `${path}${key}.`);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown status type ${type}`);
    }
  })
  .join('\n');

export default makePlain;
