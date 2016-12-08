// Recursion

/*
 * When a function calls it self until it doesn't.
 */

let countDownFrom = (num) => {
    if (num === 0) {
        return;
    }
    console.log(num)
    countDownFrom(num - 1)
}

countDownFrom(10)