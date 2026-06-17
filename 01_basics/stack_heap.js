/*
Stack is a data structure that follows premitive datatype that copies the value and stores it in a new memory location, so when we change the value of one variable, it does not affect the other variable because they are stored in different memory locations.


Heap is a data structure that follows non premitive datatype that copies the reference of the value  so change of value is reflected in the original variable because they are both referencing the same value in memory.




*/

//  let my_name = "misbah"

//  let copy_name = my_name

//  copy_name = "sara"

//  console.log(my_name) //gives misbah 
//  console.log(copy_name) //gives sara since copy was made, change in copy_name is not reflected in my_name


 let usr1 = {
    email : "abc@gmail.com"
 }

 let usr2 = usr1
console.log(usr1.email)
 usr2.email = "xyz@gmail.com"
 console.log(usr1.email)

 // change in usr2's email is also reflected in original usr 1 which confirm that both point to same memory in heap



