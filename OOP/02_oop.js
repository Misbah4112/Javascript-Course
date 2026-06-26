
//object literal: literally an object 
const user = {
    username: "MIsbah",
    age: 21,
    loginCount: 8,
    signIn: true,

    getUserDetails: function (){
        console.log("Got user details from database")

        console.log(`Username: ${this.username}`) //only username wont work. with the use of this, we tell we are referring to the current context and us the username from the current object
        console.log(this) //this is an empty object {} initially and then we add values to it. on browser , by default we get a window object in this
    }


}

//if i want to build 100 users then i'll have to do the same work done above 100 times. That is the reason why we use objects and,classes and constructors


console.log(user.username)
console.log(user.getUserDetails())


const promiseOne = new Promise()
const date = new Date()
 //new is a constructor functions allows making multiple instances with 1 object

 //in case of date and promises we  actually need  separate functions and new context and we are not concerned with the older context so we keep them separate








function User(username,loginCount,isLoggedIn){

    this.username = username // now confusion arrives which username are we talking about? left side is the variable and right side is the passed value

    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


this.greeting = function(){ //we can also make a function
    console.log(`Welcome: ${this.username}`)
}

    return this //no need for explicitly writing it . this is return by default

}


const userOne = User("misbah", 12, true)

console.log(userOne)  //prints correctly misbah,12 and true 

//==========================================

const userOne = User("misbah", 12, true)
const userTwo = User("hitesh", 14, true)

console.log(userOne) //now the problem arises although we did not print userTwo. userTwo overwrites the value of userOne 

//we simply need to add new keywords to both whhihc gives us a new instance each time and separate both of them


const userOne = new User("misbah", 12, true)
const userTwo = new User("hitesh", 14, true)



/*

Step 1: What is Car?
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

This is called a constructor function.

Think of it as a blueprint for creating cars.

It's like saying:

"Whenever someone wants a new car, here's how to build one."

Step 2: What does new do?
const auto = new Car("Honda", "Accord", 1998);

When JavaScript sees new, it does four things automatically.

It creates a brand new object
{}
It sets this to that new object

So inside Car():

this.make = "Honda";
this.model = "Accord";
this.year = 1998;

becomes

{
  make: "Honda",
  model: "Accord",
  year: 1998
}
It links the object to Car.prototype

This is the important part.

JavaScript secretly creates a link like this:

auto
 │
 ▼
Car.prototype
 │
 ▼
Object.prototype
 │
 ▼
null

This chain is called the prototype chain.

It returns the object

So now

const auto = new Car("Honda", "Accord", 1998);

means

auto = {
  make: "Honda",
  model: "Accord",
  year: 1998
}

So auto is simply a variable holding one car object.

Think of it like this:

Blueprint
    │
    ▼
Car()

    │ new
    ▼

Actual Car Object

auto
Step 3: What does instanceof mean?

The word instance simply means:

An object created from a class or constructor.

Example:

const auto = new Car(...);

auto is an instance of Car.

Just like:

A blueprint → house
A recipe → cake
A constructor → object

The finished object is called an instance.

Step 4: What does instanceof check?
console.log(auto instanceof Car);

JavaScript asks:

"Was auto created using the Car constructor?"

or more accurately,

"Is Car.prototype somewhere in auto's prototype chain?"

Answer:

Yes

So it prints

true
Visual
auto

↓

Car.prototype

↓

Object.prototype

↓

null

Since Car.prototype is in the chain,

auto instanceof Car

returns

true
Why is this also true?
console.log(auto instanceof Object);

Output

true

Because every normal object in JavaScript eventually inherits from Object.

Remember the chain:

auto
 │
 ▼
Car.prototype
 │
 ▼
Object.prototype
 │
 ▼
null

JavaScript checks:

Is Object.prototype in this chain?

Yes!

Therefore

auto instanceof Object

is

true

*/


console.log(userOne.constructor)
//outputs function: User since constructor is a reference of itself

