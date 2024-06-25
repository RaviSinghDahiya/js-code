// Primitive
// string, number, boolean, null, undefined, bigInt, symobol, 
let inString = "Ravi";
let inNumber = 23;
let isLoggedIn = false;
let outsideTemp = null;
let userEmail = undefined;
let largeNumber = 23788253253295n;

const ID = Symbol("123");
const accoundID = Symbol("123");

// Non Primitive
// Array, Object, Function
let arr = ["Abc", "def", "hij"];
let obj = {name: "Ravi", age: 27, city: "Noida"}

let fun = function(){
    console.log('hello world');
}

//console.log(fun());

// ++++++++++++++++++ ++++++++++++++++++
// stack (Primitive) heap (Non-Primitive)

let myCity = "Noida";
let newCity = myCity;
newCity = "Hansi"

// console.log(myCity);
// console.log(newCity);
// output myCity => Noida
// output newCity => Hansi

let userOne = {
    email: "ravi@gmail.com",
    vill: "Jita Kheri"
}

let userTwo = userOne;

userTwo.email = "ravi@yahoo.com";

// console.log(userOne);
// console.log(userTwo);
// output userOne => { email: 'ravi@yahoo.com', vill: 'Jita Kheri' }
// output userTwo => { email: 'ravi@yahoo.com', vill: 'Jita Kheri' }



