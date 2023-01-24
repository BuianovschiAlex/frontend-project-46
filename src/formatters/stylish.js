import _ from 'lodash';

const spaceCount = 4;
const space = ' '.repeat(spaceCount);

const stringify = (data, depth = 0) => {
  if (!_.isObject(data)) return String(data);

  const indent = space.repeat(depth + 1);
  const lines = Object
    .entries(data)
    .map(([key, value]) => `${indent}${space}${key}: ${stringify(value, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${indent}}`,
  ].join('\n');
};

const getStylish = (nodes, depth = 0) => {
  const indent = space.repeat(depth);
  const tree = nodes
    .flatMap((node) => {
      const {
        key, value, type, oldValue, newValue, children,
      } = node;
      switch (type) {
        case 'added':
          return `${indent}  + ${key}: ${stringify(value, depth)}`;
        case 'removed':
          return `${indent}  - ${key}: ${stringify(value, depth)}`;
        case 'nested':
          return `${indent}${space}${key}: ${getStylish(children, depth + 1)}`;
        case 'updated':
          return [
            `${indent}  - ${key}: ${stringify(oldValue, depth)}`,
            `${indent}  + ${key}: ${stringify(newValue, depth)}`,
          ];
        case 'unchanged':
          return `${indent}${space}${key}: ${stringify(value, depth)}`;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    });
  return ['{', ...tree, `${indent}}`].join('\n');
};

export default getStylish;
