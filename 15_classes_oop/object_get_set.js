const user ={
  _email:'mukul@4151',
  _password : '5263738'  ,


  get email(){
  return this._email.toUpperCase()
  },

  set email(value){
this._email = value 
  }
}

const tea = Object.create(user)
console.log(tea.email)