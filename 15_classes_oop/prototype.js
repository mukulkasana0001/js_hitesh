// let myName = "hitesh    "
// let mychanelname  = " chai     "
   
// console.log(myName.trim().length);
// console.log(myName.trueLength());           here we want to add by default method trueLength






let myhero = ["thor","spiderman"]      //array

let heropower ={                 //object
    thor: "hammer",
    spiderman: "sling",
    getspiderpower : function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}

Object.prototype.mukul = function(){               //BY OBJECT  YOU CAN TAKE ACCES OF ALL -> ARREY , FUNCTION , STRING;
    console.log(" mukul is present in all object")
}

Array.prototype.arrmukul = function(){         //BUT ARREY TAKE ACCESS ONLY FOR ARREY
    console.log(" arrmukul is  use in  arrey ")
}

heropower.mukul()

myhero.mukul()

myhero.arrmukul()         // BUT ARREY TAKE ACCESS ONLY FOR ARREY
// heropower.arrmukul()   //BY OBJECT  YOU CAN TAKE ACCES OF ALL -> ARREY , FUNCTION , STRING;

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
    __proto__: TeachingSupport         // here TASupport inherit the properties of TeachingSupport   (using - __proto__)
}

Teacher.__proto__ = User           // here Teacher inherit the properties of User     (using - __proto__)



// MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport,Teacher)         // here TeachingSupport inherit the properties of Teacher   (using - Object.setPrototypeOf() )  







let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(this)
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)


}
anotherUsername.trueLength()

"hitesh   ".trueLength()
