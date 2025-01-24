const container = document.getElementById("container")
const inputText = document.getElementById("input-el")
const button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

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



button.addEventListener("click", function () {
    let text = inputText.value
    
    // if (inputText.value === "") return
    if (text.startsWith("http")) {
        
        errorCanva.remove()

        myLeads.push(inputText.value)
        renderLeads()
        
        inputText.value = ""
    } else {
        container.append(errorCanva)
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