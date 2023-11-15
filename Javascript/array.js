// Mảng là 1 danh sách chứa nhiều giá trị.

// 2 cách để tạo mảng

// array literal

// const students = [];

// array constructor

// const students1 = new Array();

// Ví dụ 1 mảng

// Mảng phức tạp [0, false, undefined, null, "javascript", ["javascript", false, 1200, []]];

// Mảng đơn giản [0, false, undefined, null, "javascript"];

// [1,2,3,4,5] ["a","b","c","d"] [false, true, true]; 

// []: empty array -------> mảng rỗng;

// const students2 = ["cường","đức","hải","trí","tú", "trí"];

// console.log(students2);

// key : 0 => "cường", 1 => "đức", 2 => "hải", 3 => "trí", 4 => "tú";

// length: độ dài phần tử đếm bắt đầu từ 1 đến hết phần tử.

// truy xuất trong mảng -----> students2[index];

// console.log(students2[0]);

// lấy phần tử cuối cùng trong mảng

// console.log(students2[students2.length - 1]);

// phương thức hay dùng của mảng

// length ---> trả về độ dài của mảng 

// console.log(students2.length);

// reverse ---> đảo ngược giá trị trong mảng

// console.log(students2.reverse());

// join ---> nối các phần tử mảng thành chuỗi.

// console.log(students2.join());

// indexOf ---> trả về vị trí của phần tử tìm thấy đầu tiên.

// console.log(students2.indexOf("trí"));

// lastindexOf ---> trả về vị trí của phần tử tìm thấy cuối cùng;

// console.log(students2.lastIndexOf("trí"));

// push ---> thêm 1 phần tử vào cuối mảng.

// console.log(students2.push("python"));

// unshift ---> thêm 1 phần tử vào đầu mảng

// console.log(students2.unshift("java"));

// pop ---> xóa phần tử cuối cùng của mảng.

// console.log(students2.pop());

// shift ---> xóa phần tử đầu tiên trong mảng

// console.log(students2.shift());

// slince ---> tạo ra 1 mảng copy của mảng ban đầu

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice());

// slince(key) ---> sao chép từ vị trí key đến hết.

// console.log(animals.slice(1));

// slince(start, end) ---> sao chếp từ vị trí bắt đầu đến vị trí cuối.

// console.log(animals.slice(1, 4));

// splice() ---> xóa phần tử trong mảng hoặc thay thế phần tử trong mảng.

// let months = ['Jan', 'March', 'April', 'June'];

// splice(start)

// console.log(months.splice(2));

// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xóa hoặc thay thế.

// months.splice(1, 2);
// months.splice(1, 2, 'Dec', 'Nov');
// console.log(months);

// sort() ---> sắp xếp các phần tử trong mảng theo chuẩn unicode-16

// const numRandom = [1, 10, 7, 9, 8, 999, 2, 3, 100000000, "javascript", "python", "java", "php"];

//  const random = numRandom.sort(function(a, b) {
//     if(a > b) return 1; 
//     if(a < b) return -1; 
// });
//  console.log(random); 


// find ---> trả về phần tử tìm thấy đầu tiên trong mảng thỏa mãn điều kiện nào đó.
// nếu không thỏa mãn điều kiện thì sẽ trả ra kết quả undefined.
// const findYournumber = numRandom.find((element) => element > 10); 
// console.log(findYournumber);

// findIndex ---> nó sẽ trả về vị trí index đầu tiên trong mảng thỏa mãn điều kiện nào đó.
// const findYourIndex = numRandom.findIndex((element) => element > 10);
// console.log(findYourIndex);

// map ---> duyệt qua từng phần trong mảng và trả ra 1 mảng mới mà không thay đổi mảng ban đầu.
// const listNumber = [1, 2, 3, 4, 5, 6];
// const listNumberDouble = listNumber.map(function(value) {
//      return value * 2;
// });

//  console.log(listNumberDouble);

// forEach ---> khác với map() không thể return được khi viết 1 function sẽ chạy mãi (không có cách nào để dừng lại đươc sẽ chạy mãi) và không trả về 1 mảng mới.

// const listNumberTripple = listNumber.forEach(function(value) {
//      return value * 3;
// });

//  console.log(listNumberTripple);

// filter ---> sàng lọc các phần tử trong mảng thỏa mãn điều kiện nào đó.
// const greaterThanThree = listNumber.filter((value) => {
//      return value > 3;
// });
// console.log(greaterThanThree);


