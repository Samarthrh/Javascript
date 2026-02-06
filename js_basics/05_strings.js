const name = "Samarth";
const repoCount = 5

// String Concatenation (This method is outdated and not recommended)
console.log("Outdated method : " + name + repoCount + 50)

// New way to concatenate strings using String Interpolation 
console.log("New method : " + `My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Vrund')

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf('n'))

const newString = gameName.slice(-4,-1)  
console.log(newString)






