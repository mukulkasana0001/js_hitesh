const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  //not give negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4) //it can take negative value
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // (change  '%20' to  '-' )

console.log(url.includes('sundar'))  //false

console.log(gameName.split('-'));
//  output is ,
//   'hitesh-hc-com' -->  [ 'hitesh', 'hc', 'com' ]