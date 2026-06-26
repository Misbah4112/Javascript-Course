function setUsername(username){

console.log("called")
    this.username = username}



    function createUser(username,email,password){
        //setUsername(username)//although we call funxtion her but IT IS CALLED, but then REMOVED from the call stack due to which it's outer function createUser can no more access it. also prints called .
//setUsername.call(username)//so we explicitly have to write call to hold reference but still when we printobject, we dont get username. problem still remains/ prints called
  
setUsername.call(this, username)// now when we add this here as parameter will now print username too because this of setusername was disappearing after it goes from the stack but the setusername this passed here remains after setusername goes from stack too
this.email= email
this.password = password

}


const chai = new createUser("misbah","misbah@gmail.com","123")
console.log(chai)

