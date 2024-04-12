 const promiseone = new Promise( function (resolve,reject){
    // use for do async task
    // DB calls , networking, cryptography
    setTimeout( function (){
     console.log("async task is done")
     resolve()
     },1000)
  })

 promiseone.then( function() {
    console.log("promise is consumed")
 })



//   *** HERE WE DONT NEED TO TAKE ANY CONSTANT OR VARIABLE WE DIRECTLY CONNECT PROMISE TO THEN FUNCTON

 new Promise( function (resolve,reject){

    setTimeout( function (){
     console.log("async task  2 is done")
     resolve()
     
    },1000)
  }).then( function() {
    console.log("promise 2 is resolved")
 })



 const promisethree = new Promise(function(resolve,reject){
 setTimeout(function(){
    resolve({name:'mukulkasana',email:'kasana@1234gmail.com'})
    // resolve([1,2,3,4,5])
    // **** WE CAN PASS ARREY OR OBJECT ETC . IN RESOLVE ; 
 },1000)
 })

 promisethree.then(function(user){
    console.log(user)
 })




//  const promisFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     //    let err = false;
//           let err = true;
//        if(err){
//         resolve({name:'mukulkasana', password:'1234'})
//        }
//        else{
//         reject('ERROR: someting went wrong')
//        }
//     },1000)
//     })
   
//     promisFour.then(function(user){
//        console.log(user)
//        return user.name;
//     }).then(function(userN){
//         console.log(userN)
//     }).catch(function(err){
//         console.log(err)
//     })



// ****ADD FILNALLY IN PROMISEFOUR

const promisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    //    let err = false;
          let err = true;
       if(err){
        resolve({name:'mukulkasana', password:'1234'})
       }
       else{
        reject('ERROR: someting went wrong')
       }
    },1000)
    })
   
    promisFour.then(function(user){
       console.log(user)
       return user.name;
    }).then(function(userN){
        console.log(userN)
    }).catch(function(err){
        console.log(err)
    }).finally(function (){
        console.log("Promise is either resolver or rejected finally is always run")
    })





    // ***USING ASYNC AWAIT FUNCTION
    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false
            if (error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });
    
    // async function consumePromiseFive(){
    //          const responce = await  promiseFive
    //          console.log(responce)
    //     }

    // ****IN ASYNC AWAIT FUNCTION WE CAN'T HANDELE ERRORS DIRECTLY 

    // ***** SO WE USE try OR catch  FUNCTION WITH ASYNC FUNCTION TO HANDEL THE ERROR DIRECTLY
    
    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
    consumePromiseFive()
    




    // async function getalluser(){
    //     try{
    //          const responce =    await  fetch('https://jsonplaceholder.typicode.com/users')
    //           const data = await responce.json()
    //           console.log(data)
    //     }
    //     catch(error){
    //         console.log("E:" ,error)
    //     }
    // }

    // getalluser()



    fetch('https://jsonplaceholder.typicode.com/users').then(function(responce){
              return responce.json()
    }).then(function(data){
        console.log(data)
    }).catch(function(err){
        console.log(err)  
      })

     