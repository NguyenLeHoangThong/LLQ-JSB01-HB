// number
let age = 19
let ageAfter4Years = age
ageAfter4Years = 25
let avg = 3.5

// string
let fullName = "Thong Nguyen" // dấu gán
let fullName20 = fullName + " 20"


// boolean: true / false
let isUpGrade = false

// null
let avgMath = null

// undefined
let xe;

// conditional
const webAge = 0 

// == là "ép kiểu" xong rồi so sánh. Ép kiểu nghĩa là biến từ kiểu dữ liệu này sang
// kiểu dữ liệu khác

// === là so sánh cả cái kiểu dữ liệu của 2 giá trị, nếu kiểu dữ liệu 2 giá trị
// mà không giống nhau => False ngay!!!!


// if (webAge === "0") { // number -> string
//     console.log("True")
// }
// else {
//     console.log("False")
// }

// let random = "Thong"; // false, "", 0, null, undefined ===> FALSE

// if (random) {
//     console.log("Random: true")
// } else {
//     console.log("Ngẫu nhiên: false")
// }

// WEAK TYPE
let age1 = 16
age1 = "Thong"


// Tạo 1 biến tuổi = ...

// nếu tuổi > 20 => tăng tuổi lên 1
// nếu tuổi <= 20 và tuổi >= 16 => giảm tuổi 2
// nếu tuổi < 16 => giảm tuổi 3

// in tuổi sau khi chạy các lệnh ở
// trên ra

// let age2 = 25;

// if (age2 > 20) {
//     age2 = age2 + 1
// }
// else if (age2 >= 16 && age <= 20) {
//     age2 = age2 -2
// }
// else {
//     age2 = age2 - 3
// }

// console.log("age2 = ", age2)

// Link tham khảo: https://www.w3schools.com/js/


// let x = 1;

// let y = 3;
// let z = 4;

// let max = x;

// if (max < y) { //1 < 3
//     max = y;
// }

// if (max < z) { // 1< 4 => true
//     max = z
// }

const a = 1;
const b = 4;
const c = 4;

if (a === 0 && b === 0) {
    console.log("Phuong trinh vo nghiem")
}
else if (a === 0) {
    const nghiem = -c/b;
    console.log("Nghiem duy nhat: ", nghiem)
}
else if ((b*b - 4*a*c) < 0) console.log("Phuong trinh vo nghiem");


console.log(Math.sqrt(b*b - 4*a*c))