// Vòng lặp for
// Dúng vòng lặp để in ra chỉ số index trong mảng sau.
// Dùng vòng lặp để in ra các giá trị trong mảng.
// Nếu giá trị là 8 thì dừng vòng lặp.
// Nếu giá trị là 8  thì bỏ qua giá trị đó và chạy tiếp.

//  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // for(let i = 0; i < num.length; i++) {
    // console.log(`The index is ${i}`);
    // console.log(`Value in array ${num[i]}`);
    // if(num[i] === 8) {
    //    break;
    // }
    // console.log(num[i]);
    // if(num[i] === 8) {
    //    continue;
    // }
    // console.log(num[i]);
    // }


// Dúng vòng lặp for xuất ra các gì trị mảng chạy từ cuối về đầu.

// for(i = num.length -1; i >= 0; i--) {
//    console.log(num[i]);

// }

// nested loop (vòng lặp lồng nhau)

// for(i = num.length -1; i >= 0; i--) {
// console.log(`The value ${num[i]}`);
// for(j = num.length -1; j >= 0; j--) {
// console.log(j);
// }
// }  

// infinite loop

/*
for(i = 0; 1 > i; i-- ) {

}
*/

// Sao chép mảng dùng vòng lặp for

// const emptyArr = [];

// for(i = 0; i < num.length; i++) {
//     emptyArr.push(num[i]);
// }

// console.log(emptyArr);

// Đảo ngược từ i love ---> evol i

// let str = "i love";
// let result = "";

// for(i = str.length -1 ; i >= 0; i--) {
//     console.log(str[i]);
//     result = result + str[i];
// }

// console.log(result);


// loop while và do while

/* 
while(condition) {
   body code
}
*/

// let num = 1;

// while (num < 10) {
//     console.log("number is" + " " + num);
//     num++;
// }

/*
do {

    body code

} while(condition);
*/

// do {

//     console.log("number is" + " " + num);
//     num++;

// } while(num < 10);


// for of

// for(value of array) {}

// let a = [];

// for(let value of num) {
//   console.log(value);
// }


// let i = 0 là điểm bắt đầu vòng lặp.
// i < num.length là điều kiện để vòng lặp thưc thi và chạy cụ thể ở đây là i < độ dài mảng là 6.
// i++ sẽ tự động tăng lên 1 đơn vị và sẽ dừng lại cho đén khi nó thỏa mãn điều kiện vòng lặp.

// Đảo ngược số nguyên
// Math.sign()

// function reversNumber(number) {
//     const num = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
//     console.log(num);
// }

// reversNumber(-123456);

// 





