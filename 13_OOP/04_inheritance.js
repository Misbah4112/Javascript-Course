class User{
    constructor(username){
        this.username = username

    }


    logMe(){
        console.log(`Username is: ${this.username}`)
    }
}




class Teacher extends User{
    constructor(username,email,password){
        super(username) // in the previous syntax for prototype, we had to pass thhis as a parameter toofor telling that it was inheriting username from user but here super internally handles this and injects this on its own in classes. we dont have to maually do it

        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`New course was added by: ${this.username}`)
    }


}


const chai = new Teacher("chai","chai@gmail.com","123")
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.addCourse()//could not work because User was parent and it cannot access properties of child 

masalaChai.logMe() //this would work

console.log(chai === masalaChai)//false because both were made by separate instances

console.log(chai === Teacher)//false same reason

console.log(chai instanceof User)//true
console.log(chai instanceof Teacher) //true

