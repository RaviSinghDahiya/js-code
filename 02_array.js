let myfriend = ["Ram", "Shayam", "Jai", "Viru"];
let myfriend2 = ["john", "Doe", "Peter"];

//myfriend2.push(myfriend);
//const addFriend = myfriend2.concat(myfriend);
//const anotherFriend = new Array(...myfriend, ...myfriend2);

let list = [2,3,[5,7],8,[9, 10, [11,12]], 14]
// const newList = list.flat(); //output all inner array in single array =>  [2,  3,  5,  7,  8, 9, 10, 11, 12, 14]

//console.log(Array.isArray("Ravi")); //output this is array or not => false
//console.log(Array.from("Ravi")); //output convert in array => [ 'R', 'a', 'v', 'i' ]
//console.log(Array.from({name: "Hello"}))//output 

let data = 100
let data2 = 200
let data3 = 300

// console.log(Array.of(data, data2, data3)); //output => [ 100, 200, 300 ]

//console.log(myfriend.toString()); //output => Ram,Shayam,Jai,Viru
//console.log(myfriend.at(2)); //output => jai
console.log(myfriend.join(" * ")); //output add new value and work like string=> Ram * Shayam * Jai * Viru
