import yaml from 'js-yaml';

export default (file, extension) => {
  switch (extension) {
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    case '.json':
    default:
      return JSON.parse(file);
  }
};
