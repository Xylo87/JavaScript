import quotes from "./quotes.js"
// ---> Import


// AFFICHAGE CITATIONS

for (let key in quotes) {
    
    let blocs = document.createElement("blockquotes")
    let blocTitle = document.createElement("h2")
    let blocPhrase = document.createElement("cite")
    let blocAuthor = document.createElement("small")


    document.body.append(blocs)
    blocs.classList.add("quote")
    // ---> ajout + style des blocs de citations
    
    let titres = quotes[key].title
    blocTitle.append(titres)
    blocs.append(blocTitle)
    // ---> captation + insert + ajout des titres
    
    
    let citations = quotes[key].content
    blocPhrase.append(citations)
    blocs.append(blocPhrase)
    // ---> captation + insert + ajout des citations

    let auteurs = quotes[key].author
    blocAuthor.append(auteurs)
    blocs.append(blocAuthor)
    blocAuthor.classList.add("small")
    // ---> captation + insert + ajout des auteurs + style des blocs de citations

    let identifiants = quotes[key].id
    blocs.setAttribute("id", identifiants)
    // ---> attribution des ids
}


// FAVORIS DISPLAY

let iconReg = document.querySelector(".fa-regular")
let iconSol = document.querySelector(".fa-solid")

let favSave = []
let favSaveFromLocalStorage = JSON.parse(localStorage.getItem("favSave"))
if (favSaveFromLocalStorage) {
    favSave = favSaveFromLocalStorage
}

document.querySelectorAll("blockquotes").forEach(take => {
    let favID = take.getAttribute("id")
    
    let heartEmpt = iconReg.cloneNode()
    let heartFull = iconSol.cloneNode()

    take.append(heartEmpt)
    take.append(heartFull)

    if (favSave.includes(favID)) {
        heartFull.classList.add("heartDisplay")
    }

    take.addEventListener("click", function () {
        heartFull.classList.toggle("heartDisplay")

        if (heartFull.classList.contains("heartDisplay") && !favSave.includes(favID)) {
            favSave.push(favID)

        } else {
            let favRemove = favSave.indexOf(favID)
            favSave.splice(favRemove, 1)
        }

        localStorage.setItem("favSave", JSON.stringify(favSave))
    });
})

iconReg.remove()
iconSol.remove()