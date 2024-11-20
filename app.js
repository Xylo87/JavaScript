// JAVASCRIPT NAVIGATEUR

// console.log(location)
// console.log(window.location)

// console.log(setTimeout(console.log, 3000))
// console.log(window.setTimeout(console.log, 3000))

// générer une variable globale (passer info d'un script à un autre)
// window.a = 3

// n'exécute pas le script avant la fin de l'alerte
// alert("DANGER")




// MANIPULER LE DOM


// console.log(document.querySelector("#hello"))

// console.log(document.querySelectorAll("li"))

// const lis = document.querySelectorAll("li")
// console.log(lis[1])
// lis.forEach((v, i) => { 
//     console.log(v, i)})

// const ul = document.querySelector("ul li:first-of-type")
// console.log(
//     ul.nodeName,
//     // nom du noeud HTML sur lequel on se trouve > en MAJ

    // ul.innerHTML
//     // récupérer structure HTML de l'élément > peut être modifié si redéclaré >
    // ul.innerHTML = "hello"
    // console.log(ul.innerHTML)

//     ul.innerText,
//     // récupérer texte sans structure HTML > modifiable également

//     ul.textContent,
//     // récupérer texte en respecter simplement les espaces de la structure HTML + éléments cachés + JavaScript

//     ul.setAttribute("hidden", "hidden"),
//     // remplacer un attribut par un autre

//     ul.removeAttribute("hidden"))

// console.log(
//     ul.getAttribute("class")
// )
// récupérer l'attribut d'un élément

// console.log(
//     ul.classList.remove("red")
// )
// lister/enlever une classe à un élément

// setInterval(() => {
//     ul.classList.toggle("red")
// }, 1000)
// activer/désactiver une classe > par intermittence de X ms avec setInterval

// console.log(
//     ul.classList.add("green")
// )
// ajouter une classe à un élément

// const li = document.querySelector("ul li:first-of-type")

// console.log(
//     li.style.color = "blue",
//     li.style.fontWeight = "bold"
// )
// modifier un attribut style d'un élément > différent de modification de classe

// console.log(getComputedStyle(li).color)
// obtenir n'importe quelle propriété d'un élément



// CRÉER UN ÉLÉMENT

// const newLi = document.createElement("li")
// newLi.innerHTML = "Bonjour les gens"
// document.querySelector("ul").append(newLi)
// document.querySelector("ul").prepend(newLi)
// créer un nouvel élément HTML et l'ajouter à la fin ou au début dans une structure parente > même référence d'element créé, déplacement d'élément, pas de clonage

// const li = document.querySelector("ul li:first-of-type")
// const ul = document.querySelector("ul")
// ul.append(li)
// > déplacement d'élément, pas de clonage > ex. 2

// const div = document.createElement("div")
// div.innerHTML = "Bonjour les gens"
// ul.insertAdjacentElement("afterbegin", div)
// insérer un élément donné à une position donnée d'un autre élément



// SELECTIONS D'ENFANTS/PARENTS

// console.log(
//     ul.querySelector("li")
// )
// sélection d'un enfant > parent et enfant identifié par la définition de la variable

// console.log(
//     ul.children
// )

// console.log(
//     ul.childNodes
// )
// sélectionne tous les éléments noeuds (enfants + élements non-HTML)

// ul.firstChild
// premier noeud enfant

// ul.firstElementChild
// premier élément HTML enfant

// ul.childElementCount / ul.children.length
// afficher le nombre d'élements HTML enfants

// li.parentNode / li.parentElement
// donne noeud/élément parent

// li.nextElementSibling / li.nextSibling
// élément suivant / noeud suivant

// li.previousElementSibling / li.previousSibling
// élément précédent / noeud précédent


// console.log(
//     li.remove()
// )
// supprime élément de la page

// ul.append(li.cloneNode(true))
// dupliquer un élément et ses enfants (élements HTML)

// paragraph  = "bla bla bla"
// paragraph.replace("bla", "bloop")
// remplacer un morceau de chaîne de caractère par un autre

// console.log(ul.contains(li))
// vérifier si élément en contient un autre (affiche True si c'est le cas)




// EXOS

// async function main () {
//     const wrapper = document.querySelector("#lastPosts")
// const loader = document.createElement("p")
// loader.innerText = "Chargement..."
// wrapper.append(loader)
// const r = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
//     headers: {
//         Accept: "application/js"
//     }
// })
// if (!r.ok) {
//     loader.innerText = "Impossible de charger les articles"
//     loader.style.color = "red"
//     return
// }
// }

// main()



// EVENT LISTENERS

// const button = document.querySelector("button")
// // button.addEventListener("click", function name() {
// //     alert("Bonjour")
// // })
// // évènement au clic

// button.addEventListener("click", function(event){
//     console.log(event.target, event.currentTarget)
// }) 
// target > élément HTML réel
// currentTarget > élement sur lequel est situé l'écouteur d'évènements


// function onButtonClick(event) {
//     console.log(event.currentTarget)
// }
// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", onButtonClick)
// })
// obtenir des infos sur les différents boutons sur lequels on a cliqué

function onButtonClick(event) {
    console.log(event.currentTarget)
}
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", onButtonClick)
})