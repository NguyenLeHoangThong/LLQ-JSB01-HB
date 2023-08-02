// // khởi tạo = ban đầu = initialize
// // giá trị khởi tạo ; điều kiện dừng vòng lặp ; hành động sau mỗi lần lặp
// for (let i = 5; i > 0; i = i - 1) {
//     console.log("Hello")
// }


const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Hello")
})
