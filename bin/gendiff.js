#!/usr/bin/env node

/**
 * This function is a callback function used by the commander.js library
 * to handle the 'action' event.
 * It takes three parameters: filepath1, filepath2, and formatName.
 * The function compares two configuration files using the genDiff function
 * and logs the resulting difference to the console.
 *
 * @param {string} filepath1 - The path to the first configuration file.
 * @param {string} filepath2 - The path to the second configuration file.
 * @param {string} formatName - A string containing the format property,
 * which specifies the output format.
 *
 */

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.2.0')
  .option('-f, --format <type>', 'output format (default: stylish)')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .action((filepath1, filepath2, formatName) => {
    console.log(genDiff(filepath1, filepath2, formatName.format));
  });

program.parse();
