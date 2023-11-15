console.log(Number(4.5));
console.log(Number(4));
console.log(Number("abcdefhjkll"));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(false));
console.log(Number(true));


console.log(String(4.5));
console.log(String("Hello Javascript"));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));
console.log(String(false));
console.log(String(true));

console.log(10 + "10"); // 1010
console.log("10" + 10); // 1010
console.log("10" - 10); // 0
console.log(null + ""); // null
console.log(null + undefined) // NaN
console.log("" - 1) // -1
console.log(false - true) // -1
console.log(null + 10) // 10

let num = 9.5878778;
console.log(num);

console.log(Math.abs(num)); // 4
console.log(Math.floor(num)); // 4
console.log(Math.ceil(num)); // 5
console.log(Math.round(num)); // 5
let randomNum = Math.random()*20; 
console.log(Math.round(randomNum));
console.log(Math.max(1, 2, 3, 4, 5, 237, 800)); // 800
console.log(Math.min(1, -2, -3, 5, 9, -10)); // -3




