
// while(condition){

// }

// e.g
// there is one basic format of loops
// initialize
// then check condition
// and then increment or decrement
// in while loop, we are just checking condition unlike loops where all of the rules are done together so below is the format of doing it :

let index = 0
while( index <= 10){
    console.log(`Value of index is : ${index}`);
    index = index + 2

}




let my_arr = ["flash","batman"]

let count = 0;

while(count < my_arr.length){
    console.log(`Value is: ${my_arr[count]}`);
    count = count + 1
    
}

//=================do while loop
//do while loop says first work will be done then condition is checked. which means even if conditions is not true, AT LEAST ONCE the loops runs

let score = 1

do{
    console.log(`Score is ${score}`);
    
    score++;

}while(score <= 10)

    //output from 1 to 10


    let score = 11

do{
    console.log(`Score is ${score}`);
    
    score++;

}while(score <= 10)

    //score value 11 prints once then condition checks and stops

    