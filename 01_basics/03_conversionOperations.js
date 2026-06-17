 // let score = "33abc"

 // console.log(typeof score) //output will be string 

 // let valueInNumber = Number(score)
 // console.log(valueInNumber) //output will be NaN because "33abc" cannot be converted to a number
 // //this is a bug so we need tobe careful while converting data types in javascript because it can lead to unexpected results if the value cannot be converted properly. Always check the value before converting it to avoid errors in your code.

 // //Number string can be easily converted to a number, boolean values can also be converted to numbers where true is 1 and false is 0,null is converted to 0 and undefined is converted to NaN,string alphabets converted to NAN (Not a number) too.


// let isLoggedIn =  1

 // let booleanIsLoggedIn = Boolean(isLoggedIn)
 // console.log(booleanIsLoggedIn) //output will be true because 1 is converted to true in boolean

 // let name = ""

 // console.log(Boolean(name))
 //  //empty string is converted to false in boolean 

 // console.log(Boolean("misbah")) //non empty string is converted to true in boolean


 // let someNumber = 33

 // let stringNumber = String(someNumber)
 // console.log(stringNumber) //output will be "33" because number is converted to string

 /* ==================Operations================*/

// let value = 3
// let neg_value = -value
// console.log(neg_value);



// console.log(+"33") //output will be 33 because + operator converts string to number
// console.log(-"33") //output will be -33 because - operator converts string to number and negates it
// console.log(2+2) //output will be 4
// console.log("2"+"2") //output will be "22" because + operator concatenates strings
// console.log("2"+2) //output will be "22" because + operator concatenates string and number, number is converted to string and then concatenated
// console.log(2-2) //output will be 0
// console.log(2*2) //output will be 4
// console.log(2/2) //output will be 1
// console.log(2%2) //output will be 0 because % operator gives the remainder of the division
// console.log(2**3) //output will be 8 because ** operator gives the power of the number
console.log("1"+2+2) //output will be "122" because + operator concatenates string and number, number is converted to string and then concatenated

console.log(1+2+"2") //output will be "32" because + operator first adds the numbers and then concatenates the string, number is converted to string and then concatenated

// let str1 = "Hello"
// let str2 = "World"
// let str3 = str1 +str2
// console.log(str3) //output will be "HelloWorld" because + operator concatenates strings

// console.log(+true) //output will be 1 because + operator converts boolean to number 

 
let gameCounter = 100
console.log(gameCounter++) //output will be 100 (postfix) because in postfix the value is used in the expression before it is incremented, while in prefix the value is incremented before it is used in the expression.

gameCounter = 100
console.log(++gameCounter) //output will be 101 (prefix) because in prefix the value is incremented before it is used in the expression, while in postfix the value is used in the expression before it is incremented.



