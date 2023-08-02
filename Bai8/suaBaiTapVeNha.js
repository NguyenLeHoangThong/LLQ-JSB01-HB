// bai 1
function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

// bai 2

// const btnShowSearchAdvanced = document.getElementById("show_search_advance")

// btnShowSearchAdvanced.addEventListener("click", () => {
//     console.log("clicked !")
//     const trSearchAdvance = document.getElementById("search_advance")

//     trSearchAdvance.style.display = "table-row"
// })


// bai 3

const rows = document.querySelectorAll(".row");
const btns = document.querySelectorAll(".row-btn");

console.log(btns[0]) // 3

// danh sách / mảng / ...: bắt đầu số 0

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        rows[i].remove()
    })
}