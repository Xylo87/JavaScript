import quotes from "./quotes.js"
// ---> Import


// AFFICHAGE CITATIONS

for (let key in quotes) {
    
    let blocs = document.createElement("blockquotes")
    let blocTitle = document.createElement("h2")
    let blocPhrase = document.createElement("cite")
    let blocAuthor = document.createElement("small")

    
    document.body.appendChild(blocs)
    blocs.classList.add("quote")
    // ---> ajout + style des blocs de citations
    
    let titres = quotes[key].title
    blocTitle.append(titres)
    blocs.appendChild(blocTitle)
    // ---> captation + insert + ajout des titres
    
    
    let citations = quotes[key].content
    blocPhrase.append(citations)
    blocs.appendChild(blocPhrase)
    // ---> captation + insert + ajout des citations

    let auteurs = quotes[key].author
    blocAuthor.append(auteurs)
    blocs.appendChild(blocAuthor)
    blocAuthor.classList.add("small")
    // ---> captation + insert + ajout des auteurs + style des blocs de citations

    let identifiants = quotes[key].id
    blocs.setAttribute("id", identifiants)
    // ---> attribution des ids
}



// LOCAL STORAGE FAVORIS

function getFavorites() {
    const arrayFavorites = localStorage.getItem("favoris") 
    return arrayFavorites ? JSON.parse(arrayFavorites) : []
}

let favorites = getFavorites()



document.querySelectorAll("blockquotes").forEach(take => {
    take.addEventListener("click", function () {
        favorites.push(take.getAttribute("id"))
        localStorage.setItem("favoris", JSON.stringify(favorites))
        TitreFavs.innerText = localStorage.getItem("favoris")
    })
});

// SUPPRIMER ITEM DONT VALEUR EST DéJà PRésente ???


let TitreFavs = document.createElement("h1")
document.body.prepend(TitreFavs)
TitreFavs.innerText = localStorage.getItem("favoris")
// ---> inclure les ids des favoris dans le document

