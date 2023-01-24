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

export default (nodes) => {
  const iter = (node, path = '') => {
    const {
      name, value, type, children, oldValue,
    } = node;
    switch (type) {
      case 'added':
        return `Property '${path}${name}' was added with value: ${stringifyData(value)}`;
      case 'removed':
        return `Property '${path}${name}' was removed`;
      case 'nested':
        return children.flatMap((child) => iter(child, `${path}${name}.`)).join('\n');
      case 'updated':
        return `Property '${path}${name}' was updated. From ${stringifyData(oldValue)} to ${stringifyData(value)}`;
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown status type ${type}`);
    }
  };
  const result = nodes.flatMap((node) => iter(node));
  return `${result.join('\n')}`;
};
