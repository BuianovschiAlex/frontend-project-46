import yaml from 'js-yaml';

export default (file, format) => {
  switch (format) {
    case 'yml':
    case 'yaml':
      return yaml.load(file);
    case 'json':
    default:
      return JSON.parse(file);
  }
};
