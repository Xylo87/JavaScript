const body = document.querySelector("body")

document.querySelectorAll(".square").forEach(carre => {

    const socialName = carre.querySelector("p")

    carre.addEventListener("click", function socialmedia() {
        carre.classList.toggle("box")
        socialName.classList.toggle("display")
        if (carre.classList.contains("box")) {
            body.style.background = getComputedStyle(carre).background
        }   else {
            body.style.background = "grey"
        }
    })
});

// body.style.background = carre.dataset.color

// carres.forEach((c) => {
        //     c.classList.remove('box')
        // })