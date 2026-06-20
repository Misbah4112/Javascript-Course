// //  //if statement

// //  if(true
// //     //condition should be true here then the block executes
// //     ){

// //  }


// //  if(2==2){

// //  }


// //operators for comparing are: >, < , <= , >=, == , != , === (also cecks datatype) ,  !== (checks negative sign too) , && (checks if there are many condition and ALL ARE TRUE)


// if(3!=2){
//     // this if condition will be true because 3 and 2 are not equal soblock will execute 
// }


// const isLoggin = true

// if(isLoggin){

// }


// const temperature  = 41

// if(temperature < 50){
//     console.log("Temp is less than 50");
    
// }
// console.log("Temperature greater than 50");//this will executefor sure


// if(temperature === 41){ //this is strict checking
//     console.log("Temp is less than 50");
    
// }
// console.log("Temperature greater than 50"); //this will execute for sure which is not good because either < 50 should execute or greater than 50 so we enclose this in else block

// if(temperature < 50){
//     console.log("Temp is less than 50");
    
// }
// else{console.log("Temperature greater than 50");//this will executefor sure
// }


const score = 200;

if(score> 100){
    const power = "fly"
    console.log(`User power is : ${power}`); //this runss gives user power: fly
    
}

console.log(`User power is : ${power}`);//this would give power is undefined and this is EXACTLY where the concept of scope we studied earlier comes from that scope of power is within the curly braces so it cannot be accessed outside which is A VALID error. if we changed typeof power from const to var, it WILL WORK AND WONT GIVE ERROR AND THAT IS EXACTLY WHY WE DONT USE VAR ANYMORE.



const balance = 1000


if(balance > 500)console.log("test"); //implicit scope. MUST END WITH SEMICOLON


//Nesting

if(balance < 500){ 
    console.log("less than 500");
    
}   else if( balance < 900){
    console.log("less than 900");

}   else{
    console.log("less than 1200");

}


//====================================
//real life usage

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){  //&& called "AND operator (checks if there are many condition and ALL ARE TRUE)
console.log("Allow to buy course");

}


const loggedInFromGoogle = true
const loggedInFromEmail = false

if(loggedInFromGoogle || loggedInFromEmail ){
    // ||  called "OR" checks if EVEN ONE of the condition is true
}

