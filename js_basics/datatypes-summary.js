// # primitive data types
// Types of primitive data types : String, Number, Boolean, Null, Undefined, Symbol,
// BigInt

const score = 100
const scoreValue = 100.7
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof(anotherId))
console.log(id === anotherId)


const bigNumber = 6473473674673647347637647373764637437467364736473647367437n
console.log(typeof(bigNumber))


// ------------------------------------------------------------------------------
// Reference datatype (Non-primitive) : Object, Array, Function

const heros = ["nagraj","mighty raju","super bheem"];

console.log(heros)
console.log(typeof(heros))

let myObj ={
    name : "Samarth",
    age : 19,
    hobby : "traveling"
}
console.log(myObj)

let myFunction = function(){
    console.log("Hello World")
}
console.log(typeof(myFunction))

// ------------------------------------------------------------------------------
// Stack (Primitives) and Heap (Non-primitive) memory allocation

// Call by Value (Primitives)

console.log()

let myName = "Samarth"
let anotherName = myName

console.log("Before call by value")
console.log(myName)
console.log(anotherName)

console.log()

console.log("After call by value")
myName = "Satyarth"
console.log(myName)
console.log(anotherName)

console.log()

// Call by Reference (Non-primitive)

let userOne = {
    email : "samarth123@gmail.com",
    upi : "samarth@ybl",
    password : "12345"
}

let userTwo = userOne
console.log("Before call by reference");
console.log(userOne)
console.log(userTwo)

console.log()

console.log("After call by reference");
userOne.password = "54321"
console.log(userOne)
console.log(userTwo)





