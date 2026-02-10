// Dates

let myDate = new Date();
console.log(typeof myDate);
console.log();
console.log("To String : " + myDate.toString());
console.log();
console.log("Date String : " + myDate.toDateString());
console.log();
console.log("Local date string : " + myDate.toLocaleDateString());
console.log();
console.log("Local string : " + myDate.toLocaleString());
console.log();
console.log("ISO String : " + myDate.toISOString()); 
console.log();
// let myCreatedDate = new Date(2006, 12, 21);
// let myCreatedDate = new Date("01-02-2006");
// console.log("Created Date : " + myCreatedDate);
let myCreatedDate = new Date(2009, 11, 12, 4, 7,9)
console.log(myCreatedDate.toLocaleString());
console.log();
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/100));

console.log();

let newDate = new Date();
console.log(newDate);
console.log("Get Day : " + newDate.getDay());
console.log("Get Full Year" + newDate.getFullYear());
console.log("Get Hour : " + newDate.getHours());
console.log("Get Date : " + newDate.getDate());
console.log("Get Month : " + newDate.getMonth());
console.log("Get Millisecond : " + newDate.getMilliseconds());
console.log("Get Minute : " + newDate.getMinutes());

console.log("Using String Interpolation : " + `Year is ${newDate.getFullYear()} and the date is ${newDate.getDate()}`);

// let secondDate = new Date();
// secondDate.toLocalString('default', 
//     {
//         weekday : 'long'
//     }
// ); 









