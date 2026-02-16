const marvel_heros = ["Iron Man", "Thor", "Captain America"]
const dc_heros = ["flash", "Superman", "Batman"]
console.log("Marvel Heros Array : " + marvel_heros)
console.log()
console.log("DC heros array : " + dc_heros)
console.log()

// pushing one array into another array adds the array as a single element in the array.
marvel_heros.push(dc_heros)
console.log("Marvel Heros after pushing DC heros : " + marvel_heros)
console.log()


console.log("Accessing element 3,2 of marvel heros after performing push operation : " + marvel_heros[3][2])
console.log()

// Using concat method to merge two arrays

all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)
console.log();

// Spread operator to merge two arrays. 
// It separates the elements of the array and adds them to the new array.
all_new_heros = [...marvel_heros, ...dc_heros]
console.log("Spreaded Array : " + all_new_heros)
console.log()

// flat method. 
// It removes the nested arrays and adds the elements to the new array.
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [1, [3, 4, 7], 2, 3]]
const another_real_array = another_array.flat(Infinity)
console.log()
console.log("Flat Array : " + another_real_array)
console.log();

console.log(Array.isArray("Samarth"))
console.log(Array.from("Samarth"))
console.log(Array.from({name : "Samarth"})) // Interesting case.
console.log()
const score_1 = 100
const score_2 = 200
const score_3 = 300
console.log("Returns a new array : " + Array.of(score_1, score_2, score_3)); 