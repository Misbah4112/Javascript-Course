//  below are the boolean comparisons
// console.log(3 > 2) //true
// console.log(3 < 2) //false
// console.log(3 >= 2) //true
// console.log(3 <= 2) //false
// console.log(3 == 2) //false
// console.log(3 != 2) //true

// problem arises when different datatypes are compared
console.log("2" >1) //true because string "2" is converted to number 2 and then compared with 1
console.log(null > 0)
console.log(null == 0) 
console.log(null >= 0) 

//the equality operator (==) works differently from other comparison operators. == does not convert null or undefined to a number, so null == 0 is false. However, the greater than or equal to operator (>=) does convert null to a number, so null >= 0 is true. This can lead to unexpected results if you're not careful when comparing values of different types. It's generally recommended to use the strict equality operator (===) instead of the loose equality operator (==) to avoid these issues.


console.log("2" === 2) //false because strict equality operator also checks for datatype and here string is not equal to number)




