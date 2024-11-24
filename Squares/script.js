


// METHODE LONGUE


// const squareWP = document.querySelector("#squareWP")
// const squareDE = document.querySelector("#squareDE")
// const squareSNW = document.querySelector("#squareSNW")
// const squareKNY = document.querySelector("#squareKNY")
// const squareO = document.querySelector("#squareO")


// squareWP.addEventListener("click", function colorchange() {
//     squareO.setAttribute("id", "squareWP")
//     squareO.innerHTML = getComputedStyle(squareWP).background
// })

// squareDE.addEventListener("click", function colorchange() {
//     squareO.setAttribute("id", "squareDE")
//     squareO.innerHTML = getComputedStyle(squareDE).background
// })

// squareSNW.addEventListener("click", function colorchange() {
//     squareO.setAttribute("id", "squareSNW")
//     squareO.innerHTML = getComputedStyle(squareSNW).background
// })

// squareKNY.addEventListener("click", function colorchange() {
//     squareO.setAttribute("id", "squareKNY")
//     squareO.innerHTML = getComputedStyle(squareKNY).background
// })



// METHODE MOYENNE ???


const squareWP = document.querySelector("#squareWP")
const squareDE = document.querySelector("#squareDE")
const squareSNW = document.querySelector("#squareSNW")
const squareKNY = document.querySelector("#squareKNY")
const squareO = document.querySelector("#squareO")


squareWP.addEventListener("click", colorchange)
squareDE.addEventListener("click", colorchange)
squareSNW.addEventListener("click", colorchange)
squareKNY.addEventListener("click", colorchange)


function colorchange(evt) {
    squareO.setAttribute("id", evt.target.id)
    squareO.innerHTML = getComputedStyle(evt.target).background
}



// METHODE COURTE


// const squareO = document.querySelector("#squareO")


// document.querySelectorAll(".square").forEach(carre => {
//     carre.addEventListener("click", function colorchange() {
//         squareO.setAttribute("id", carre.id)
//         squareO.innerHTML = getComputedStyle(carre).background
//     })
// })



