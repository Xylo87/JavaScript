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

const ul = document.querySelector("ul li:first-of-type")
// console.log(
//     ul.nodeName,
//     // nom du noeud HTML sur lequel on se trouve > en MAJ

//     ul.innerHTML,
//     // récupérer structure HTML de l'élément > peut être modifié si redéclaré >
//     // > ul.innerHTML = "hello"
//     // console.log(ul.innerHTML)

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