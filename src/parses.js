import yaml from 'js-yaml';

export default (file, format) => {
  switch (format) {
    case 'yml':
    case 'yaml':
      return yaml.load(file);
    case 'json':
      return JSON.parse(file);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
