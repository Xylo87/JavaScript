// const square = document.querySelector(".square")

// square.addEventListener("click", function CSSDisplay() {
//     alert(
//         " - Class : " + square.getAttribute("class") + "\n" +
//         " - Color : " + getComputedStyle(square).color + "\n" +
//         " - Background color : " + getComputedStyle(square).background + "\n" +
//         " - Height : " + getComputedStyle(square).height + "\n" +
//         " - Width : " + getComputedStyle(square).width + "\n" +
//         " - Font-family : " + getComputedStyle(square).fontFamily + "\n" +
//         " - Font-size : " + getComputedStyle(square).fontSize)
// })


const squareWP = document.querySelector("#squareWP")
const squareDE = document.querySelector("#squareDE")
const squareSNW = document.querySelector("#squareSNW")
const squareKNY = document.querySelector("#squareKNY")
const squareO = document.querySelector("#squareO")



squareWP.addEventListener("click", function colorchange() {
    squareO.setAttribute("id", "squareWP")
    squareO.innerHTML = getComputedStyle(squareWP).background
})

squareDE.addEventListener("click", function colorchange() {
    squareO.setAttribute("id", "squareDE")
    squareO.innerHTML = getComputedStyle(squareDE).background
})

squareSNW.addEventListener("click", function colorchange() {
    squareO.setAttribute("id", "squareSNW")
    squareO.innerHTML = getComputedStyle(squareSNW).background
})

squareKNY.addEventListener("click", function colorchange() {
    squareO.setAttribute("id", "squareKNY")
    squareO.innerHTML = getComputedStyle(squareKNY).background
})




// function colorchange() {
//     
// }




