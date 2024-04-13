// ES6
class user{
constructor(username,password,email){
   this.username= username
   this.password = password
   this.email =email
}

encruptpassword() {
    // console.log(`${this.password}abcd`)
    return `${this.password}abcd`;

}
toupper(){
    // console.log(`${this.username.toUpperCase()}`)
    return `${this.username.toUpperCase()}`;
}

}
const data = new user('mukul',5432,'kasana@845')
console.log(data)
console.log(data.encruptpassword())
console.log(data.toupper())



// // behind the scene

// function user(username,password,email)
//     {
//        this.username= username
//        this.password = password
//        this.email =email
//     }
//     user.prototype.encruptpassword = function() {
//         // console.log(`${this.password}abcd`)
//         return `${this.password}abcd`;
    
//     }

//     user.prototype.toupper= function(){
//         // console.log(`${this.username.toUpperCase()}`)
//         return `${this.username.toUpperCase()}`;
//     }
//     const   data= new user('mukul',5432,'kasana@845')
// console.log(data)
// console.log(data.encruptpassword())
// console.log(data.toupper())