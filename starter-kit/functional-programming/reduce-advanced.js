import fs from 'fs';

var output = fs.readFileSync('data.txt', 'utf8');

console.log('Sheet:\n', output);