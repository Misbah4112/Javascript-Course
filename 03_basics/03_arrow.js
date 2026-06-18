// THIS keywords refers to current context
const user = {
    username :"misbah",
    price:199,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`); //here we cannot access directly through username. this.username tells that its object property so works like this
        
    }
}

//current context means what are we currently talking about

user.welcomeMessage() //outputs misbah, welcome to website

user.username = "sam"
user.welcomeMessage() // now the current context has username sam so outpts sam instead of misbah. and object has username changed to sam too


console.log(this) //empty {} output because no global object made yet

//NOTE FOR INTERVIEW: browser has window global object

//======== NOW ARROW FUNCTION =========================
function chai(){
    let username  = "misbah"
    console.log(this); //this inside a function has more values/ there are lots of values in this which can be accessed
    console.log(this.username);//not possible because we are in a function and this is working with objects

}

chai()



const chai = () =>{
let username = "misbah"
console.log(this); //{}

}

chai()

//===================== pure arrow functions now ================


const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log((addTwo(3,4))); //outputs 7
   


// another method is called implicitreturn where we use paranthesis instead of curly braces. paranthesis mean no need to write return. curlybraces means u have to write return

const addTwo = (num1,num2) => ( num1 + num2)

console.log((addTwo(3,4)));

//objects cannot be used directly with curly braces, we have to wrap it in parenthesis, else will give undefined behaviour

const addTwo = () => ({ username: "misbah"})

console.log(addTwo());

 /*
 MORE DETAILS ABOUT normal function, arrows function and this operator for interview questions

 This is the exact point where `this` finally makes sense.

The main difference is **how `this` behaves**.

## 1. Normal function → `this` changes depending on who calls it

Example:

```javascript
const user = {
    username: "misbah",

    welcome: function(){
        console.log(this.username)
    }
}

user.welcome()
```

Output:

```text
misbah
```

Because:

```text
this
↓
user object
```

So:

```javascript
this.username
```

means:

```javascript
user.username
```

---

Normal function outside object:

```javascript
function test(){
    console.log(this)
}

test()
```

Browser:

```text
window
```

Node:

```text
{}
```

So normal functions get their own `this`.

---

## 2. Arrow function → does NOT create its own `this`

Example:

```javascript
const user = {
    username:"misbah",

    welcome: () => {
        console.log(this.username)
    }
}

user.welcome()
```

Output:

```text
undefined
```

Why?

Arrow function says:

```text
I won't create my own this.
I'll use surrounding this.
```

There is no `user` binding.

So:

```text
this
↓
global object
```

not:

```text
user
```

---

Example:

```javascript
const test = () => {
    console.log(this)
}

test()
```

Node:

```text
{}
```

Browser:

```text
window
```

---

Easy memory:

|                           | Normal Function | Arrow Function |
| ------------------------- | --------------- | -------------- |
| Own `this`?               | ✅ Yes           | ❌ No           |
| Good for object methods?  | ✅ Yes           | ❌ Usually no   |
| `this` changes by caller? | ✅               | ❌              |

Object methods:

```javascript
welcome: function(){}
```

Callbacks / short functions:

```javascript
() => {}
```

So when instructors say:

> "`this` does not work in arrow functions"

More accurately:

```text
Arrow functions do not have their own this.
```
Normal function: this refers to the object that called the function, because normal functions create their own this.
Arrow function: this refers to the surrounding scope's this (lexical this) because arrow functions do not create their own this.

 */