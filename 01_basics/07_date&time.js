//dates

let myDate = new Date() //date is object in javascript
console.log(myDate); //this is not much readable so we convert it for improved readability

console.log(myDate.toString());

console.log(myDate.toISOString);
console.log(myDate.toDateString);
console.log(myDate.toLocaleString);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
//gives the date we made and note that date is 23rd JAN which means months start from 0-11 in javascript ONLY IN THIS SYNTAX


let myCreatedDate = new Date("2023-01-14")
//syntax  of yy-mm-dd followed here month starts from 1 and not 0 this time

let myCreatedDate = new Date("01-14-2023")
//syntax of dd-mm-yy

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());
// adds time along with date,month,year




//============TIMESTAMPS===============
//timestamps are used when designing quizzes and the coding competitions for ranking who executed faster

let timestamp = Date.now() //give time in milliseconds from an arbitary date of 1st jan 1970
console.log(timestamp)
console.log(myCreatedDate.getTime()) //gives same res as timestamp

console.log(Date.now()/1000) //gives seconds of date but with decimal values which are not required so we do math.floor for it

console.log(Math.floor(Date.now()/1000))



let newDate = new Date()
console.log(newDate.getDate()) //and many more methods for day,month etc


console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday:"long"
})

//if we want to add more features of how we want the date to appear then we can use the above format, e.g before month was showed like jan not long give full month. here weekday is to be shown long format e.g Thursday

