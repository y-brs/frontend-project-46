import fs from 'fs';
import path from 'path';

export const getFileExtension = (filepath) => filepath.split('.')[1];

export const getFileData = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, 'utf-8');
};
