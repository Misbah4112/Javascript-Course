"use strict"; // treat all js code as newer version

//alert(3+3)  we can use alert to show the output in a pop up box but its not recommended as it can be annoying for users

let name = "Misbah Pirzada" //string
let age = 21 //number
let isApproved = true //boolean

//bigInt is a new data type in javascript that can store large integers beyond the safe integer limit of Number type, used mostly in stock market and trading
//range for number is -2^53
//null is a stand alone value, its a type
//undefined is a type and a value, it means a variable has been declared but not assigned a value yet

// null DOES NOT MEAN UNDEFINED, they are different. null is an intentional absence of any object value(empty), while undefined means a variable has been declared but has not been assigned a value yet.


//symbol is a new data type in javascript that is used to create unique identifiers for objects, it is often used in object properties to avoid name collisions.


//object is a complex data type that can store collections of data and more complex entities. 

console.log(typeof name) //string
console.log(typeof undefined) //undefined

console.log(typeof null) //object, this is a bug in javascript but it has been kept for legacy reasons, it should have been null instead of object


// can read documentation TC39 and mdn web docs for more information on data types and other features of javascript.