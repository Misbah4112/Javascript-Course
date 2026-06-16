let score = "33abc"

console.log(typeof score) //output will be string 

let valueInNumber = Number(score)
console.log(valueInNumber) //output will be NaN because "33abc" cannot be converted to a number
//this is a bug so we need tobe careful while converting data types in javascript because it can lead to unexpected results if the value cannot be converted properly. Always check the value before converting it to avoid errors in your code.


//Number string can be easily converted to a number, boolean values can also be converted to numbers where true is 1 and false is 0,null is converted to 0 and undefined is converted to NaN,string alphabets converted to NAN (Not a number) too.


let isLoggedIn =  1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //output will be true because 1 is converted to true in boolean

let name = ""

console.log(Boolean(name))
 //empty string is converted to false in boolean 

console.log(Boolean("misbah")) //non empty string is converted to true in boolean


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber) //output will be "33" because number is converted to string

