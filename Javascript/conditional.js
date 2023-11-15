// if(conditional) {
//   your code here;
// } 


// promt, confirm, alert

let a = prompt(`Nhập vào số a`);
let b = prompt(`Nhập vào số b`);
let c = prompt(`Nhập vào số c`);
let delta = b*b - 4*a*c;

if(delta == 0) {
    let x = -b/(2*a);
    alert("Phương trình có 1 nghiệm duy nhất x = " + x);
} 

else if(delta < 0) {
    alert(`Phương trình vô nghiệm`);
}

 else {
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    alert("Nghiệm thứ nhất là x1 = " + x1);
    alert("Nghiệm thứ nhất là x2 = " + x2);
}






