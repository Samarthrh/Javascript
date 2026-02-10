// array

const myArr = [10, 20, 30, 40 ,70, 12];
console.log();
console.log("Type of myArr : " + typeof myArr);

console.log();
console.log("Array : " + myArr);

console.log();
console.log("Accessing second element of array : " + myArr[1]); //Array index starts with zero(0).

console.log();
// let myCars = new Array("Rolls Royce Cullinan", "BMW M5", "Range Rover Sport");
// console.log(myCars);
console.log("Original Array : " + myArr);
console.log();

// push
myArr.push(129);
console.log("After adding one Element from Array : " + myArr);
console.log();

// pop
myArr.pop();
console.log("After removing one Element from Array : " + myArr);

// unshift
console.log();
myArr.unshift(1000);
console.log("Unshift adds an element at the start of an array : " + myArr);

// shift
console.log();
myArr.shift();
console.log("Shift removes first element of an array : " + myArr);

// includes
console.log();
console.log("Includes : " + myArr.includes(1000));

// indexOf
console.log();
console.log("Writes an index of the given element : " + myArr.indexOf(20));

// join
console.log();
const newArr = myArr.join();
console.log("newArr : " + newArr);
console.log("Type of newArr : " + typeof(newArr));


console.log();
const myArr2 = [10, 20, 30, 40 ,50];
console.log("myArr2 : " + myArr2);

// Slice
console.log();
const myslice = myArr2.slice(1, 3);
console.log("Slice : " + myslice);
console.log("Original Array myArr2 after slice : " + myArr2); // Slice does not change the original array.

// Splice 
console.log();
const mySplice = myArr2.splice(1, 3);
console.log("Splice : " + mySplice); 
console.log("Original Array myArr2 after splice : " + myArr2); // Splice changes the original array.
