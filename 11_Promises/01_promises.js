/* promises refers to something that might be completed in future as either success or failure. it has 3 stages:

1)pending: initial state,neither fulfilled nor rejected
2)fulfilled : completed successfully
3)rejected : operation failed



*/

/*

# 1. Creating and Consuming a Promise

```javascript
// Promise:
// A Promise represents the eventual completion (resolve) or failure (reject)
// of an asynchronous operation.
//
// resolve() -> Promise completed successfully.
// reject() -> Promise failed.
//
// .then() runs only after resolve() is called.
*/
const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)

})

promiseOne.then(function(){
    console.log("Promise consumed");
})
```
// /*
// ### Output after 1 second

// ```
// Async task is complete
// Promise consumed
// ```
/*
---

# 2. Creating and Consuming a Promise Immediately

```javascript
// We don't always need to store a Promise in a variable.
// We can create and consume it immediately.
*/

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// /*
// ### Output

// ```
// Async Task 2
// Async 2 resolved
// ```
// /*
// ---

// # 3. Passing Data with resolve()
/*
javascript
// resolve() can return data.
// Whatever is passed inside resolve()
// becomes available inside .then().
*/
const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){

        resolve({
            username: "Chai",
            email: "chai@example.com"
        })

    },1000)

})

promiseThree.then(function(user){

    console.log(user);

})
/*

### Output

javascript
{
  username: "Chai",
  email: "chai@example.com"
}


# 4. resolve() vs reject()

javascript
// If work succeeds -> resolve()
// If work fails -> reject()
//
// Here we simulate an error using a boolean.
*/

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = true;

        if(!error){

            resolve({
                username:"hitesh",
                password:"123"
            })

        }

        else{

            reject("ERROR: Something went wrong")

        }

    },1000)

})
/*

# 5. Promise Chaining (.then())

/*javascript
// Whatever is returned from one .then()
// is received by the next .then().
//
// This is called Promise Chaining.
*/

promiseFour
.then((user)=>{

    console.log(user);

    return user.username;

})

.then((username)=>{

    console.log(username);

})

.catch(function(error){

    console.log(error);

})

.finally(function(){

    console.log("Promise is either resolved or rejected");

})
/*
### If error = false

Output

```
{ username: 'hitesh', password: '123' }
hitesh
Promise is either resolved or rejected
```
/*
### If error = true

Output

```
ERROR: Something went wrong
Promise is either resolved or rejected
```
/*
---

# 6. .catch()

```javascript
// .catch() runs only if reject() is called.
// It handles errors so the program doesn't crash.
```

Example
*/
promiseFour.catch(function(error){

    console.log(error);

})
/*
Output

```
ERROR: Something went wrong
```
/*
---

# 7. .finally()

```javascript
// .finally() always executes.
// It doesn't matter whether Promise resolved or rejected.
//
// Commonly used for:
// hiding loaders
// closing database connections
// cleanup tasks
```

Example

```javascript
promiseFour.finally(function(){

    console.log("Done");

})
```
/*
Output

```
Done
```
/*
---

# 8. async / await

```javascript
// async makes a function asynchronous.
//
// await pauses ONLY this async function
// until the Promise settles.
//
// await can only be used inside an async function.
*/
const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = false;

        if(!error){

            resolve({
                username:"javascript",
                password:"123"
            })

        }

        else{

            reject("ERROR: JS went wrong")

        }

    },1000)

})
/*
## Using try...catch with async/await

// await automatically waits for the Promise.
// If Promise rejects, execution jumps to catch().
*/
async function consumePromiseFive(){

    try{

        const response = await promiseFive;

        console.log(response);

    }

    catch(error){

        console.log(error);

    }

}

consumePromiseFive();
/*
### Output (error = false)

{
  username:"javascript",
  password:"123"
}
/*

# 9. fetch() using async/await

// fetch() sends an HTTP request.
//
// fetch() returns a Promise.
//
// await waits until the server responds.
//
// response.json() also returns a Promise,
// therefore another await is required.

*/
async function getAllUsers(){

    try{

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

getAllUsers();


/*
# 10. fetch() using .then()

// fetch() can also be consumed using .then()
// instead of async/await.
//
// response.json() returns another Promise,
// so we return it and chain another .then().

*/

fetch("https://jsonplaceholder.typicode.com/users")

.then((response)=>{

    return response.json();

})

.then((data)=>{

    console.log(data);

})

.catch((error)=>{

    console.log(error);

})

/*


---

# Difference between .then() and async/await

| Promise (.then())                              | async/await                          |
| ---------------------------------------------- | ------------------------------------ |
| Uses `.then()` chaining                        | Uses `await`                         |
| Can become difficult with many `.then()` calls | Easier to read like synchronous code |
| Errors handled using `.catch()`                | Errors handled using `try...catch`   |
| Both work exactly the same under the hood      | Both use Promises internally         |

---




*/