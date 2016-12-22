#! /usr/bin/env node

/**
 * Module dependencies.
 */ 

var program = require('commander');

program
  .version('0.1.0')
  .option('-n, --nearby', 'Corpses nearby')
  .parse(process.argv);

if (program.nearby) {
  console.log("Nearby Corpses");
}
