const name = "Samarth";
const repoCount = 5

// String Concatenation (This method is outdated and not recommended)
console.log("Outdated method : " + name + repoCount + 50)

// New way to concatenate strings using String Interpolation 
console.log("New method : " + `My nam e is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Vrund')

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf('n'))

const newString = gameName.slice(-4,-1)  
console.log(newString) 

const newString2 ="        Vrund         "
console.log(newString2)
console.log(newString2.trim())

const url = "https://www.vrund.com/vrund%17"
console.log(url)
console.log(url.replace('%17','Hi'))
console.log( url.includes('vr'));

const newWord = "Hi my name is Vrund"
const word = newWord.split(' ')
console.log(word[2])







