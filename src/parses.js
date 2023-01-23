import fs from 'fs';
import yaml from 'js-yaml';
import path from 'node:path';

export default (file) => {
  const format = path.extname(file);
  const fileContent = fs.readFileSync(file, 'utf8');
  if (format === '.json') {
    return JSON.parse(fileContent);
  }
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(fileContent);
  }
  throw new Error('Wrong format');
};
