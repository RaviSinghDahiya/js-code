// Date

var mydate = new Date();

console.log(typeof mydate); //output => object
// console.log(mydate.getDate()); //output => 26
// console.log(mydate.toString()); //output => Wed Jun 26 2024 18:17:02 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString()); //output => Wed Jun 26 2024
// console.log(mydate.toISOString()); //output => 2024-06-26T18:17:02.347Z
// console.log(mydate.toJSON()); //output => 2024-06-26T18:17:02.347Z
// console.log(mydate.toLocaleDateString()); //output => 6/26/2024
// console.log(mydate.toLocaleTimeString()); //output => 6:17:02 PM
console.log(mydate.toLocaleString()); //output => 6/26/2024, 6:19:06 PM