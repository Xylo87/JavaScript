// document.querySelectorAll(".square").forEach(carre => {
//     carre.addEventListener("click", function rollcolor() {
//         carre.classList.toggle("redroll")
//     })
// });


const html = document.querySelector("html")


document.querySelectorAll(".square").forEach(carre => {
    carre.addEventListener("click", function () {
        carre.classList.toggle("box")
    })
});


// test.addEventListener("click", function test2() {
//     // html.style.background = 
//     test.classList.toggle("box")
//     // .classList.toggle("")
// })
