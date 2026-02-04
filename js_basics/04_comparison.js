// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 2)
// console.log(2 <= 1)
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(2 != '2')
// console.log(2 !== '2')


/*

Avoid using this type of comparison, because it can lead to unexpected 
results due to type coercion.

// console.log("2" > 1)
// console.log("02" < 1)

// console.log(null > 0)
// console.log(null == 0) 
// console.log(null >= 0)

// console.log(undefined == 0)      returns false
// console.log(undefined > 0)       returns false
// console.log(undefined < 0)       returns false

*/

/* Strict cheching is recommended to avoid unexpected results due to type coercion.

console.log("02" === 2)      // returns false

*/

