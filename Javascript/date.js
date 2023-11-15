//  const now = new Date();
// console.log(now);

// Wed Sep 28 2022 14:17:20 GMT+0700 (Indochina Time)

// Time zone : GMT+0700 (Indochina Time)
// Second : 49
// Minute : 22
// Hour: 18
// Year: 2022
// Month : Sep
// Day : 07
// Day of the week : Wed


// Timestamp & Epoch Time
// Unix time()

// Time stamp tính ra kết quả miliseconds
// console.log(now.getTime()); // print time stamp

// Epoch Time 
// console.log(new Date(0));

// 4 cách sử dụng new Date()

// new Date() in ra giờ hiện tại.
// console.log(new Date());

// new Date(timestamp) dựa vào timestamp để in ra ngày giờ.
// console.log(new Date(1664350290550));

// new Date(date string)
// console.log(new Date("Fri Sep 09 2022 21:13:12 GMT+0700"));

// new Date(year , month , day , hours , minutes , seconds , miliseconds)

// console.log(new Date(2022, 9, 1, 23, 23, 23, 23));

// Các hàm get trong Date
// const birthday = new Date(1991, 11, 25,);

// In ra năm
// console.log(birthday.getFullYear());

// In ra tháng
// getMonth(): 0 - 11
// console.log(birthday.getMonth());

//In ra ngày của tháng
// console.log(birthday.getDate());

// In ra thứ của tuần
// 0 - 6: 0: chủ nhật , 6: thứ bảy
// console.log(birthday.getDay());

// In ra giờ
// console.log(birthday.getHours());

// In ra phút
// console.log(birthday.getMinutes());

// In ra giây
// console.log(birthday.getSeconds());

// In ra timestamp
// console.log(birthday.getTime());


// Các hàn set trong Date
// console.log(`My birthday: ${birthday}`);

// Update năm
// birthday.setFullYear(1993);

// Update tháng
// birthday.setMonth(10);

// Update ngày trong tháng
// birthday.setDate(27);

// Update giờ
// birthday.setHours(23);

// Update phút
// birthday.setMinutes(15);

// Update giây
// birthday.setSeconds(35);
// console.log(`My birthday after update: ${birthday}`);


// Các hàm khác trong Date

// console.log(now.toDateString()); // Wed Sep 28 2022

// console.log(now.toTimeString()); // 16:06:15 GMT+0700 (Indochina Time)

// console.log(now.toLocaleDateString()); // 9/28/2022

// console.log(now.toLocaleDateString("vi-VI")); // 28/9/2022

// console.log(now.toISOString()); // 2022-09-28T09:10:43.229Z

// const myTime = new Date("Wed Sep 28 2022 16:34:23 GMT+0700 (Indochina Time)");

// const myYear = myTime.getFullYear();
// const myDate = myTime.getDate();
// const myMonth = myTime.getMonth() + 1;
// const prefixMonth = myMonth < 10 ? "0" : "";


// console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);



// let minutes = 1;
// let second = minutes * 60;
// let counter = 0;

// let times = setInterval(function(){
//     counter = ++counter;
//     console.log(counter);
//     if(counter === second) {
//           clearInterval(times);
//           alert("Đã hết giờ làm bài thi");
//     }
// }, 1000);


// const yearBirth = Number(prompt("Nhập vào năm sinh của bạn"));

// const yearCurent = now.getFullYear();

// const age = yearCurent - yearBirth;

// if(yearBirth == "") {
//     alert("Vui lòng không đẻ trống trương")
// }

// alert("Số tuổi của bạn năm nay: " + age);


// function clock() {

//     let now = new Date();
//     let hour = now.getHours();  
//     let minute = now.getMinutes(); 
//     let second = now.getSeconds();  
//     let time = "";

//     if(hour < 10) {
//         hour = "0" + hour;
//     }

//     if(minute < 10) {
//         minute = "0" + minute;
//     }

//     if(second < 10) {
//         second = "0" + second;
//     }

//     if(hour <= 12) {
//         time = "AM";
//     } else {
//         time = "PM";
//     }

//     document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second +  " " + time;
//     setTimeout("clock()", 1000);
//  }

//  clock();


// function timeSince(time) {

//     let now = new Date();
//     let yourDate = new Date(time);
//     let seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
//     let timer;

//     timer = Math.floor(seconds / 31536000);  
//     if(timer >= 1) {
//         console.log(`Đã xem cách đây ${timer} năm trước`);
//         return;
//     }


//     timer = Math.floor(seconds / 2678400);  
//     if(timer >= 1) {
//         console.log(`Đã xem cách đây ${timer} tháng trước`);
//         return;
//     }


//     timer = Math.floor(seconds / 604800);  
//     if(timer >= 1) {
//         console.log(`Đã xem cách đây ${timer} tuần trước`);
//         return;
//     }


//     timer = Math.floor(seconds / 86400);  
//     if(timer >= 1) {
//         console.log(`Đã xem cách đây ${timer} ngày trước`);
//         return;
//     }


//     timer = Math.floor(seconds / 3600);  
//     if(timer >= 1) {
//         console.log(`Đã xem cách đây ${timer} giờ trước`);
//         return;
//     }


//     timer = Math.floor(seconds / 60);  
//     if(timer >= 1) {
//         console.log(`Đã xem cách đây ${timer} phút trước`);
//         return;
//     }

// }

// timeSince("Thu Oct 06 2022 16:23:01 GMT+0700 (Indochina Time)");

// 1 year = 365 * 24 * 60 * 60 = 31536000
// 1 month = 31 * 24 * 60 * 60 = 2678400
// 1 week = 7 * 24 * 60 * 60 = 604800
// 1 day = 1 * 24 * 60 * 60 = 86400
// 1 hour = 1 * 60 * 60 = 3600
// 1 minutes = 1 * 60 = 60





function newYear() {

    let lunaNewyear = new Date("Sat Jan 21 2023 00:00:00 GMT+0700 (Indochina Time)");
    let dayPresent = new Date();
    let timeRemaining = lunaNewyear.getTime() - dayPresent.getTime();

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;


    let d = Math.floor(timeRemaining / (day));
    let h = Math.floor((timeRemaining % (day)) / (hour));
    let m = Math.floor((timeRemaining % (hour)) / (minute));
    let s = Math.floor((timeRemaining % (minute)) / (second));

    if(h < 10) {
        h = "0" + h;
    }

    if(m < 10) {
        m = "0" + m;
    }

    if(s < 10) {
        s = "0" + s;
    }

    document.getElementById("day").innerHTML = d;
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
}

setInterval("newYear()", 1000);









