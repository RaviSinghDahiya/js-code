const count = 400;
// console.log(count); // output => 400

const myNumber = new Number(100);
// console.log(myNumber); //output => [Number: 100]
// console.log(myNumber.toString().length); // output => 3

const otherNumber = 12.4368;

// console.log(otherNumber.toPrecision(3)); //output  after dot value=> 12.4
// console.log(otherNumber.toFixed(2)); // output round of value 12.44

const longNumber = 1000000;
console.log(longNumber.toLocaleString()); //output in US base => 1,000,000
console.log(longNumber.toLocaleString('en-IN')); // output in india base => 10,00,000;
// console.log();