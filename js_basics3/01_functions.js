//  Functions
 function sayMyName(){
    console.log("V");
    console.log("R");
    console.log("U");
    console.log("N");
    console.log("D");
 }
 console.log();
 sayMyName();

console.log();
console.log("**********-----**********");
console.log();

// Function with parameters

function addTwoNumbers(number1, number2){
   console.log(number1 + number2);
}

addTwoNumbers(10, null);
const result = addTwoNumbers(3, 5);
console.log("Result : ", result);

console.log();
console.log("**********-----**********");
console.log();

function addThreeNumbers(number1, number2, number3){
   // let result2 = number1 + number2 + number3;
   // return result2;
   return number1 + number2 + number3;
}

let result2 = addThreeNumbers(100, 600, 900);
console.log("Result : ",result2);
console.log();

// Function with return value and backticks
function loginUserMessage(username){
   if(!username){ // if username is not provided
      console.log("Please enter a username");
      return
   }
   return `Welcome ${username}` 
}
console.log(loginUserMessage("Vrund" ))
console.log(loginUserMessage());

// Functions with default parameters
function loginUserMessage2(username1 = "Sam"){ 
   return `Welcome ${username1}` 
}
console.log(loginUserMessage2("Vrund"))
console.log(loginUserMessage2());

// Rest parameters
 function calculateCartPrice(val1, val2, ...num1){
   return num1
 }
 console.log(calculateCartPrice(100, 200, 300, 500));

 const user = {
   name : "Vrund",
   price : 10000
 }
 
 function handleObject(anyobject){
   console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
 }

//  handleObject(user);
handleObject({
   name : "Sam",
   price : 599
})
console.log();
// Function with array as parameter
const myNewArray = [10, 20, "thirty", 40];

function returnArray(getArray){
   return getArray[2];
}
console.log(returnArray(myNewArray));
