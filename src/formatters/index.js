import stylish from './stylish.js';
import plain from './plain.js';

export default (tree, formatterName = 'stylish') => {
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
