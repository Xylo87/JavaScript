


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


// const squareWP = document.querySelector("#squareWP")
// const squareDE = document.querySelector("#squareDE")
// const squareSNW = document.querySelector("#squareSNW")
// const squareKNY = document.querySelector("#squareKNY")
// const squareO = document.querySelector("#squareO")


// squareWP.addEventListener("click", colorchange(squareWP))
// squareDE.addEventListener("click", colorchange(squareDE))
// squareSNW.addEventListener("click", colorchange(squareSNW))
// squareKNY.addEventListener("click", colorchange(squareKNY))


// function colorchange(carre) {
//     squareO.setAttribute("id", carre.id)
//     squareO.innerHTML = getComputedStyle(carre).background
// }



// METHODE COURTE


const squareO = document.querySelector("#squareO")


document.querySelectorAll(".square").forEach(carre => {
    carre.addEventListener("click", function colorchange(forme) {
         squareO.setAttribute("id", carre.id)
        squareO.innerHTML = getComputedStyle(carre).background
    })
})



