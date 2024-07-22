import stylish from './stylish.js';
import plain from './plain.js';
import { tree } from '../index.js';

export default (file1, file2, formatterName = 'stylish') => {
  switch (formatterName) {
    case 'stylish':
      return stylish(tree(file1, file2));
    case 'plain':
      return plain(tree(file1, file2));
    case 'json':
      return JSON.stringify(tree(file1, file2));
    default:
      throw new Error('Unknown format!');
  }
};
