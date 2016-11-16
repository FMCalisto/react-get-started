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

var dogs = []

for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i])
    }
}