let myStr = "Frontend Developer D";

console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());
console.log(myStr.startsWith("F"));
console.log(myStr.endsWith("D"));
console.log(myStr.includes("Dev"));
console.log(myStr.indexOf("ron"));
console.log(myStr.lastIndexOf("D"));
console.log(myStr.replace("Frontend Developer D", "Backend Developer C"));

let myStr1 = "Frontend Developer";
console.log(myStr1.repeat(3));
console.log(myStr1.slice(1, 5));

let myStr2 = "  Frontend Developer   ";
console.log(myStr2);
console.log(myStr2.trim());
console.log(myStr2.trimStart());
console.log(myStr2.trimEnd());

let myStr3 = "Backend Developer";
console.log(myStr3.charAt(10));
console.log(myStr3.substr(0, 6));
console.log(myStr3.substring(0, 6));

let myStr4 = "   Frontend Deverloper   ";

// loại bỏ khoảng trống 2 bên , viết hoa tất cả chuỗi này ,

console.log(myStr4
    .trim()
    .toUpperCase()
    .split("")
);




    












