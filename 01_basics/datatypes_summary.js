// all datatypes are basically characterized as either  preemitive or non-primitive datatypes based how they are stored and accessed in memory. Primitive datatypes are stored  in the form of call by value which means that when we assign a primitive value to a variable, the variable holds the actual value. When we copy that variable to another variable, it creates a new copy of the value in memory. So if we change the value of one variable, it does not affect the other variable because they are stored in different memory locations.  there are total 7 primitive datatypes in javascript which are string, number, boolean, null, undefined, symbol and bigInt.

// Symbol is a primitive data type in JavaScript used to create unique identifiers.

// Even if two symbols look the same, JavaScript treats them as completely different values.

// Example:

// let id1 = Symbol("id")
// let id2 = Symbol("id")

// console.log(id1 === id2)

// Output:

// false

// Even though both say "id".

// Why?

// Because every Symbol() creates a unique value.

// Think:

// Symbol("id") → unique secret tag #1
// Symbol("id") → unique secret tag #2


//reference type or non primitive datatypes are stored in the form of call by reference which means that when we assign a non-primitive value to a variable, the variable holds a reference to the value in memory. When we copy that variable to another variable, it creates a new reference to the same value in memory. So if we change the value of one variable, it affects the other variable because they are both referencing the same value in memory.  there is only one non-primitive datatype in javascript which is object and it can store collections of data and more complex entities and arrays and functions are also objects in javascript.







// NOTE
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10.3; // x is now a number, no float datatype in javascript
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

const heros = ["shaktiman", "batman", "superman"];

let myobj = {
name : "Misbah",
age: 21,

}



const myfunc = function() {

    console.log("hello world");

}

console.log(typeof heros)//object
console.log(typeof myobj)//object

console.log(typeof myfunc)//function. it's also called object function because it is a special type of object that can be called or invoked.


// null TYPE IS OBJECT


