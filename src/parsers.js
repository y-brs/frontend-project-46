/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import yaml from 'js-yaml';
import getReadFile from './readfile.js';

const getParse = (filePath, file) => {
  const formatFile = path.extname(filePath);

  if (formatFile === '.json') {
    return JSON.parse(file);
  }

  if (formatFile === '.yaml' || formatFile === 'yml') {
    return yaml.load(getReadFile(filePath));
  }

  return file;
};

export default getParse;
