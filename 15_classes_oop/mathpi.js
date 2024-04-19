 const discriptor = Object.getOwnPropertyDescriptor(Math,"PI")
 console.log(discriptor)


 // console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
 name : "ginger",
 price :"240",
 isavaliable : true,
 orderchai : function(){
    console.log("code fat gya")
 }
}
// console.log(chai)


console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))




// for (let [key,value] of chai) {
    
//     console.log(`${key} : ${value}`)
// }
// ***above  one - is not iterable so we use " Object.entries(object_name)" for iterate boject




    // for (let [key,value] of Object.entries(chai)) {
    //         console.log(`${key} : ${value}`)
    // }
//    *****  if we do not want to itrate function so we added an if condition like below one

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
   
}


// **** so if we add as  'enumerable: false'so it allows that it is not iterable 
//           as we see that above where name is not iterable because of  'enumerable: false'



