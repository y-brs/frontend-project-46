import genDiff from './formatters/index.js';
import parser from './parser.js';
import { getFileData, getFileExtension } from './utils.js';
import makeTree from './makeTree.js';

export default (filePath1, filePath2, formatterName) => {
  const file1 = parser(getFileData(filePath1), getFileExtension(filePath1));
  const file2 = parser(getFileData(filePath2), getFileExtension(filePath2));
  const astTree = makeTree(file1, file2);

  return genDiff(astTree, formatterName);
};
