//functors

function stringFunctor(value, fn) {
    var chars = value.split("")
    return chars.map(function(char) {
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join("")
}

function numFunctor(arr, fn) {
    return arr.map(fn);
}

function plus1(value) {
    return value + 1;
}

function minus1(value) {
    return value - 1;
}

console.log("return 1: ", numFunctor([3, 4], plus1)); // returns [4, 5]
console.log("return 2: ", stringFunctor("ABC", plus1)); // returns "BCD"
console.log("return 3: ", stringFunctor("XYZ", minus1)); // returns "RXY"

/* Ex 2 */

const dragons = [
  { name: 'Fluffykins', health: 70 },
  { name: 'Deathlord', health: 65000 },
  { name: 'Little pizza', health: 2 }
]

const names = dragons.map(dragon => dragon.name)

console.log(names)

// outputs:
// [
//   'Fluffykins',
//   'Deathlord',
//   'Little pizza'
// ]