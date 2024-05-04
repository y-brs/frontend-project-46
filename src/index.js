/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */

import _ from 'lodash';
import getParse from './parsers.js';
import getReadFile from './readfile.js';

const genDiff = (file1, file2) => {
  const parsedFile1 = getParse(file1, getReadFile(file1));
  const parsedFile2 = getParse(file2, getReadFile(file2));

  const sortedKeys = _.sortBy(
    _.union(Object.keys(parsedFile1), Object.keys(parsedFile2))
  );

  const resultData = sortedKeys.map((key) => {
    if (!Object.hasOwnProperty.call(parsedFile2, key)) {
      return `  - ${key}: ${parsedFile1[key]}`;
    }

    if (!Object.hasOwnProperty.call(parsedFile1, key)) {
      return `  + ${key}: ${parsedFile2[key]}`;
    }

    if (parsedFile1[key] === parsedFile2[key]) {
      return `    ${key}: ${parsedFile1[key]}`;
    }

    return `  - ${key}: ${parsedFile1[key]}\n  + ${key}: ${parsedFile2[key]}`;
  });

  const strData = resultData.join('\n');
  return `{\n${strData}\n}`;
};

export default genDiff;
