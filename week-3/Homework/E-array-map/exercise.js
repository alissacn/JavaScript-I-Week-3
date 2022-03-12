// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


/* Soluction 1 */
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var multipliedByOneHundred = numbers.map(multipliedNumber);

function multipliedNumber(number) {
    return number * 100;
}

console.log(multipliedByOneHundred);



/* Soluction 2 */
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var multipliedByOneHundred = numbers.map(function multipliedNumber(number) {
    return number * 100;
});


/* Soluction 3 */
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var multipliedByOneHundred = numbers.map(function (number) {
    return number * 100;
});


/* Soluction 4 */
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var multipliedByOneHundred = numbers.map(number => {
    return number * 100;
});


/* Soluction 5 */
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var multipliedByOneHundred = numbers.map(number => number * 100); 




