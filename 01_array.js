let arr = [1,2,3,4,5];
let arr2 = ["John", "Doe", "Peter", "Smith"];
let arr3 = new Array(1,2,3,4,5,6);

// arr.push(8); //output  add value in array => [1,2,3,4,5,8];
// arr.pop(); //output remove last added value in array => [1,2,3,4,5];
// arr.unshift(9) //output add value in first child => [9,1,2,3,4,5]
// arr.shift(); //output remove first value in array => [1,2,3,4,5];

// console.log(arr.includes(9)) // output check deta find or not => false data type find in boolean
// console.log(arr.indexOf(4)) // output check deta find or not => -1

//const newArr1 = arr.join(); //ouput convert value in string => 1,2,3,4,5

console.log("A", arr);

const newArr2 = arr.slice(1,3);  //output show value [ 2, 3 ] => [ 1, 2, 3, 4, 5 ] ye only 2 value ko leta h 3rd wali add nhi karta
console.log(newArr2);
console.log("B", arr);

const newArr3 = arr.splice(1,3)  //output remove value [ 2, 3, 4 ] => [ 1, 5 ] ye 3rd value bhi leta h or remove kar new array deta h
console.log(newArr3);
console.log("C", arr);