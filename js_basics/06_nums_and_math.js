// Numbers in JavaScript

const score = 500;
// console.log(score)

const balance = new Number(5000)
// console.log(balance)

// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(balance.toString().length);

const newNumber = 94121.2345
// console.log(newNumber.toPrecision(3));

const largeNumber = 1000000;
// console.log(largeNumber.toLocaleString('en-IN'));

// Math Object
 
console.log(Math);
console.log("PI : " + Math.PI);
console.log("Absolute : " + Math.abs(-9.5));
console.log("Round : " + Math.round(12.4));
console.log("Ceil : " + Math.ceil(21.1));
console.log("Floor : " + Math.floor(22.7));
console.log("Square root : " + Math.sqrt(9));
console.log("Power : " + Math.pow(2,12));
console.log("Minimum : " + Math.min(12,18,34,45,22,78));
console.log("Maximum : " + Math.max(90,100,23,45,67));
console.log("Random : " + Math.random()); //returns a random number between 0 and 1
console.log("Random value greater than 0 : " + ((Math.random()*10) + 1))
console.log("Random value  " + (Math.floor(Math.random()*10) + 1))

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));





















