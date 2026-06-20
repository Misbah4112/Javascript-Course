const userEmail = "misbah@email.com"

if(userEmail){
    console.log("got email");

} else{
    console.log("did not get user email");
    
}
// above would output got email. when we do not provide comparison, it automatically assums the provided string is true


const userEmail = ""

if(userEmail){
    console.log("got email");

} else{
    console.log("did not get user email");
    
}

//else runs, automatically assums empty string is false


const userEmail = []

if(userEmail){
    console.log("got email");

} else{
    console.log("did not get user email");
    
}



//runs if block, assumes true



//================== NOW THE RULES OF HOW THIS IS HAPPENING. IT'S CALLED TRUTHY AND FALSY VALUES =====================

/*
falsy values: 

false
0
-0
bigint 0n
""
null
undefined
NaN (not a number)


except for all these ARE CONSIDERED TRUE VALUES


Some truthy values:
 
"0"
'false'
" " since space added
{}
function(){} empty function
[]

*/

const userEmail = []

if(userEmail.length === 0){
    console.log("Array is empty");
    
}
//runs array is empty

const emptyObj = {}


if(Object.keys(emptyObj.length === 0)){
    //returns array of keys of emptyobj
    console.log("Object is empty");
    
}

//true cases
/*
false == 0
false == ''
 0 ==''

 all return true

*/


//=====================================
//NULLISH COALESCING OPERATOR( ?? )
//it deals with ONLY null and undefined 


let val1;
val1 = 5 ?? 10

console.log(`${val1}`); //assigns 5

//====================================

val1 = null ?? 10

console.log(`${val1}`); //assigns 10
//===============================


val1 = undefined ?? 10

console.log(`${val1}`); //assigns 10


// Nullish Coalescing Operator (??)
//
// Returns the right value only if the left value is
// null or undefined.
//
// Commonly useful when data from APIs/databases may be
// missing (null/undefined) and we want a default value
// to prevent errors or unexpected behavior.


val1 = null ?? 10 ?? 20 //assigns first value it gets so it willbe 10



//======================================

//TERNARY OPERATOR 

// syntax: 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80"):console.log("greater than 80");
;

