const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //push update the exciting array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //concat return the new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]     //(take a water glass and sprite the water) just a example for learn

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
                                                              //  @param depth — The maximum recursion depth

console.log(real_another_array);



console.log(Array.isArray("Hitesh"))     // it check is it array or not
console.log(Array.from("Hitesh"))      // it change into array
console.log(Array.from({name: "hitesh"})) // interesting
                                          // if it can't change into array then it return an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //Returns a new array from a set of elements.