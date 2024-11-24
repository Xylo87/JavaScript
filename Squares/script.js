

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


document.querySelectorAll(".square").forEach(carre => {
    carre.addEventListener("click", function rollcolor() {
        carre.classList.toggle("redroll")
    })
});