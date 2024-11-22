const square = document.querySelector(".square")

square.addEventListener("click", function CSSDisplay() {
    alert(
        " - Class : " + square.getAttribute("class") + "\n" +
        " - Color : " + getComputedStyle(square).color + "\n" +
        " - Background color : " + getComputedStyle(square).background + "\n" +
        " - Height : " + getComputedStyle(square).height + "\n" +
        " - Width : " + getComputedStyle(square).width + "\n" +
        " - Font-family : " + getComputedStyle(square).fontFamily + "\n" +
        " - Font-size : " + getComputedStyle(square).fontSize)
})