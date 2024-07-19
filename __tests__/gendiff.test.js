/* eslint no-undef: off */

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import parser from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const getDifference = (file1, file2, format) => {
  const getPathFile1 = getFixturePath(file1);
  const getPathFile2 = getFixturePath(file2);

  return genDiff(getPathFile1, getPathFile2, format);
};

const testData = [
  ['file1.json', 'file2.json', 'stylish', 'expected_stylish.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'expected_stylish.txt'],
  ['file1.json', 'file2.json', 'plain', 'expected_plain.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'expected_plain.txt'],
  ['file1.json', 'file2.json', 'json', 'expected_json.txt'],
  ['file1.yml', 'file2.yml', 'json', 'expected_json.txt'],
];

test.each(testData)('diff(%s, %s, format %s) equals %s', (file1, file2, format, expected) => {
  expect(getDifference(file1, file2, format)).toEqual(readFixture(expected));
});

test('main functionality with wrong data', () => {
  expect(() => {
    genDiff(
      getFixturePath('file1.json'),
      getFixturePath('file2.json'),
      'newType',
    );
  }).toThrow('Unknown format!');
});

test('parser with wrong data', () => {
  expect(() => {
    parser('I am file.js');
  }).toThrow('Format file is not correct!');
});
