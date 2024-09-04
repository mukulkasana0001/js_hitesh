function setusername(username){
    this.username = username;
    console.log("called")
}
 
function creatuser(username,password,email){
    setusername.call(this ,username)   //CALL-> IT HOLDS THE REFERENCE OF THE FUNCTION ''  this -> we pass this as a first parameter with call() ( setusername() use the this of  creatuser() ) so when a setusername() is 'removed from stack ' it pass its CURRENT EXICUTION CONTEST to the  creatuser() 's  this
// CALL-> IT HOLDS THE REFERENCE OF THE FUNCTION 
// AND HERE this PASS THE CURRENT EXICUTION CONTEST TO THE function  

    this.password =password
    this.email =email

}
let  data =  new creatuser('mukul',5421,"kasana@5432")
console.log(data)








// ****  Cheat GPT  explain ***** (call() and apply())


// call() and apply() are both methods in JavaScript that allow you to invoke a function with a specific this context. They are useful when you want to control the value of this inside a function, especially when you're working with objects or need to borrow methods from other objects.

// call() Method
// Syntax: functionName.call(thisArg, arg1, arg2, ...)
// Purpose: call() invokes a function and allows you to pass in the this value explicitly, followed by any number of arguments.
// Example:
// javascript
// Copy code


// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
// }

// const person = { name: 'Mukul' };

// greet.call(person, 'Hello', '!'); // "Hello, Mukul!"



// In this example, greet is a function that uses this.name. By using call(), you set this to refer to the person object. The arguments 'Hello' and '!' are passed after thisArg.
// apply() Method
// Syntax: functionName.apply(thisArg, [argArray])
// Purpose: apply() is similar to call(), but instead of passing arguments individually, you pass them as an array.
// Example:
// javascript
// Copy code



// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
// }

// const person = { name: 'Mukul' };

// greet.apply(person, ['Hello', '!']); // "Hello, Mukul!"


// In this example, greet is called with this set to the person object, just like with call(), but the arguments are passed as an array.
// Key Differences Between call() and apply()

// Arguments Passing:

// call(): You pass arguments individually.
// apply(): You pass arguments as an array.

// Use Cases:

// Use call() when you know the number of arguments and want to pass them one by one.
// Use apply() when you have an array of arguments and want to pass them all at once.

// Practical Example of Both:
// Imagine you have an array of numbers and want to find the maximum value. You can use Math.max() with apply():

// javascript
// Copy code


// let numbers = [1, 2, 3, 4, 5];

// // Using apply to pass the array of numbers as arguments
// let max = Math.max.apply(null, numbers);
// console.log(max); // 5



// In this example:

// Math.max() expects individual numbers, but apply() allows you to pass an array.
// The thisArg (null here) is not needed because Math.max doesn't rely on this.
// Summary:
// call() and apply() are used to invoke functions with a specified this context.
// call() is for passing arguments one by one, while apply() is for passing arguments as an array.
// Both are powerful tools for function reuse and controlling execution context.