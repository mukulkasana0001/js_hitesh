// array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   // it bind and convert into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    //it cannot change the orignal array  ,it count (n - 1)th element

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)    //splice update te orignal array and remove the spliced element ,it also count the nth elenemt 
console.log("C ", myArr);
console.log(myn2);


// OUTPUT...

//  A  [ 0, 1, 2, 3, 4, 5 ]
//  [ 1, 2 ]
//  B  [ 0, 1, 2, 3, 4, 5 ]
//  C  [ 0, 4, 5 ]
//  [ 1, 2, 3 ]