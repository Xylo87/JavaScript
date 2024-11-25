const carre = document.querySelector(".square")

carre.addEventListener("click", function CSSdisplay() {
    alert("Class : " + carre.getAttribute("class") + "\n" + 
    "Background color : " + getComputedStyle(carre).background + "\n" +
    "Color : " + getComputedStyle(carre).color + "\n" +
    "Height : " + getComputedStyle(carre).height + "\n" +
    "Width : " + getComputedStyle(carre).width + "\n" +
    "Font-family : " + getComputedStyle(carre).fontFamily + "\n" +
    "Font-size : " + getComputedStyle(carre).fontSize + "\n")
})