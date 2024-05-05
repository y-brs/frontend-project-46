import path from 'path';
import fs from 'fs';

const getReadFile = (filePath) => {
  if (filePath.startsWith('/')) {
    return fs.readFileSync(filePath);
  }

  const absoluteFilePath = path.resolve(process.cwd(), filePath);

  return fs.readFileSync(absoluteFilePath);
};

export default getReadFile;
