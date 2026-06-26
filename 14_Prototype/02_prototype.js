// let myName = "misbah      "

// console.log(`Name length: ${myName.trim().length}`)


let myHeros = ["thor", "superman"]

let heroPower = {
    thor: "hammer",
    superman: "sling",

    getSuperPower: function(){
        console.log(`Spidy power is ${this.superman}`)
    }


}


Object.prototype.misbah = function (){
    console.log("misbah is present in all objects")

}

heroPower.misbah()

myHeros.misbah()
//what we have done here is accessedobject and added this function to a function and array too

Array.prototype.heymisbah = function(){
    console.log("MIsbah says hello");
} //injecting function in array so now object heroPower should not work with this function 

myHeros.heymisbah()

// heroPower.heymisbah()

/*

.prototype only exists on functions (constructors/classes)
Instances (like arrays/objects) don’t have .prototype
Use:
Array.prototype → for arrays
Object.prototype → for all objects (dangerous)
*/



//inheritance
const user = {
    name: "MIsbah",
    email:"abc@gmail.com"
}
const Teacher = {
    makeVideo:true
}

const teachingAssistant = {
    isAvailable: false

}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__:teachingAssistant

}
Teacher.__proto__ = user
//proto basically allows accessing properties of something else(Outdated syntax)

//every object is separate instance which means they dont share anything


//modern syntax:
Object.setPrototypeOf(TASupport,Teacher) //TA accesses properties of teacher



let myName = "misbah      "

String.prototype.trueLength = function(){
    console.log(`${this}`) //gives misbah because myName was the reference
    console.log(`${this.name}`)
    console.log(`true length is: ${this.trim().length}`)
}
myName.trueLength()

// "sara".trueLength()

