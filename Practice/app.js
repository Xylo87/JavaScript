// document.getElementById("count-el").innerText = 5
// document.querySelector("#count-el").innerText = 5

let countEl = document.getElementById("count-el")
let button = document.querySelector("button")

console.log(countEl)
console.log(button)

let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

button.addEventListener("click", function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
})