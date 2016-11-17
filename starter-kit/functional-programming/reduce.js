/* Reduce Basics

What is reduce?

Is the multi tool of list transformation
is use to express any list transformation
we can use reduce to implement functions.

*/

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
]

// reduce is a function on the array object
// that takes a callback function but it once an object
// we can think of this object as a starting point for
// our sum that is zero and this sum is going to be passed
// as the first argument of the reduce callback that also
// receives the iterator item but it is going to be the second
// argument called here as order

var totalAmount = orders.reduce((
  sum,
  order
) => {

  console.log("Total Amount: ", sum, order);

  return sum + order.amount;

}, 0)

/*

var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}

*/

console.log(totalAmount)
