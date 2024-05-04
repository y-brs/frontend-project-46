#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .usage('[options] <filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .arguments('<file1>')
  .arguments('<file2>')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2));
  })
  .parse();
