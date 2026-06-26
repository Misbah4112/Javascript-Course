class User{
    constructor(username){
        this.username = username

    }

logMe(){
    console.log(`Username:${this.username}`)

}

//when user is made, attach id with it functionality
static createId(){
    return `123`
}


}


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}



const misbah = new User("misbah")
console.log(misbah.createId()) //wont work because of static  keyword in createid to prevent objects instantiated from this class from using this functionality. also 

const teacher = new Teacher("teacher")
teacher.logMe()//works
console.log(teacher.createId())//wont work because extending objects can also not access it because of static