// //for loop

// let arr = []

// for(let k = 0 ; k <= 10 ; k++){
//     arr[k] = k;

//     const element = arr[k]
//     if(eleent == 5){
//         console.log("5 is best number");
        
//     }
//     console.log(element);

// }

// console.log(element); //undefined. not accesible out of the scope

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop : ${i}`);
    
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner loop : ${j}, outer loop : ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`); //prints all tables from 0 to 10
        
// }    
// }



//====================================================




//arraya and loops

// let my_array = ["krish","flash","spiderman"]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



//break and continue





// for (let index = 1; index <=20; index++) {

//     if(index == 5){
//         console.log("5 detected");
//         break; //loop stops, directly out of loop curly brackets
//     }
// console.log(`value of index is: ${index}`);
    
// }


//======== continue ===========

for (let index = 1; index <=20; index++) {

    if(index == 5){
        console.log("5 detected");
        continue; //continue forgive 1 time and DOES NOT PRINT 5 BUT DETECTS IT AND DOES NOT COMPLETLY GO OUT OF LOOP
    }
console.log(`value of index is: ${index}`);
    
}




