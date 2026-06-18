/*
arrays: stores collection od multiple items under a single variable

=> normally in c/c++, there are homogeonous and only similar datatype values can be kept, different are not allowe but in javascript it's allowed

=> javascript arrays are resizeable but c/c++ are not(dynamic memory allocation is required for that)

let arr = [1,2,3]
arr.push(4)
console.log(arr)
Output:
[1,2,3,4]

Size changed automatically.
You can also shrink:
arr.pop()
Output:
[1,2,3]

*/

const myarr = [0 , 1 , 2 , 3 , 4 , 5, true , "misbah"]
console.log(myarr[0]); //output will be 0 since indexing is put in square brackets. in arrays its from 0 to n-1 where n is size of array


/*
JavaScript array copy operations usually create shallow copies.

Shallow Copy:
Creates a new array/object, but nested objects share the same references.
Changes to nested data may affect the original.

Deep Copy:
Creates completely independent copies.
No references are shared, so changes do not affect the original.

*/

const arr2 = new Array(1 , 2 , 3 , 4)
console.log(arr2[1]);
console.log(arr2)



// ==================== MTHODS OF ARRAY ===============

arr2.push(5)
console.log(arr2)
arr2.pop() //removes last value only
console.log(arr2)

arr2.unshift(9) //adds value in start, not very good because owuld shift all values forward
console.log(arr2)


arr2.shift() //removes value in start

console.log(arr2.includes(9)); // answers some questions in boolean format and similar methods could be used e.g indexOf etc

const newarr = arr2.join() //binds elements and changes type to string


//==================================================
const original_arr = [1, 2 , 3 , 4 , 5]
console.log("A",original_arr)

const n1 = original_arr.slice(1,3)
console.log(n1)
console.log("B",original_arr)

const n2 = original_arr.splice(1,3)
console.log(n2)
console.log("C",original_arr)

// This part of the code when you run it clearly shows the difference between slice and splice. slice does not affect the original array and also it only includes the starting index but the limit range is excluded. HOWEVER, IN SPLICE, the range limit is ALSO INCLUDED AND THIS IS NOT IT WHAT DIFFERTIATES BOTH. the real reasn is splice CHANGES THE ORIGINAL ARRAY, THE SPLICED PART IS REMOVED FROM ORIGINAL ARRAY

 //==================================================

 