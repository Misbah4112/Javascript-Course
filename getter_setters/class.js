class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email}abs`
    }

    set email(value){
        this._email = value
    }


    get password(){
        return this._password
    }

    set password(value){
        this._password = value
    }

}


const misbah = new User("abc@gmail.com","123");
console.log(misbah.password)