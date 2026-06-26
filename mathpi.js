console.log(Object.getOwnPropertyDescriptor(Math,"PI")) //we pass module math and then the property which we want to see gives: writable: false, enumerable: false,configurable: false and these enumerable writable configurable cannot be accessed by us since there are alot of internal checks also applied to them and we are not the owner that made it so therefore we canot change the value of pi

console.log(Math.PI)
Math.PI = 5 //wont give error but wont overwrite too
console.log(Math.PI)

// Object.defineProperty(Math,"PI", {
//     writable:true
// }) //gives error we cannot redefine it


//however if we make out own object then we can set its properties too and change it properties too

const chai = {
    name:"ginger tea",
    price: 50,
    isAvailable: true,
    order: function(){
        console.log("chai nai bani")
    }
}

// console.log(chai) //will print all properties


// console.log(Object.getOwnPropertyDescriptor(chai,"name")) //chai is not property so we have to pass name as property and this output shows that all are enumerable,writable and configurable and since we made it so canchange them


Object.defineProperty(chai,"name", {
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))


for (let [key,value] of Object.entries(chai)){
    
    if(typeof value !== 'function'){
    console.log(`${key}, ${value}`) //cannot iterate directly without entries()
    //notice that name is not printed, it's because above we did enumerable = false for name which made it not iterable
}
}

/*
The key difference is that Object.entries(chai) returns an iterable, while chai (a plain object) is not iterable.
This works
const chai = {
    name: "ginger",
    price: 250,
    isAvailable: true
};

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key}, ${value}`);
}

Object.entries(chai) returns an array like this:

[
    ["name", "ginger"],
    ["price", 250],
    ["isAvailable", true]
]

Arrays are iterable, so for...of can loop over them.

Each iteration gives you one array:

["name", "ginger"]

which is destructured into:

let [key, value] = ["name", "ginger"];
This does NOT work
for (let [key, value] of chai) {
    console.log(key, value);
}

because chai is a plain object:

{
    name: "ginger",
    price: 250,
    isAvailable: true
}
}
*/

