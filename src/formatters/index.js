import stylish from './stylish.js';
import plain from './plain.js';
import makeTree from '../makeTree.js';

export default (parseFile1, parseFile2, formatterName = 'stylish') => {
  const tree = makeTree(parseFile1, parseFile2);

  switch (formatterName) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error('Unknown format!');
  }
};
