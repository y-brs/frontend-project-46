/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */

import _ from 'lodash';
import getParse from './parsefile.js';
import getReadFile from './readfile.js';

const genDiff = (file1, file2) => {
  const readFile1 = getReadFile(file1);
  const readFile2 = getReadFile(file2);

  const objFile1 = getParse(file1, readFile1);
  const objFile2 = getParse(file2, readFile2);

  const keys = _.union(Object.keys(objFile1), Object.keys(objFile2));
  const sortedKeys = _.sortBy(keys);

  let result = '';

  for (const key of sortedKeys) {
    if (!Object.hasOwn(objFile2, key)) {
      result += `\n  - ${key}: ${objFile1[key]}`;
    } else if (!Object.hasOwn(objFile1, key)) {
      result += `\n  + ${key}: ${objFile2[key]}`;
    } else if (
      Object.hasOwn(objFile1, key) === Object.hasOwn(objFile2, key) &&
      objFile1[key] === objFile2[key]
    ) {
      result += `\n    ${key}: ${objFile1[key]}`;
    } else {
      result += `\n  - ${key}: ${objFile1[key]}`;
      result += `\n  + ${key}: ${objFile2[key]}`;
    }
  }

  return `{${result}\n}`;
};

export default genDiff;
