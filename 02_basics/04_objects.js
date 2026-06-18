//here we are discussing the singleton method
const tinderUser = new Object()
//works same as: 
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "misbah"
tinderUser.isLoggedIn = false
// console.log(tinderUser)


const Product = {
    product_name : "sunscreen",
    brand: "saeed ghani",
    consumer: {
        consumer_name:"Misbah",
        email:{
            name:"misbah@gmail.com",
            
            },
        review: 5

    }
}

console.log(Product.consumer) //gives everything inside of consumer
console.log(Product.consumer.consumer_name) //further values in soncumer can be accessed this way
console.log(Product.consumer.email.name) //nested objects can be obtained this way


console.log(Product.consumer?.review)
//this is the concept of optional chaining for extra protection that what if consumer does not exists. it is used when Api's are used for avoiding repeated if else blocks

const obj1 = {
    1: "a", 
    2: "b"
}


const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = {obj1,obj2}
console.log(obj3) //same issue like in arrays we get 2 objects inside obj3 a single object

const obj3 = Object.assign({},obj1,obj2)
//gives single obj 3 the empty{} shows target where the result of obj 1 2 is stored. syntax is Object.assign(target,source). if we remove{} then result will be store in obj1

console.log(obj3)


const obj3 = Object.assign(obj1,obj2)
console.log(obj3 == obj1) //should be true


//another method for combining objects is same like arrays. Mostly this is used

const obj3 = {...obj1,...obj2}
console.log(obj3)

//below we will be discussing the accessing of values when the come from databases e.g from database we get arrays which contain list of objects:

const users = [
{

    id:1,
    email: "h@gmail.com"
},{

}

]

users[1].email //access object 1 and then its value through .

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //gives keys in the form of Array(v.imp for databases and project)


console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); //gives full array of key,value ombo with each key value pair as a separate array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //should return true


//==========================================

const course = {
    coursename:"dsa",
    price: 999,
    courseInstructor:"misbah"
}

//normailly we access with:
course.courseInstructor

//but we can also use destructuring method to avoid writing course. many time and it's very beneficial for usage in react
const {courseInstructor: instructor} = course
//courseInstructor could have been used directly but we renamed it to instructor for convenience
console.log(instructor) 


//e.g in React
/* might confuse now because we havent studied methods and react rn

The concept being delivered is simply:

> **Object destructuring in function parameters**

Meaning:

Instead of:

```javascript
function navbar(props){
   console.log(props.company)
}
```

you directly extract values from the object:

```javascript
function navbar({company}){
   console.log(company)
}
```

Internally this means:

```javascript
function navbar(props){
   const company = props.company
}
```

So the concept is:

```text
Receive an object
↓
Extract properties immediately
↓
Avoid repeatedly writing object.property
```

React uses this a lot because `props` is just an object.

*/

//===============================API====================

//the values coming from API come in JSON format. Back then they used to come in XML format which was annoying. Briefly, an API (Application Programming Interface) is an interface that allows two applications or systems to communicate. For example, when we open youtube.com, the browser sends a request to YouTube's servers. The server processes the request and sends back data (HTML, CSS, JavaScript, videos, etc.) which the browser displays as a website. APIs are commonly used when one application needs to request or exchange data/services with another application.


//JSON FORMAT 
//this is not an obect because it has no name
// {
//     "coursename": "ai",
//     "price": "free"
// }


//we can also obtain the data in an array form [ {}, {} ]
