const User = {
    _email: "abc@gmail.com",
    _password = "123",

    get email(){
        return this._email
    },


    set email(value){
this._email = value
    }

}

//factory type function we'll be using just like we used new keyword whihc is a constructor function
const tea = Object.create(User)

console.log(tea.email);

//getters and setter are special methods that we are applying to properties so we dont need to acces email like this email() like a method
