// Anonymous function assigned to a variable

var triple = function(x) {
  return x * 3
}

var waffle = triple

waffle(30)

var animals = [
  { name: 'Fluffy', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
]

// Functions are values

// var dogs = []

// for (var i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog') {
//         dogs.push(animals[i].name)
//     }
// }

// var isDog = function(animal) {
//     return animal.species === 'dogs'
// }

// Filter expect the CallBack function return true or false value
// determining whether or not the item should be included
// into the array or not 

// var dogs = animals.filter(isDog)

// Map will include all items in the array but insted it expects
// the callbak function to return a transformed object that it will
// put into the new array instead of the original one

var names = animals.map(animal => animal.name)

console.log(names)