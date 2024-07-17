import genDiff from './formatters/index.js';
import parser from './parser.js';
import { getFileData, getFileExtension } from './utils.js';

export default (filepath1, filepath2, formatterName) =>
  genDiff(
    parser(getFileData(filepath1), getFileExtension(filepath1)),
    parser(getFileData(filepath2), getFileExtension(filepath2)),
    formatterName
  );
