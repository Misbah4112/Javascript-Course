const balance = new Number(100)
console.log(balance) //output will be [Number: 100] because new Number() creates a new number object when we explicitly want to ensure it's a number.

console.log(balance.tostring()) //output will be "100" because toString() method converts a number to a string

//when we explore prototype of number, it has limited methods and properties because number is a primitive data type in javascript and it is immutable which means that its value cannot be changed once it is created. Any operation that seems to modify a number actually creates a new number. but when we conver number into string, it becomes a string object and it inherits from String.prototype which has many methods and properties that we can use with strings.

console.log(balance.tostring().length) //output will be 3 because toString() method converts a number to a string and then we can use length property to get the length of the string

console.log(balance.toFixed(2)) //output will be "100.00" because toFixed() method formats a number using fixed-point notation and it takes the number of digits to appear after the decimal point as an argument. Mostly used when e-commerce websites to show price of products in 2 decimal places.


const otherNum = 23.4658

console.log(otherNum.toPrecision(3));
//output will be "23.5"  because it sees the number of digits as argument are 3 and rounds the number to 3 significant digits.

//similarly if we did 
const otherNum = 123.4658

console.log(otherNum.toPrecision(3));
//output will be "123" because it sees the number of digits as argument are 3 and rounds the number to 3 significant digits. 

const otherNum = 1123.4658

console.log(otherNum.toPrecision(3));
//output will be "1.12e+3" because it sees the number of digits as argument are 3 and rounds the number to 3 significant digits and it converts it to exponential notation because the number is too large to be represented in fixed-point notation with 3 significant digits. 
 
/*
=================== EXTRA EXPLANATION FOR CLARITY ===================


1123.4658

Count significant digits:

1 1 2 3 . 4 6 5 8
↑ ↑ ↑

You asked for:

toPrecision(3)

meaning:

Keep only 3 total significant digits

So:

1123.4658
↓
112

Now look at next digit:

1123
   ↑

Since next digit is 3 (<5), no round up.

Result becomes:

1120

But JS wants exactly 3 significant digits, so it writes:

1.12 × 10³

which becomes:

1.12e+3

(e+3 means ×1000)

Because:

1.12 × 1000 = 1120 */


const hundreds = 100000000
console.log(hundreds.toLocaleString()); //output will be "100,000,000" commas added as per us format 


Number.MAX_SAFE_INTEGER(); //output will be 9007199254740991 because it is the largest integer that can be safely represented in JavaScript. Any integer larger than this may not be represented accurately due to limitations in the way JavaScript handles numbers.

Number.MAX_VALUE(); //output will be 1.7976931348623157e+308 because it is the largest positive finite value that can be represented in JavaScript. Any number larger than this will be represented as Infinity.


// ======================= MATHS =======================

console.log(Math); //math is a built-in object in JavaScript that has properties and methods for mathematical constants and functions. 

console.log(Math.PI) 

console.log(Math.abs(-5)) //output will be 5 because abs() method returns the absolute value of a number. turns negatve value into positive value but not VICE VERSA. psoitive value will remain positive .

console.log(Math.round(4.7)) //output will be 5 because round() method rounds a number to the nearest integer.

console.log(Math.ceil(4.2)) //output will be 5 because ceil() method rounds a number up

console.log(Math.floor(4.7)) //output will be 4 because floor() method rounds a number down

console.log(Math.random()) //output will be a random number between 0 and 1 because random() method returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log(Math.min(3,5,1,2)) //output will be 1
console.log(Math.max(3,5,1,2)) //output will be 5

console.log(Math.random()*10 +1) //output will be a random number between 1 and 10 because random() method returns a random floating-point number between 0 (inclusive) and 1 (exclusive), so we multiply it by 10 to get a number between 0 and 10, and then we add 1 to get a number between 1 and 10 =>1 ≤ number < 11 (decimals allowed)

console.log((Math.random()*20) +1) //output will be a random number between 1 and 20 

let max = 20
let min = 10
console.log(Math.floor(Math.random() * (max-min+1) + min))
//max-min+1 is the range of numbers we want to generate, and we add min to shift the range to start from min. Math.floor() is used to round down the result to the nearest integer.  


/*
Math.random()*11

Range:

0 ≤ x < 11
Add 10:

10 ≤ x < 21

*/



