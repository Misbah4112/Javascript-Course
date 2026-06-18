// Immediately Invoked Function Expression (IIFE)
// is a function that executes immediately after being defined.
//
// It is mainly used to:
// 1. Execute code immediately without calling the function separately.
// 2. Create a separate local scope and avoid pollution of global variables.
// 3. Prevent variables inside the function from affecting global scope.

(function(){
console.log("Executed immediately");
})();

//so syntax is function declaration{} then function execution ()

//()()

//can be written as arrow function too

( ()=> {
    console.log(`db connected`);

})()

//sometime when 2 iife are written back to back, we may get errors so we must ensure to end it each iiife with a semicolon ;




//NAMED IIFE
( function chai (){
console.log('db connected');

})();


//SIMPLE IIFE
( (name) => { //parameter passed here
    console.log(`db connec of ${name}`);
    
}
)("misbah"); //argument passed here



/*
NOTE for further clarity
------------------------

Ahh now I understand your question.

You mean instead of:

```javascript
(function(name){
   console.log(name)
})("misbah")
```

you want:

```javascript
function greet(name){
   console.log(name)
}

greet("misbah")
```

The answer is:

**You cannot do that with an IIFE.**

Because IIFE means:

```text
define function
+
call immediately
in one statement
```

So:

```javascript
(function(name){
   console.log(name)
})("misbah")
```

is already equivalent to:

```javascript
function greet(name){
   console.log(name)
}

greet("misbah")
```

But if you write:

```javascript
(function greet(name){
   console.log(name)
})

greet("misbah")
```

❌ Won't work outside.

Because the function is not stored for later use.

If you want to call by name later:

```javascript
function greet(name){
   console.log(name)
}

greet("misbah")
```

Then it is **not IIFE anymore**.

So:

```text
IIFE → immediate execution → no later calling

Normal function → define → call later by name
```

*/