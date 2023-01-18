// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

export default (file, extension) => {
  switch (extension) {
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    case '.json':
      return JSON.parse(file);
    default:
      throw new Error(`Unknown data type ${extension}`);
  }
};
