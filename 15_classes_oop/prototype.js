// let myName = "hitesh    "
// let mychanelname  = " chai     "

// console.log(myName.trueLength);

let myhero = ["thor","spiderman"]

let heropower ={
    thor: "hammer",
    spiderman: "sling",
    getspiderpower : function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}

Object.prototype.mukul = function(){
    console.log(" mukul is present in all object")
}

Array.prototype.arrmukul = function(){
    console.log(" arrmukul is  use in  arrey ")
}

heropower.mukul()

myhero.mukul()

myhero.arrmukul()
// heropower.arrmukul()

// BY OBJECT  YOU CAN TAKE ACCES OF ALL -> ARREY , FUNCTION , STRING;
// BUT ARREY TAKE ACCESS ONLY FOR ARREY



// **INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(this)
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)


}
anotherUsername.trueLength()

"hitesh   ".trueLength()
