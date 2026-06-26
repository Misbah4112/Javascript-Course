
/*
javascript's behaviour is prototypal behaviour. it keeps searching fr what u want in parent, grandparent until null is found. classes,this, new and prototypal behaviour is obtained by prototype


In js, everything ends up to being an object. e.g array is also derived from being an object and object is not derived from anything. it's null
array->object->null
string->object->null
function->object->null

and the properties object has is also found in string and arrays




*/


function multipleBy5(num){

return num * 5

}

multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)


function createUser(username,score){
    this.username = username
    this.score = score 

}


createUser.prototype.increment = function(){
    this.score++

    //we can also inject our own function because createUser is a function and an OBJECT TOO
}

createUser.prototype.printMe = function(){
    console.log(`Score is : ${this.score}`) //this tells CURRENT CONTEXT means WHO called
}

const chai = new createUser("chai",20)

const tea = createUser("tea",250)

//still code wont work and although these functions are now included in prototype, but code wont run UNTIL we inject new keyword


chai.printMe()


//this is how it works => new is used to call the constructor function creates an object and injects the prototype functions and then makes the new function on the basis of the function present(createUser)
