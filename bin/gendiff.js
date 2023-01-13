#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/path.js'


program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
	  const diff = genDiff(filepath1, filepath2);
	  console.log(diff);
  });


  program.parse();