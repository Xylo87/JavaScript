const container = document.getElementById("container")
const inputText = document.getElementById("input-el")
const button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



// let save = localStorage.setItem("myLeads", "https://www.youtube.com/watch?v=nA9cChFUcpQ")
// console.log(save)

// localStorage.clear()



let myLeads = []

const errorCanva = document.createElement("p")
errorCanva.textContent = "Please enter a valid URL"



function renderLeads() {
    let listItems = ""
    
    myLeads.forEach(element => {
        listItems += 
        `<li>
            <a href='${element}' target='_blank'> 
                ${element}
            </a>
        </li>`
        
        ulEl.innerHTML = listItems
    })
}



// localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)



function save() {
    let text = inputText.value
    
    // if (inputText.value === "") return
    if (text.startsWith("http")) {
        
        errorCanva.remove()

        myLeads.push(inputText.value)
        inputText.value = ""
        
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        renderLeads()

    } else {
        container.append(errorCanva)
    }
}



button.addEventListener("click", save)
inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        save()
    }
})





// for (let i = 0; i < myLeads.length; i++) {
//     console.log(myLeads[i]);
// }

// test.innerHTML = "<button id=\"testButton\">Buy !</button><br><br>"



// const recipient = "James"
// const sender =  "Théo"

// const email = "Hey " + recipient + " ! How is it going ? Cheers Per"

// console.log(email)

// const email2 = `Hey ${recipient} ! 
// How is it going ? 
// Cheers ${sender}`

// console.log(email2)