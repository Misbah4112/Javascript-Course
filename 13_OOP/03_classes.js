class User{
    constructor(username,email,password){
this.username = username
this.email = email
this.password = password
    }

    encryptPassword(){
        //this is a method and in classes we dont need to write function syntax
return `${this.password}abc`
    }

    changeName(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai","chai@gmail.com","123")
console.log(chai.encryptPassword())
console.log(chai.changeName())


//this could have also been done with our previous prototype method with functions


function User(username,email,password){
this.username = username
this.email = email
this.password = password}

User.prototype.encryptPassword= function(){
        
return `${this.password}abc`
    }

User.prototype.changeName = function(){
        return `${this.username.toUpperCase()}`
    }


const tea = new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword())
console.log(tea.changeName())