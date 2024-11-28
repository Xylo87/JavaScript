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

document.querySelectorAll("blockquotes").forEach(take => {
    let heartEmpt = iconReg.cloneNode()
    let heartFull = iconSol.cloneNode()

    take.append(heartEmpt)
    take.append(heartFull)

    take.addEventListener("click", function () {
        heartFull.classList.toggle("heartDisplay")
    });
})

iconReg.remove()
iconSol.remove()





// LOCAL STORAGE FAVORIS


// function getFavorites() {
//     const arrayFavorites = localStorage.getItem("favoris") 
//     return arrayFavorites ? JSON.parse(arrayFavorites) : []
// }

// let favorites = getFavorites()


// document.querySelectorAll("blockquotes").forEach(take => {
//     take.addEventListener("click", function () {
//         favorites.push(take.getAttribute("id"))
//         localStorage.setItem("favoris", JSON.stringify(favorites))
//         TitreFavs.innerText = localStorage.getItem("favoris")
//     })
// });



// SUPPRIMER ITEM DONT VALEUR EST DéJà PRésente ???


// let foobar = [1, 2, 9, 47, 47, 15, 8, 9, 36]

// console.log(foobar)

// function test(tableau) {
//     let tableaufiltre = tableau.filter(function (value, index) { 
//         // let valide = tableau.indexOf(value) === index;
//         let valide = tableau.indexOf(value) === index;
//         return valide
//     }) 
//     return tableaufiltre
// }

// console.log(test(foobar))



// INCLURE LES IDS DES FAVORIS DANS LE DOCUMENT

// let TitreFavs = document.createElement("h1")
// document.body.prepend(TitreFavs)
// TitreFavs.innerText = localStorage.getItem("favoris")

