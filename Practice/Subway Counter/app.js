// document.getElementById("count-el").innerText = 5
// document.querySelector("#count-el").innerText = 5

let countEl = document.getElementById("count-el")
let button = document.querySelector("button")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

console.log(countEl)
console.log(button)
console.log(saveBtn)

let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

button.addEventListener("click", function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
})

saveBtn.addEventListener("click", function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
    console.log(count)
})



// let welcomeEl = document.getElementById("welcome-el")

// console.log(welcomeEl)

// let name = "Théo"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " ⚡"
