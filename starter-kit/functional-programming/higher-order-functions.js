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
//         dogs.push(animals[i])
//     }
// }

var isDog = function(animal) {
    return animal.species === 'dogs'
}

var dogs = animals.filter(isDog)