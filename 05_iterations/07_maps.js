const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.map( (num) => num + 10) //implicit arrow function. if u use scope(curly braces) then make sure to return it


const newNum = myNum.map( (num) => { return num + 10})

//works just like filters, directly saves into a variable

const newNum = myNum
.map ((num) => num * 10)
.map((num)=> num + 1)
 //the second map uses the result of the first map that the multiplied with 10 result is used to add 1



 const newNum = myNum
.map ((num) => num * 10)
.map((num)=> num + 1)
.filter( (num) => num >=40 )
//the second map uses the result of the first map that the multiplied with 10 result is used to add 1 and then the result of 2 maps is used to filter >=40 

console.log(newNum);

//in map we are either returning values or performing some operation on them but in filter, we do some comparison and it return answer based on true or false





