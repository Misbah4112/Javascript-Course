const coding = ["js","ruby","java"]


const values = coding.forEach( (item) => {
    return item
} )

console.log(values); //gives undefined which means for each does not return values



const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter( (num) => {
num > 4
return num

})

console.log(newNum)


//simila work done with for each is a little different because of the storing issue


const newNum = []
myNum.forEach( (num) => {
if(num > 4){

    newNum.push(num)    
}
})

console.log(newNum)


//=======================================

// //filter can also be used to do a lot more

const books = [
{ title: "cinderella", genre: 'Fiction',publish: 1892},

{ title: "spiderman", genre: 'Fiction',publish: 1892},


{ title: "fault in our stars", genre: 'Non-Fiction',publish: 2000},

{ title: "beauty and the beast", genre: 'Non-Fiction',publish: 2000},


]

//this is the kind of data we get from database

// const userBooks = books.filter( (bk) => bk.genre === "Fiction")

// console.log(userBooks);


const userBooks = books.filter( (bk) => bk.publish >=2000 && bk.genre ==='Non-Fiction')

console.log(userBooks);







