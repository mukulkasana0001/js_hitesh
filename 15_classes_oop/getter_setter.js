class user {
    constructor(email,password){
       this.email = email
       this.password = password 
    }
    get email(){
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