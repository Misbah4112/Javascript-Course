// /*
// functions simply means enclosing your code in a package to make it reusable



// */


// function say_my_name() {
//     console.log("M");
//     console.log("I");
//     console.log("S");
//     console.log("B");
//     console.log("A");  
// }

// say_my_name() //EXECUTION
// // say_my_name //this just gives reference but does not perform execution. gives no output


// function addTwoNumbers(n1,n2){ //parameters passed
//     console.log( n1+n2);  

// }


// addTwoNumbers(3,"3") //give 33     === passed values are called arguments
// addTwoNumbers(3,3) //gives 6
// addTwoNumbers(3,"a") //gives 3a
// addTwoNumbers(3,null)

// const result = addTwoNumbers(2,2)
// console.log(result); //this gives undefined because no return type in above function

// //==============================

// function add(n1,n2){ //parameters passed
//     let result =  n1+n2  
// return result
// console.log("misbah"); //wont execute after returning
// }

// const result = add(2,2)
// console.log(`The result is: ${result}`);


// //===========================
// //more convenient way to write code which is shorter
// function add(n1,n2){ //parameters passed
//    return n1+n2
// }

// const result = add(2,2)
// console.log(`The result is: ${result}`);

//=======================================

// function loginUserMessage(username){
//     return `${username} just logged in`

// }

// loginUserMessage("Misbah"); //wont print because it's not store anywhere or printed

// console.log(loginUserMessage("Misbah")); //results Misbah just logged in
// console.log(loginUserMessage()); //this results not null but undefined

//========================================

function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username");
    return
    }
    return `${username} just logged in`

}

console.log(loginUserMessage("Misbah")); //results Misbah just logged in
console.log(loginUserMessage()); //outputs please enter a username and then since nothing was returned js automatically returns undefined 

//=====================================
/*
if we write an if block like:

if(!username)
 this checks all the cases like username NOT EXISTS e.gif one of these is true:
loginUserMessage()
loginUserMessage(undefined)
loginUserMessage(null)
loginUserMessage("")
loginUserMessage(0)
loginUserMessage(false)

above would enter the this if block but below wont:

loginUserMessage("Misbah")
loginUserMessage(10)
loginUserMessage([])
loginUserMessage({})

*/


function loginUserMessage(username = "sam") //this is passing default value. if no value is passed then sam value would be assigned. this means the if block would never run and if user provides input then this sam value is overwritten 
{ 
    if(username == undefined){
        console.log("Please enter a username");
    return
    }
    return `${username} just logged in`

}
