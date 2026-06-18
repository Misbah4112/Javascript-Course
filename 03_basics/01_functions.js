/*
functions simply means enclosing your code in a package to make it reusable



*/


function say_my_name() {
    console.log("M");
    console.log("I");
    console.log("S");
    console.log("B");
    console.log("A");  
}

say_my_name() //EXECUTION
// say_my_name //this just gives reference but does not perform execution. gives no output


function addTwoNumbers(n1,n2){ //parameters passed
    console.log( n1+n2);  

}


addTwoNumbers(3,"3") //give 33     === passed values are called arguments
addTwoNumbers(3,3) //gives 6
addTwoNumbers(3,"a") //gives 3a
addTwoNumbers(3,null)

const result = addTwoNumbers(2,2)
console.log(result); //this gives undefined because no return type in above function

//==============================

function add(n1,n2){ //parameters passed
    let result =  n1+n2  
return result
console.log("misbah"); //wont execute after returning
}

const result = add(2,2)
console.log(`The result is: ${result}`);


//===========================
//more convenient way to write code which is shorter
function add(n1,n2){ //parameters passed
   return n1+n2
}

const result = add(2,2)
console.log(`The result is: ${result}`);

// =======================================

function loginUserMessage(username){
    return `${username} just logged in`

}

loginUserMessage("Misbah"); //wont print because it's not store anywhere or printed

console.log(loginUserMessage("Misbah")); //results Misbah just logged in
console.log(loginUserMessage()); //this results not null but undefined

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

// Now we'll discuss the shopping cart situation where the visitor on web page may keep adding product in cart and we need to keep summing it and we might not know how many more products are to come

function calculatePrice(...num1){//this is rest operator which means all the incoming numbers, wrap them in one array and return it

    return num1
}

console.log(calculatePrice(200,400,500))

// one question often asked in interview is about the below syntax, what would be in num1 now:
function calculatePrice(val1,val2,...num1){//this is rest operator which means all the incoming numbers, wrap them in one array and return it

    return num1
}

console.log(calculatePrice(200,400,500,2000))

// val1 stores 200,val2 store 400 and now 500 and 2000 WILL ONLY BE STORED IN NUM1
 

// USAGE OF OBJECTS IN FUNCTIONS

const user = {
    username: "Misbah",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

handleObject(user) //pass object as argument so that its values can be accessed


// object can also be passed withoutname like below:
handleObject({
username:"Misbah",
price:199

})



//USAGE OF ARRAYS IN FUNCTIONS

const my_new_arr = [ 100 , 200 , 300 ] 

function returnSecondValue(my_arr){
    return my_arr[1]
}

// console.log(returnSecondValue(my_new_arr));
//direct array could also be passed like below:
console.log(returnSecondValue([100,400,600]));



