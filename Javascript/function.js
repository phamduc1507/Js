// // function (hàm).
// // Khai báo function.
// // Cú pháp : function() function Name(parameters) {
// //           Your code here
// // }


// // Function declaration

// function add(a, b) {
//     return a + b;
// }


// let sum = add;

// function average(a, b, fn) {
//      let total = fn(a, b);
//      return total / 2;
// }

// console.log(average(200, 400, sum));

// Anonymous function

// let logName = function() {
//     console.log("Your name");
// }

// logName();


// // // IIFE - immediately invoked function execution

// (function() {
//      console.log("Hello");
// })()

// // Scope
// // Global scope , function scope

// let myName = "Cường"; // Global scope

// // Function scope

// function logYourName() {
//     let myName2 = myName; 
//     console.log(myName2);
// }

// logYourName();






// // Block csope

// if(9 > 8) {
//     let message = "Hello word"; 
// }
// console.log(message);





// // Lexical scope

// let myName3 = "Đức";

// function sayHello() {
//     let message2 = "Hi";
//     console.log(`${message2} ${myName3} ${myName}`); 
// }

// sayHello();


// // Closure

// function sayHello2() {
//     let message = "Hi";
//     function sayHi() {     // inner funtion
//         console.log(message);
//     }
//     return sayHi;
// }

// let hello = sayHello2();
// hello();



// function sayHello3(message1) {
//     return function yourName(name1) {
//         console.log(`${message1} ${name1}`);
//     };
// }

// let hello1 = sayHello3("Wellcom to javascript");
// hello1("Đức");  


// // Tạo ra hàm so sánh 2 số , tìm ra số lớn hơn

// function compare(a, b) {
//     if(typeof a !== "number" || typeof b !== "number") {
//         console.log("Vui lòng nhập vào 1 số");
//         return;
//     } 
//         return Math.max(a, b);
// }

// console.log(compare(10, 23));

//  // Tao ra 1 ham viet hoa chu cai dau tien VD: nam -> Nam , DUC -> Duc.

// function capital_letter(text = prompt("NHẬP VÀO 1 ĐOẠN VĂN BẢN ")) {
//       if(text == "") {
//           alert("KHÔNG ĐƯỢC PHẾP ĐỂ TRỔNG TRƯỜNG NAY");
//           return;
//       } else {
//           let word_capital = text.toLowerCase().charAt(0).toUpperCase();
//           let other_word = text.toLowerCase().slice(1);
//           return alert(`${word_capital}${other_word}`);
//       }
// }


// // capital_letter();



// function creatCounter() {
//     let counter = 0;
//        function increase() {
//           return ++counter;
//        }
//       return increase;
// }

// const increase1 = creatCounter();
// console.log(increase1());
// console.log(increase1());
// console.log(increase1());
// console.log(increase1());
// console.log(increase1());
// console.log(increase1());



















