// function calculate(a, b) {
//   const sumAB = a + b;
//   console.log(sumAB);
//   const multipleAB = a * b;
//   console.log(multipleAB);
//   const divideAB = a / b;
//   console.log(divideAB);
// }

// calculate(50, 20)

// function logger(name) {
//     console.log("Hello " + name);
// }

//arrow function
// const logger = (name, age, school) => {
//     console.log("Hello " + name);
// }

// logger("Thong")


// tính delta phương trình bậc 2

// const deltaCalculate = (a, b, c) => {
//     const delta = b*b - 4*a*c;
//     return delta
// }

// const result = deltaCalculate(1, 2, 3)

// const getString = () => {
//     console.log("Good Bye")
//     return "Hello";
// }

// const s = getString();
// console.log(s)

// const hangout = (rainy) => {
//     if (!rainy) return "Đi chơi"
//     else return "Ở nhà"
// }

// console.log("Đi chơi hay không: ", hangout(false))


// -----------------------DOM-------------------------

// const clickMeBtn = document.getElementById("btn");

// const logger = () => { // callback
//     console.log("Hello")
// }

// clickMeBtn.addEventListener("click", logger) // tên sự kiện, hàm kích hoạt khi sự kiện đó xảy ra


const username = document.getElementById('username');
const password = document.getElementById('password');

// username: thongnguyen
// password: 123456

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    if (username.value === "thongnguyen" && password.value === "123456") {
        alert("Đăng nhập thành công")
    }
    else {
        alert("Đăng nhập thất bại")
    }
})