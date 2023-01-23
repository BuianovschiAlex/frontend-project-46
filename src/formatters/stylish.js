import _ from 'lodash';

const indentForSign = 2;
const initialDepth = 1;
const getIndent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - indentForSign);

const stringify = (data, depth) => {
  if (!_.isObject(data)) return String(data);

  const lines = Object
    .entries(data)
    .map(([key, value]) => `${getIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);

  return `{\n${lines.join('\n')}\n  ${getIndent(depth)}}`;
};

const stylish = (nodes, depth) => nodes.map((node) => {
  const {
    name, value, type, oldValue, children,
  } = node;
  switch (type) {
    case 'added':
      return `${getIndent(depth)}+ ${name}: ${stringify(value, depth)}`;
    case 'removed':
      return `${getIndent(depth)}- ${name}: ${stringify(value, depth)}`;
    case 'nested':
      const lines = stylish(children, depth + 1);
      return `${getIndent(depth)}  ${name}: {\n${lines.join('\n')}\n${getIndent(depth)}  }`;
    case 'updated':
      const removedLines = `${getIndent(depth)}- ${name}: ${stringify(oldValue, depth)}`;
      const addedLines = `${getIndent(depth)}+ ${name}: ${stringify(value, depth)}`;
      return `${removedLines}\n${addedLines}`;
    case 'unchanged':
      return `${getIndent(depth)}  ${name}: ${stringify(value, depth)}`;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
});

export default (tree) => `{\n${stylish(tree, initialDepth).join('\n')}\n}`;
