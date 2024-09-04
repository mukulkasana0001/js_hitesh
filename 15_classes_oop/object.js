//  IN THIS PROGRAM  FUNCTION ACT AS AN OBJECT 
// IN THIS CODE WE TRE TO UNDERSTAND THE IMPORTANCE OF NEW KEYWORD IN FUNCTION-OBJECT 
 
 function multiplyby5(num){
    return num*5;

 }

 multiplyby5(5) ;
//  multiplyby5.power = 2
 console.log(multiplyby5(5))
 console.log( multiplyby5.power)
 console.log( multiplyby5.prototype)



 function creatuser(username,score) {
    this.username=username
    this.score = score
 }

 creatuser.prototype.increment = function(){         //here we add new properties (increment) in creatuser  
    this.score++
 } 
 creatuser.prototype.printme= function(){            //here we add new properties (printme) in creatuser 
    console.log(`score is : ${this.score}`)       
 }                                                    // now new properties is added in creatuser
                                                    
 const chai = new creatuser('chai',40)                  // here we transfer values from creatuser to chai ,
                                                      //  but we can't tell to the chai the new properties is added in creatuser,
                                                      // so for tell to the chai that new properties is added  we use "new"  keyword.
//  const tea = creatuser('tea',50)
 console.log(chai)
//  console.log(tea)

// ***WE NEED TO ADD NEW KEYWORD

 chai.printme()


 /*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/