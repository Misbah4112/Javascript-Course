// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);
//noissue until above

//problem arise when curly braces (block) {} arises which means scope of something
 c = 300

if(true){
let a = 10
const b = 20
var c = 30
}

//now their scope is within this block


console.log(a); // a wont be accessible because not reachablle because of scope which is actually good
console.log(b); //same as a
console.log(c); //here is the issue, it will be accessibile outside the scope too 

//now lets consider an example where ultiple programmers are working on different functions and they use same name like c. one developer set c to 300 and another changed in some block to 30. now the update of first developer was lost. That is the reason why we avoid using var also if we wrote instead of var c= 30, we wrote c = 30(no datatype mentioned), still same issue would arise


// the block scope is the one inside curly braces(if part) and the part outside it is called global scope.Global scope values are ACCESSIBLE IN BLOCK SCOPE BUT NOT VICE VERSA.

let a = 300
if(true){
let a = 10
const b = 20
console.log(`a:${a}`) //inner value 10 will be printed
}


console.log(`a:${a}`) //outside only global scope value is pinted so 300


for (let i = 0; i < array.length; index++) {
    const element = array[i];
    
}

//similarly in loops when we use i, we dont want it to affect our global scope area soit stays in the inner block region and not accessible out of it



//windows scope:
//when we go to out browser, inspect andgo to console, the environment there is DIFFERENT from the coding environment run through node 


//--------------------------------------

//NESTED SCOPE

function one(){
    const username = "misbah"

    function two(){
        const website = "youtube"
        console.log(username); //inside functions can access outside functions variable but NOT VISE VERSA so ok. can print username console
        
    }

console.log(website); //gives error because it cannot access website. scope of twowas finished. you cannot access it

two() // executes gives Misbah

}

one() //if i comment out two and that issue of website cole. TWO WONT EXECUTE. WE CANNOT ASSUME IT WILL RUN BECAUSE ITS INSIDE OF ONE


//We can also more simply say child can access parent functions but not vice versa


//====================================
//similar can be done in if else too

if(true){
    const username = "misbah"

    if(username == "misbah"){
        const website = "youtube"
        console.log(username + website); //accessible child if can access parent if variable so gives misbah youtube
        
    }
    // console.log(website); //error of scope
    
}

// console.log(username); //errorof scope


//============= interesting=================


function addOne(num){
    return num+1

}

addOne(5) //value added but not printed

//===== functions can also be made like below, sometimes also called expression. variable can hold functions, JSON etc
const addTwo = function(num) {
    return num + 2
}

addTwo(5)



//=====================================
//same example but now we will be discussing when function is called BEFORE ITS MADE



console.log(addOne(5)) 

function addOne(num){
    return num+1
//THIS WORKS! gives value 6
}


addTwo(5)
const addTwo = function(num) {
    return num + 2
//this wont work because in this, we are holding the function in the variable. this is where the concept of hoisting comes from.
}



/*

========================= CONCEPT OF HOISTING ======================
Hoisting means:

Before executing code, JavaScript scans declarations and makes them available earlier than where they appear.

It feels like declarations move to the top (they don’t literally move).

Example:

console.log(a)

var a = 10

Output:

undefined

People expect error.

What JS behaves like internally:

var a

console.log(a)

a = 10

So:

declaration ↑
assignment stays ↓

With let:

console.log(a)

let a = 10

Output:

ReferenceError

Because let is hoisted but not initialized.

Think:

var → hoisted + initialized as undefined

let → hoisted but inaccessible

const → hoisted but inaccessible

Functions behave differently.

Function declaration:

hello()

function hello(){
 console.log("Hi")
}

Output:

Hi

Because function is fully hoisted.

Internally:

function hello already exists
↓
call works

Function expression:

hello()

const hello = function(){
 console.log("Hi")
}

Output:

ReferenceError

Because:

hello exists
BUT value not assigned yet

Easy memory trick:

Hoisting =
JavaScript prepares declarations before execution.
*/