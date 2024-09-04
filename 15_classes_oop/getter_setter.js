// files--> getter_setter.js , properties_get_set.js , object_get_set.js  ,  boths work same only  syntex is different  


class user {
    constructor(email,password){
       this.email = email
       this.password = password 
    }
    get email(){    //getters and setters are special methods that allow  you to define how properties on an object are accessed and updated. 
                    //getters and setters  only applicable for objest properties
        // return this._password.toUpperCase()
        return `${this._email}changed`
    }
    set email(value){
        this._email = value
    }
 

    
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}changed`
    }
    set password(value){
        this._password = value
    }
}

const mukul = new user('mukul@gmail.com','kasana@1234')
console.log(mukul.password) 
console.log(mukul.email)







// ***** explain by Cheat  GPT ****

// In JavaScript, getters and setters are special methods that allow 
// you to define how properties on an object are accessed and updated. 
// They provide a way to control the access and assignment of object properties,
//  offering more flexibility and logic beyond direct property access.

// Getters

// Getter methods are used to access (or "get") the value of a property.
// A getter method is executed when a property is accessed.

// Syntax for Getter:
// javascript
// Copy code


// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
  
//   // Getter method
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// console.log(person.fullName); // Output: John Doe


// In the above example, fullName is a getter. When person.fullName is accessed, it calls the get fullName() method and returns the full name.

// Setters

// Setter methods are used to change (or "set") the value of a property.
// A setter method is executed when a property is assigned a value.

// Syntax for Setter:
// javascript
// Copy code


// const person = {
//   firstName: 'John',
//   lastName: 'Doe',

//   // Setter method
//   set fullName(name) {
//     const parts = name.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// // Setting a new full name
// person.fullName = 'Jane Smith';

// console.log(person.firstName); // Output: Jane
// console.log(person.lastName);  // Output: Smith


// In this example, when person.fullName is set to 'Jane Smith', the setter method is triggered, updating the firstName and lastName properties accordingly.

// Key Points:

// Getters are used to retrieve values.
// Setters are used to set or modify values.
// Getters and setters allow you to add custom logic when properties are accessed or changed.
// They are defined using the keywords get and set.
// They are especially useful when you want to control access to properties, 
// perform validation, or add side effects when properties are updated or accessed.