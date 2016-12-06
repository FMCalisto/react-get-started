// Currying

// 1

// let dragon = (name, size, element) =>
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!'

// console.log(dragon('fluffykins', 'tiny', 'lightning'))

// 2

// let dragon =
//     name =>
//         size =>
//             element =>
//                 name + ' is a ' +
//                 size + ' dragon that breathes ' +
//                 element + '!'

// console.log(dragon('fluffykins')('tiny')('lightning'))

// 3

// let dragon =
//     name =>
//         size =>
//             element =>
//                 name + ' is a ' +
//                 size + ' dragon that breathes ' +
//                 element + '!'

// let fluffykinsDragon = dragon('fluffykins')
// let tinyDragon = fluffykinsDragon('tiny')

// console.log(tinyDragon('lightning'))

// 4

// import _ from 'lodash'

// let dragon = (name, size, element) =>
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!'

// dragon = _.curry(dragon)

// let fluffykinsDragon = dragon('fluffykins')
// let tinyDragon = fluffykinsDragon('tiny')

// console.log(tinyDragon('lightning'))

// 5

// let dragons = [
//     { name: 'fluffykins', element: 'lightning' },
//     { name: 'noomi', element: 'lightning' },
//     { name: 'karo', element: 'fire' },
//     { name: 'doomer', element: 'timewarp' }
// ]

// let hasElement =
//     (element, obj) => obj.element === element

// let lightningDragons =
//     dragons.filter(x => hasElement('lightning', x))

// console.log(lightningDragons)

// 5.1

import _ from 'lodash'

let dragons = [
    { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi', element: 'lightning' },
    { name: 'karo', element: 'fire' },
    { name: 'doomer', element: 'timewarp' }
]

let hasElement =
    _.curry((element, obj) => obj.element === element)

let lightningDragons =
    dragons.filter(hasElement('lightning'))

console.log(lightningDragons)