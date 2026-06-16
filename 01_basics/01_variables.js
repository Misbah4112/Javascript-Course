/* git add .
git commit -m "updated project"
git push

==============================

Fundamentals of Javascript
 Firstly  we use node js, a software to execute javascript. Deno could also be used istead of nodejs but its more common.

 Second thing is we why we use .js instead of .txt for javascript? it's because .js allows our system to recognize some keywords like console is part of syntax of javascript which is recognized by .js extension but not .txt

 */

const acc_id = 12345  //cannot change it
let acc_email = "misbahpirzada@google.com"
var acc_pass = "12345"
acc_city = "Karachi"

 // below it will give error because we cannot change the value of acc_id as its a constant variable
//acc_id = 2
console.log(acc_id)
//========================================================================

// we can change the value of acc_email and acc_pass because they are declared with let and var respectively

acc_email = "misbah@gmail.com"
acc_pass = "54321"

console.log(acc_email)
console.table([acc_email, acc_pass,acc_city])

/*
Note that in modern javascript, var is less commonly used due to its function scope and hoisting behavior, which can lead to unexpected results. Instead, let and const are preferred for variable declarations. Let allows for block scope and can be reassigned. 

let creates a completely separate variable for each block, so changing one does not affect another variable with the same name outside.

*/


// if a client says make a variable acc_status but dont initialize it yet we can do it like this and on printing its value, we'll get undefined because we have not assigned any value to it yet.

let acc_status
console.log(acc_status) //undefined