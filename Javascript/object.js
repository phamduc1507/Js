// Cách khai báo object

// Object literal

const objectLiteral = {};

// Object contructer 

const objectContructer = new Object();

const student = {
    name: "Cường",
    age: 32,
    male: true,
    "last-name": "Đức",
    hi: function() {
        console.log("Hello");
    },
}

// 2 cách truy xuất giá trị của object.

// 2.1 Dot notation (object.key)

console.log(student.name);

// 2.2 Bracket notation ["key"]. ---> Dùng trong nhưng trường hợp đặc biệt key có dấu gạch ngang - .

console.log(student["age"]);
console.log(student["last-name"]);

// Thay đổi giá trị của Object.

student.age = 20;
console.log(student);


