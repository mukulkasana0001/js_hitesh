// writable: true,
// enumerable: true,      // because of these 3
// configurable: true
 
 
 
 
 
 const discriptor = Object.getOwnPropertyDescriptor(Math,"PI")
 console.log(discriptor)


 // console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
 name : "ginger",
 price :"240",
 isavaliable : true,
 orderchai : function(){
    console.log("code fat gya")
 }
}
// console.log(chai)


console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))




// for (let [key,value] of chai) {
    
//     console.log(`${key} : ${value}`)
// }
// ***above  one - is not iterable so we use " Object.entries(object_name)" for iterate boject




    // for (let [key,value] of Object.entries(chai)) {
    //         console.log(`${key} : ${value}`)
    // }
//    *****  if we do not want to itrate function so we added an if condition like below one

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
   
}


// **** so if we add as  'enumerable: false'so it allows that it is not iterable 
//           as we see that above where name is not iterable because of  'enumerable: false'









// ***** explain by Cheat  GPT ****


// In JavaScript, the Object.getOwnPropertyDescriptor() method returns a property descriptor 
// for a specific property of a given object. A property descriptor is an object that describes the
//  configuration of a property within the object, including characteristics like whether the property 
//  is writable, enumerable, or configurable.


// Syntax
// javascript
// Copy code


// Object.getOwnPropertyDescriptor(obj, prop);
//  //obj: The object for which the property descriptor is to be retrieved.
//  //prop: The name (string) or Symbol of the property whose descriptor is to be retrieved.
// Example
// javascript
// Copy code
// const obj = {
//   name: "Mukul",
//   age: 21,
// };

// const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
// console.log(descriptor);


// Output
// javascript
// Copy code


// {
//   value: "Mukul",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// Explanation

// value: The current value of the property.
// writable: If true, the value of the property can be changed.
// enumerable: If true, the property will show up during enumeration of the object's properties (like in a for...in loop).
// configurable: If true, the property descriptor can be changed, and the property can be deleted from the object.
// This method is useful when you need to inspect or modify the characteristics of an object’s properties.






// You said:
//  please explain me  configurable in better way or easy way
// ChatGPT said:
// ChatGPT

// Sure! The configurable attribute of a property in JavaScript determines whether you can change the property's descriptor or delete the property from the object.

// Simple Explanation

// If configurable is true:

// You can change the property’s descriptor (like making it non-enumerable or read-only).
// You can delete the property from the object.

// If configurable is false:

// You cannot change the property’s descriptor.
// You cannot delete the property from the object.

// Example
// javascript
// Copy code


// const obj = { name: "Mukul" };

// // By default, properties are configurable
// Object.defineProperty(obj, 'name', {
//   configurable: false
// });

// // Trying to delete the property
// delete obj.name; // This will not delete the property because it's not configurable

// console.log(obj.name); // Outputs: "Mukul"

// // Trying to redefine the property
// Object.defineProperty(obj, 'name', {
//   enumerable: false
// }); // This will throw an error because the property is not configurable


// Key Takeaway
// If a property is not configurable (configurable: false), it becomes "locked in" 
// with its current settings, and you can’t delete it or change its settings anymore.
