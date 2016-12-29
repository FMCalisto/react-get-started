const fs = require('fs')
const highland = require('highland')

highland(fs.createReadStream('customers.csv', 'utf8'))
  .split()
  .each(x => console.log('each: ' + x))
