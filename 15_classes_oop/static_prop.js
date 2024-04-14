class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(` username: ${this.username} is loged in`)
    }

    // ststic STOP TO GIVE ACCESS TO OTHER 
     static createdid(){
        console.log("4321")
    }
}
const mukul = new user("mukul")
// mukul.createdid()
// after use static " mukul.createdid() " not work (not give access)



class teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email
    //   we only use super() before this 
    }
}

const iphone = new teacher("iphone","iphone@4321")
iphone.logme()
iphone.createdid()