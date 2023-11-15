console.log(8 > 5); // true
console.log(5 > 8 && 8 > 5); // false
console.log(5 > 8 || 8 > 5); // true

// Boolean &&
// true && false -> false
// false && true -> false
// false && false -> false
// true && true -> true

// Boolean ||
// true || false -> true
// false || true -> true
// true || true -> true
// false || false -> false

// == vs ===
// == So sánh bằng theo giá trị
// === So sánh bằng theo cả kiểu dữ liệu và giá trị
// != So sánh không bằng theo giá trị
// !== So sánh không bằng theo cả kiểu dữ liệu và giá trị
// > So sánh lớn hơn
// < So sánh nhỏ hơn
// >= So sánh lớn hơn hoặc bằng
// <= So sánh bé hơn hoặc bằng
// ? Toán tử 3 ngôi

// == loose equality vs === strict equality

console.log(10 == 10); //true 
console.log(10 == "10"); //true "10" == "10"
console.log(true == 1); //true  Number(true) = 1 -> 1 == 1
console.log(1 == "01"); //true Number("01") = 1 -> 1 == 1
console.log(null == "") //false "null" != ""
console.log(10 === "10") // false != typeof
console.log(10 !== "10") // true
console.log(true == "true") // false 




