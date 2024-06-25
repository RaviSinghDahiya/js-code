const name = "Ravi";
const totalCount = 40;

//console.log(name + totalCount + " Value");
console.log(`my name is ${name}. I have completed more the ${totalCount} website`);

//how to decalre new type string 

const myName = new String("Ravi Singh");

const arr =  myName.split(' ');  //convert in Array
console.log(arr); //output => ["Ravi", "Singh"]


// console.log(myName.length); // output => 9
// console.log(myName.__proto__); //output => {}

// console.log(myName.charAt(3)); // output 3rd letter => i
// console.log(myName.toUpperCase()); //output => RAVISINGH
//console.log(myName.indexOf('S')); //output find index position => 4

const newString = myName.substring(0, 4); // nagative value ignore/not allowed 
//console.log(newString); // output => Ravi

const anotherString = myName.slice(-9, 4); // nagative value start reverse
// console.log(anotherString); //output => Ravi

const myNameOne = "    Member       ";
//console.log(myNameOne);         // output this is not ignore extra space =>     Member       
//console.log(myNameOne.trim()); // output trim ignore all extra space => Member

const url = "https://google.com/ravi%20singh"; // %20 showing becasue we have add space in url
console.log(url.replace('%20', '-')); //output => https://google.com/ravi-singh