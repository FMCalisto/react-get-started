const fs = require('fs')
const highland = require('highland')

highland(fs.createReadStream('customers.csv', 'utf8'))
  .split()
  .map(line => line.split(','))
  .map(parts => ({
    name: parts[0],
    numPurchases: parts[1]
  }))
  .filter( customer => customer.numPurchases > 2 )
  .each(x => console.log('each: ', x))

const variables = [
 { option: '1', value: 1 },
 { option: '2', value: 2 },
 { option: '3', value: 3 }
]

variables
  .map((variable) => variable.value)
  .forEach(printer => console.log("TESTING: ", printer))
