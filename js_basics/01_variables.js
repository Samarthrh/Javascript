const accountId = 12345;
let accountEmail ="vh@gmail.com"
var accountPassword = "12345678"
accountCity = "Chennai"
let accountState 

// accountId = 234 // not allowed

accountEmail = "sh@gmail.com"
accountPassword = "87654321"
accountCity = "Banglore"

/*
Prefer not to use var because of issue in block scope & functional scope
*/
console.log(accountId)
console.log();
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])