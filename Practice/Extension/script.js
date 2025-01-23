const inputText = document.getElementById("input-el")
const button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let myLeads = ["Kiouze", "Kazel", "Isimorn", "Xylo"]

// button.addEventListener("click", function () {
//     // myLeads.push(inputText.value)
//     myLeads.forEach(element => {
//         // ulEl.textContent += element + " "
//         ulEl.innerHTML += "<li>" + element + "</li>"
//     })
    // for (let i = 0; i < myLeads.length; i++) {
    //     console.log(myLeads[i]);
    // }
// })





const test = document.getElementById("container")
test.innerHTML = "<button id=\"testButton\">Buy !</button><br><br>"

const test2 = document.getElementById("testButton")
test2.addEventListener("click", function () {
    test.innerHTML += "<p>Thank you for buying !</p>"
})

