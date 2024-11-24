document.querySelectorAll(".square").forEach(carre => {
    carre.addEventListener("click", function rollcolor() {
        carre.classList.toggle("redroll")
    })
});