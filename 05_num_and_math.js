const count = 400;
// console.log(count); // output => 400

const myNumber = new Number(100);
// console.log(myNumber); //output => [Number: 100]
// console.log(myNumber.toString().length); // output => 3

const otherNumber = 12.4368;

// console.log(otherNumber.toPrecision(3)); //output  after dot value=> 12.4
// console.log(otherNumber.toFixed(2)); // output round of value 12.44

const longNumber = 1000000;
// console.log(longNumber.toLocaleString()); //output in US base => 1,000,000
// console.log(longNumber.toLocaleString('en-IN')); // output in india base => 10,00,000;
// console.log();


// :::::::::::::::::::: Maths ::::::::::::::::::::::::

// console.log(Math);
// console.log(Math.abs(-4)); //output nagative value to plus=> 4
// console.log(Math.ceil(4.5)); //output above value=> 5
// console.log(Math.floor(4.8)); //output below value=> 4
// console.log(Math.round(5.5)); //output round of value => 6
// console.log(Math.min(4,54,6,7,68,79,6,3,2)); //output small value => 2
//console.log(Math.max(6,8,9,32, 85, 82,3));  //output largest value => 2

const min = 10
const max = 20

console.log(Math.random()); //output random always value 0 or 1 ke bich me deta h

console.log(Math.random() * (max - min + 1)); //output find random value => 9.2, 3.3,5.3 like this round
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //output this sintex find random value and add min value 