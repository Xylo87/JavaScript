const body = document.querySelector("body")

document.querySelectorAll(".square").forEach(carre => {

    const socialName = carre.querySelector("p")

    carre.addEventListener("click", function socialmedia() {
        if (carre.classList.contains("box")) {
            carre.classList.remove("box")
            body.style.background = "grey"
            socialName.classList.remove("display")
            return
        }
        
        document.querySelectorAll(".square").forEach(c => {
            c.classList.remove("box")
            c.querySelector("p").classList.remove("display")
        })

        carre.classList.add("box")
        socialName.classList.add("display")
        body.style.background = getComputedStyle(carre).background
    })
});

// body.style.background = carre.dataset.color







// const body = document.querySelector("body")

// document.querySelectorAll(".square").forEach(carre => {

//     const socialName = carre.querySelector("p")

//     carre.addEventListener("click", function socialmedia() {
//         carre.classList.toggle("box")
//         socialName.classList.toggle("display")
//         if (carre.classList.contains("box")) {
//             body.style.background = getComputedStyle(carre).background
//         }   else {
//             body.style.background = "grey"
//         }
//     })
// });

// body.style.background = carre.dataset.color