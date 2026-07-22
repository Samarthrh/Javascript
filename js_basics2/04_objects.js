// const SpotifyUser = new Object() // Singleton object
const SpotifyUser = {} // Non singleton object

SpotifyUser.id="1";
SpotifyUser.name="Sam";
SpotifyUser.isLoggedIn=true;
SpotifyUser.number=[1,"two",3,"false"];
console.log(SpotifyUser);
console.log(typeof(SpotifyUser));

const regularuser = {
    fullname : {
        userfullname : {
            firstname : "Vrund",
            lastname : "Rojara"
        }
    }
}

// printing the lastname from the nested object 
console.log(regularuser.fullname.userfullname.lastname);
console.log("**********-----**********");
console.log();

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// Merging multiple objects into a single object using Object.assign()
const obj4 = Object.assign({}, obj1, obj2, obj3)

console.log(obj4);

// Spread operator can also be used to merge multiple objects into a single object
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

console.log();
console.log("**********-----**********");
console.log();


const users = [
    {
        id : 1,
        name : "Vrund"
    },
    {
        id : 2,
        name : "Samarth"
    },
    {
        id : 3,
        name : "K.....l"
    },
    {
        id : 4,
        name : "S.....m"
    }
]
users[1].email
console.log(SpotifyUser);

// Getting the keys, values, and entries of the object using Object.keys(), Object.values(), and Object.entries()
console.log(Object.keys(SpotifyUser));
console.log(Object.values(SpotifyUser));
console.log(Object.entries(SpotifyUser));

// Checking if the object has a specific property using hasOwnProperty()
console.log(SpotifyUser.hasOwnProperty('name'));


console.log();
console.log("**********-----**********");
console.log();

const course = {
    courseName : "Javascript in NZ Sign Language",
    courseInstructor : "Misha",
    price : "9999" 
}

// Destructuring object 
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name" : "Misha",
//     "courseName" : "JS in hindi",
//     "price" : "free"
// } 
 