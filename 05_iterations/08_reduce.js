
// const myNum = [1,2,3]

// const my_total = myNum.reduce( function (acc,curr_val) {
//     console.log(`accumulator: ${acc}, Current value: ${curr_val}`);
    
//     return acc + curr_val 

// },0)

// console.log(my_total);




// //==========================================
// const my_total = myNum.reduce( function (acc,curr_val) {
//     console.log(`accumulator: ${acc}, Current value: ${curr_val}`);
    
//     return acc + curr_val 

// },3)

// //===============================================
// //using arrow function


// const my_total = myNum.reduce( (acc,curr) => (acc+curr),0)

//  /*

//  `.reduce()` is used when you want to:

// > **take multiple values and reduce them into one final value.**

// Think:

// ```text id="9op8os"
// many values
// ↓
// one result
// ```

// Common uses:

// * sum
// * product
// * count
// * build objects
// * group data

// Example 1 — Sum

// Without reduce:

// ```javascript id="j2yjlwm"
// const arr = [1,2,3,4]

// let sum = 0

// for(let i=0;i<arr.length;i++){
//    sum += arr[i]
// }

// console.log(sum)
// ```

// Output:

// ```text id="h3yffv"
// 10
// ```

// With reduce:

// ```javascript id="m5hh5a"
// const arr = [1,2,3,4]

// const sum = arr.reduce(
//    (acc,curr)=> acc+curr,
//    0
// )

// console.log(sum)
// ```

// Output:

// ```text id="ml55dd"
// 10
// ```

// ---

// Meaning:

// ```javascript id="0vjlwm"
// (acc,curr)
// ```

// `acc` → accumulator (stores running result)

// `curr` → current element

// Visual:

// ```text id="mbdzk1"
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// ```

// Final:

// ```text id="0iyr8o"
// 10
// ```

// ---

// Example 2 — Multiply

// ```javascript id="y3m2qt"
// [1,2,3,4].reduce(
//  (acc,curr)=>acc*curr,
//  1
// )
// ```

// Result:

// ```text id="6tijxf"
// 24
// ```

// ---

// Easy memory:

// ```text id="qku9m2"
// map → transform each element

// filter → keep some elements

// reduce → combine everything into one value
// ```



//  */


const shoppingCart = [

{
    courseName: "java",
    price:2999
},

{
    courseName: "python",
    price:3999
},

{
    courseName: "mobile Dev course",
    price:4999
},


]


const total = shoppingCart.reduce( (acc,item) => (acc + item.price),0)

console.log(total);
