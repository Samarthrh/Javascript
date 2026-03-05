// object literals
console.log("***********************************************");

const Sym = Symbol("key1");
const JsUser = {
    name : "Samarth",
    [Sym] : "Sym value",
    age : 20,
    "location new" : "Gujarat",
    email : "samarth@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday", "Saturday"],
    "new1" : "new value"
}
// accessing the values of the object
console.log("Prints name : " + JsUser.name);

/* we can access it using bracket notation 
console.log(JsUser.location new) 
*/

// using bracket notation 
console.log(JsUser["isLoggedIn"]);
console.log(JsUser[Sym]);
console.log("***********************************************");



console.log("Change the value of email : ");
JsUser.email = "samarth@rediffmail.com";
console.log(JsUser["email"]);
console.log();

console.log("***********************************************");

// freeze the object to prevent any changes to it
// Object.freeze(JsUser);
JsUser.email = "samarth@chatgpt.com"
console.log(JsUser);

console.log("***********************************************");

JsUser.greetings = function() {
    console.log("Hello JS user");
}
JsUser.greetings2 = function() {
    console.log(`Hello JS user ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());





