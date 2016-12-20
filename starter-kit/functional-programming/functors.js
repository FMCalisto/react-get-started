//functors

function stringFunctor(value, fn) {
    var chars = value.split("")
    return chars.map(function(char) {
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join("")
}

function plus1(value) {
    return value + 1;
}

function minus1(value) {
    return value - 1;
}

console.log("return 1: ", [3, 4].map(plus1)); // returns [4, 5]
console.log("return 2: ", stringFunctor("ABC", plus1)); // returns "BCD"
console.log("return 3: ", stringFunctor("XYZ", minus1)); // returns "RXY"