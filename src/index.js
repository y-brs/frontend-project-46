import genDiff from './formatters/index.js';
import parser from './parser.js';
import { getFileData, getFileExtension } from './utils.js';

export default (filePath1, filePath2, formatterName) => genDiff(
  parser(getFileData(filePath1), getFileExtension(filePath1)),
  parser(getFileData(filePath2), getFileExtension(filePath2)),
  formatterName,
);
