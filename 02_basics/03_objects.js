/*
There are 2 ways of declaring objects
1) literal      ;Singleton OBject is NOT formed in Literal declaration of objects
2)constructor   ; Singleton object

*/


Object.create //CONSTRUCTOR METHOD of creating objects gives singleton

//object literals:
//object have 2 main portions: keys and value = > keys are internally processed as strings and the value can be any datatype

const user = {
    name: "Misbah",
    age : 21,
    Location: "Karachi",
    email: "misbah@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]

}

console.log(user.email) //1 meethod of accessing

console.log(user["email"]) //in this method, we need to enclose in "" because as we said internally keys are processed as string so in this method, we need to pass it this way. thedot method . does on its own so not needed there

// In JavaScript objects, enclosing keys in quotes does NOT automatically prevent dot notation.
//
// Dot notation works as long as the key is a valid identifier
// (no spaces, no hyphens, does not start with a number, etc.)
//
// If the key is not a valid identifier, bracket notation must be used.

const my_obj = {
"name": "misbah"
}

console.log(my_obj.name) // works → "misbah"
console.log(my_obj["name"]) // also works → "misbah"

// Example where only bracket notation works:

const user = {
"full name": "misbah"
}

console.log(user["full name"]) // works
//  console.log(user.full name)//invalid syntax



//symbols (IMP FOR INTERVIEWS)
const my_sym = Symbol("key1")

// const user = {
// my_sym: "mykey1"
// }

// console.log(user.my_sym)
// console.log(typeof user.my_sym)
//okay so what happened here if the my_sym declaration for Symbol became unrelated to the key inside the object my_sym that is why when we printed the type of my_sym key we get a string and not SYMBOL/ to treat it as a SYMBOL(key1) as the key inside object, syntax needs to be a little different. the key inside object should be enclosed in square brackets and the console.log part should also be change to the bracket syntax in the following way:
 

const user = {
[my_sym]: "mykey1"
}

console.log(user[my_sym])

/*
 READ BELOW FOR EXTRA CLARITY:
 You may think:

my_sym is Symbol("key1")
↓
so object key becomes Symbol("key1")

But that is NOT what JavaScript does.

Inside an object:

{
   my_sym: "mykey1"
}

without [], JS treats:

my_sym

as a literal property name, not the variable.

So JS converts it internally to:

const user = {
   "my_sym": "mykey1"
}

Notice:

KEY = "my_sym"   ← string
VALUE = "mykey1"

Your symbol variable is completely ignored.

Visual:

my_sym variable
↓
Symbol("key1")

user object
{
 "my_sym": "mykey1"
}

They are unrelated.

So:

console.log(user.my_sym)

means:

console.log(user["my_sym"])

Output:

mykey1

And:

console.log(typeof user.my_sym)

Output:

string

because:

typeof "mykey1"
↓
string

If you actually want the symbol to become the key, do this:

const my_sym = Symbol("key1")

const user = {
    [my_sym]: "mykey1"
}

console.log(user[my_sym])

Visual:

KEY = Symbol(key1)
VALUE = "mykey1"

Output:

mykey1

Now:

console.log(Object.keys(user))

Output:

[]

because symbol keys are hidden from normal key listing.

So the rule:

my_sym: value
→ key is literally "my_sym"

[my_sym]: value
→ use variable value as key

 */



user.email = "ms@email.com" //to change email vy overwriting

Object.freeze(user) //this ensures that values are locked and now u cannot change them

user.email = "123@gmail.com" //wont give error but chnage wont be reflected

console.log(user)
//Notice that now the key walue shows Symbol(key1) instead og my_sym because of the []

user.greeting = function() {
    console.log("Hellow");
}

console.log(user.greeting); //give output function(anonymous). only function reference obtained, function not executed. that's what it means.

console.log(user.greeting()); //outputs Hellow



user.greetingTwo = function() {
    console.log(`Hello, ${this.name}`); //this is used to access the properties ofthe object user
}

console.log(user.greeting());
console.log(user.greetingTwo());
