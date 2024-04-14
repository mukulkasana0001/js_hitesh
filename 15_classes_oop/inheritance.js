

class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`user name is ${this.username}`)
    }
}

class teacher extends user {
    constructor(username,password,email){
       super(username)
    //    ** super()  TAKES THE DIRECT ACCESS OF USERNAME  FROM user CLASS 
        this.email = email
         this.password = password

    }
    addcourse(){
        console.log(`new course was added by ${this.username}`)
    }
}

const chai = new teacher('mukul',5432,"kasana@432")

    chai.addcourse()
    chai.logme()
    
  const masalachai = new user("hitesh")

//   masalachai.addcourse() 
// **there is no access of addcource to masalachai

//   console.log(chai ===masalachai)
//   console.log(chai ===teacher)
//   console.log(chai ===user)
//   console.log(user ===teacher)

// above all are false 
console.log( masalachai instanceof teacher )  //fasle
console.log(  chai instanceof teacher)  //true
console.log(  user  instanceof teacher) //false
console.log(  teacher instanceof user)//false
console.log(  masalachai instanceof user) //true
console.log(  chai instanceof user) //true



