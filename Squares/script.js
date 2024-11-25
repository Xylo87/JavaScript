const body = document.querySelector("body")
// ---> sélection du body

document.querySelectorAll(".square").forEach(carre => {

    const socialName = carre.querySelector("p")
    // ---> sélection de chaque paragraphe de chaque carré

    carre.addEventListener("click", function socialmedia() {
        
        if (carre.classList.contains("box")) {
            carre.classList.remove("box")
            socialName.classList.remove("display")
            body.style.background = "grey"
            return
        }
        // ---> déselection d'un carré
        
        document.querySelectorAll(".square").forEach(c => {
            c.classList.remove("box")
            c.querySelector("p").classList.remove("display")
        })
        // ---> pré-désactivation des carrés

        carre.classList.add("box")
        socialName.classList.add("display")
        body.style.background = getComputedStyle(carre).background
        // ---> activation des carrés
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