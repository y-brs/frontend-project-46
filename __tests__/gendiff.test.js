/* eslint no-undef: off */

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import parser from '../src/parser.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename));

const expectedStylish = readFile('expected_stylish.txt').toString();
const expectedPlain = readFile('expected_plain.txt').toString();
const expectedJSON = readFile('expected_json.txt').toString();

const casesStylish = [
  ['json', 'stylish', expectedStylish],
  ['json', undefined, expectedStylish],
  ['yaml', 'stylish', expectedStylish],
  ['yaml', undefined, expectedStylish],
  ['yml', 'stylish', expectedStylish],
  ['yml', undefined, expectedStylish],
];

const casesPlain = [
  ['json', 'plain', expectedPlain],
  ['yaml', 'plain', expectedPlain],
  ['yml', 'plain', expectedPlain],
];

const casesJSON = [
  ['json', 'json', expectedJSON],
  ['yaml', 'json', expectedJSON],
  ['yml', 'json', expectedJSON],
];

test.each(casesPlain)('plain format', (fileExtention, formatName, expected) => {
  const actual = genDiff(
    getFixturePath(`file1.${fileExtention}`),
    getFixturePath(`file2.${fileExtention}`),
    formatName
  );
  expect(actual).toEqual(expected);
});

test.each(casesJSON)('JSON format', (fileExtention, formatName, expected) => {
  const actual = genDiff(
    getFixturePath(`file1.${fileExtention}`),
    getFixturePath(`file2.${fileExtention}`),
    formatName
  );
  expect(actual).toEqual(expected);
});

test.each(casesStylish)(
  'stylish format',
  (fileExtention, formatName, expected) => {
    const actual = genDiff(
      getFixturePath(`file1.${fileExtention}`),
      getFixturePath(`file2.${fileExtention}`),
      formatName
    );
    expect(actual).toEqual(expected);
  }
);

test('main functionality with wrong data', () => {
  expect(() => {
    genDiff(
      getFixturePath('file1.json'),
      getFixturePath('file2.json'),
      'newType'
    );
  }).toThrow('Unknown format!');
});

test('parser with wrong data', () => {
  expect(() => {
    parser('I am file.js');
  }).toThrow('Format file is not correct!');
});
