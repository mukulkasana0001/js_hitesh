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