// const user = {
//     username : 'mukul',
//     logincount : 8,
//     signedIn : true,

//    getuserdetails : function(){
//     console.log("got user details ")
//     console.log(`Username: ${this.username}`);
//     console.log(this)
//    }
// }
// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this)

// **AVOVE IS FOR Object literal 


function user(username,logincount,islogedin){
    this.username = username
    this.logincount = logincount
    this.islogedin = islogedin
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    // return this;

    // it return this by default 
}

const userOne = new user("hitesh", 12, true)
const userTwo = new user("ChaiAurCode", 11, false)
console.log(userOne)
console.log(userTwo.constructor)


// ****new 
// 1. it creat empty object  (instance)
// 2. constractor function call  because of new keyword
// 3.argument is injected in object by this keyword