// some ---> trả về true khi chỉ cần 1 giá trị thỏa mãn điều kiện và ngược lại trả về false khi không thỏa mãn điều kiện nào cả.
// const someNumber = listNumber.some((value) => {
//           return value > 8;
// });
// console.log(someNumber);

// every ---> trả về true khi tất cả các giá trị đều thỏa mãn điều kiện và ngược lại trả về false khi 1 giá trị không thỏa mãn điều kiện.
// const everyNumber = listNumber.every((value) => {
//      return value > 4;
// });
// console.log(everyNumber);

// reduce ---> gom các phần tư trong mảng lại thành 1.
// const totalNumber = listNumber.reduce(function(number1, number2){
//       console.log(number1, number2);
//       return number1 + number2;
// }, 0);
// console.log(totalNumber);

// Đảo ngược chuỗi : My name is: Lê Đức Cường => Cường Đức Lê is: name My

// function reverseString(str) {
//      if (!str) return null;
//      const reversestr = str.split(" ").reverse().join(" ");
//      return reversestr;
// }

// console.log(reverseString("My name is: Lê Đức Cường"));

// // Đảo ngược 1 chuỗi bao gồm các ký tự : i love you => uoy evol i

// function reverseWord(str) {
//      if (!str) return null;
//      const strarr = str.split(" ").map((item) => item.split("").reverse().join("")).reverse().join(" ");
//      console.log(strarr);
// }
// reverseWord("i love you");

// in hoa các chữ cái đầu tiên trong chuỗi : "my name le duc cuong" ---> My Name Le Duc Cuong.

// function capital_letter(text = "") {
//      if (text.length === 0) return null;
//      let word_capital = text.toLowerCase().charAt(0).toUpperCase();
//      let other_word = text.toLowerCase().slice(1);
//      return `${word_capital}${other_word}`;
// }

// function capitalizeStr(str) {
//     if (!str) return null;
//        let result = str
//          .split(" ")
//          .map(item => capital_letter(item))
//          .join(" ");
//      console.log(result);
// }

// capitalizeStr("my name is le duc cuong");

// So sánh 2 mảng
// JSON: Javascript Object Notation.

/*
{
  "key": value;
  "key": value;
  "key": value;
  "key": value;
  "key": value;
}

*/

// JSON.stringify(value) -----> convert gia trị dưới dạng JSON string.

// const arr1 = [1,2];
// const arr2 = [1,2];

// const arrjson1 = JSON.stringify(arr1);
// const arrjson2 = JSON.parse(arrjson1); 

// console.log(arrjson1); ---> "[1,2]"
// console.log(arrjson2); ---> [1,2];

// const arr1Str = JSON.stringify(arr1);
// const arr2Str = JSON.stringify(arr2);

// console.log(arr1Str === arr2Str);

// 2 cách sao chép mảng nên biết

// const Arr = ["a", "b", "c", "d", "e"];

// 1. Sử dụng slice()

// const sliceArr =  Arr.slice();

// console.log(sliceArr)

// 2. spread operator [...array]

// const spreadArr = [...Arr];
// console.log(spreadArr);

// Gộp 2 mảng với nhau 

// [1,2] [3,4] [5,6] ---> [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

// 1. Sử dụng concat arr1.concat(arr2, arr3).

//  let mergeArray1 = arr1.concat(arr2, arr3);
//  console.log(mergeArray1);


// 2. Spread Operator

[...arr1, ...arr2, ...arr3]

let mergeArray2 = [...arr1, ...arr2, ...arr3];
console.log(mergeArray2);

// Destructuring array


// const student = ["Cường", "Đức", "Long", "Tiến", "Hải"];

/*

const  s1 = student[0];
const  s2 = student[1];
const  s3 = student[2];

console.log(s1, s2, s3);  ---> Cường Đức Long

Đây là cách thông thường để lấy giá trị muốn lấy trong mảng.

*/


// const [indexName, indexName, indexName] = array ---> indexName có thể đặt là tên bất kỳ , đấy là cách dùng Destructuring array.

// const [a, b, z] = student;

// console.log(a, b, z) ---> Cường Đức Long

// rest parameter

// const [a, b, z, ...rest] = student;
// console.log(a, b, z);
// console.log(rest);

// function demo(a, ...rest) {
//  console.log(rest);
// }

// demo(1, 2, 3, 4, 5, 6, 7, 8, 9);
























































