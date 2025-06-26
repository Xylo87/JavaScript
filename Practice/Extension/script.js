const container = document.getElementById("container")
const inputText = document.getElementById("input-el")
const button = document.getElementById("input-btn")
const buttonTab = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let myLeads = []
// let oldLeads = []



// > Getting Leads from LocalStorage when refresh page + insert Leads in array + display array function call
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage

    render(myLeads)
}



// > Mouse + keyboard input listeners
button.addEventListener("click", save)
inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        save()
    }
})

// > Invalid URL input
const errorCanva = document.createElement("p")



// > Saving tabs
buttonTab.addEventListener("click", () => {
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (!myLeads.includes(tabs[0].url)) {
            
            myLeads.push(tabs[0].url)
    
            localStorage.setItem("myLeads", JSON.stringify(myLeads))

            render(myLeads)
            errorCanva.remove()
        }

        else {
            errorCanva.textContent = "URL already saved !"
            container.append(errorCanva)
        }
    })
})



// > Delete all button
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    
    myLeads = []
    render(myLeads)

    inputText.value = ""
    errorCanva.remove()
})





// > Fonction de génération d'une liste de liens à partir du tableau + insertion de la liste dans le DOM
function render(leads) {
    let listItems = ""
    
    leads.forEach(element => {
        listItems += 
        `<li>
            <a href='${element}' target='_blank'> 
                ${element}
            </a>
        </li>`
        
    })
    ulEl.innerHTML = listItems
}



// > Saving function when input
function save() {
    let text = inputText.value
    
    if (text.startsWith("http")) {
        
        // > If link correct, remove error message
        errorCanva.remove()

        // > Pushing inputted text into the array and clearing input field
        if (!myLeads.includes(inputText.value)) {
            
            myLeads.push(inputText.value)
            inputText.value = ""
        
            // > Setting leads in the LocalStorage
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
            // > Display array function call
            render(myLeads)
            errorCanva.remove()
        }

        else {
            errorCanva.textContent = "URL already saved !"
        }

    } else {
        errorCanva.textContent = "Please enter a valid URL !"
    }

    container.append(errorCanva)
}