const inputText = document.getElementById("input-el")
const button = document.getElementById("input-btn")
let myLeads = ["kiouze", "kazel", "isimorn", "xylo"]

button.addEventListener("click", function () {
    // myLeads.push(inputText.value)
    myLeads.forEach(element => {
        console.log(element)
    })
    // for (let i = 0; i < myLeads.length; i++) {
    //     console.log(myLeads[i]);
    // }
})