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

// function onButtonClick(event) {
//     event.preventDefault()
// }
// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", onButtonClick)
// })
// empêche le comportement par défaut d'un écouteur d'évènement > ex. empêcher la soumission d'un formulaire pas correctement rempli

// document.querySelector("div").addEventListener("click", function name(params) {
//     console.log("click div")
// } )
// function onButtonClick(event) {
//     console.log("button click")
//     event.preventDefault()
//     event.stopPropagation()
// }
// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", onButtonClick)
// })
// empêcher la propagation d'un évènement d'un parent à l'autre

// document.querySelector("div").addEventListener("click", function name(params) {
//     console.log("click div")
// } )
// function onButtonClick(event) {
//     console.log("button click")
//     event.preventDefault()
//     event.stopPropagation()
// }
// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", onButtonClick, {
//         once: true
//     })
// })
// évènement écouté une fois uniquement





// FUNCTION SYNCHRONE
// function wait(duration) {
//     // TIMESTAMP
//     const t = Date.now()
//     while(Date.now() - t < duration) {
//     }
// }

// console.log("Bonjour")
// wait(1000)
// console.log("Les gens")



// // FUNCTION NATIVE ASYNCHONE
// setTimeout(() => {
//     console.log("les gens")
// }, 1000)

// console.log("Au revoir")


// FUNCTION NATIVE ASYNCHONE
// const u = setInterval(() => {
//     console.log("les gens")
// }, 2000)


// IDENTIFIANT DU TIMER -> METHODES ASSOCIÉES -> clearInterval(id)/clearTimeout(id)
// console.log(u)


// TP (affichage un certain nombre de fois)
// let i = 0
// const w = setInterval(() => {
//     i++
//     console.log("Hello")
//     if (i >= 5) {
//         clearInterval(w)
//     }
// }, 1000)


// TP (décompte)
function decompte(n) {
    console.log(n)
    const x = setInterval(() => {
        n--
        console.log(n)
        if (n === 0) {
            clearInterval(x)
        }
    }, 1000)
}

// decompte(3)
// decompte(5)
// DECOMPTES PARALLELES -> ASYNCHRONE





// PROMESSES

// PROMESSE QUI S'AUTO-RESOUT
// const p = new Promise((resolve, reject) => {
//     resolve(4)
//     // reject(4)
// })
// console.log(p)

// PROMESSE RESOLUE OU REJETÉE
// p.then((n) => {
//     console.log("Le nombre est", n)
// }).p.catch((e) => {
//     console.log("Echec", e)
// })

// ENCHAINEMENT DE PROMESSES > PROMESSE RETOURNE UNE VALEUR QUI RENVOIE ELLE-MEME UNE PROMESSE > ERREUR "CATCH" PEUT ÉGALEMENT RENVOYER UNE VALEUR QUI EST UNE PROMESSE
// p
//     .then((n) => {
//         console.log("Le nombre est", n)
//         return 5
//     })  
//     .then((n) => console.log("Le nombre est 2", n))
//     .catch((e) => {
//         console.log("Echec", e)
//         return 2
//     })

// EXECUTÉ QUOI QU'IL ARRIVE, QUE LA PROMESSE SOIT EXÉCUTÉE OU NON
// .finally(() => console.log("aaa"))



// SYNTAXE PLUS SIMPLE
function wait (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration);
    })
}

function waitAndFail (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration)
        }, duration);
    })
}

// wait(2000)
//     .then(() => {
//         console.log("Attente 2s")
//         return wait(1000)
//     })
//     .then(() => {
//         console.log("Attente 1s")
//     })



// SYNTAXE À UTILISER
// async function main() {
//     return 4
// }

// async function main() {
//     throw new Error();
// }

async function main() {
    try {
    await waitAndFail(2000)
        console.log("Bonjour")
    await wait(1000)
        console.log("Hello")
    } catch (e) {
        console.log("Error")
    }
}

async function main2() {
    const duration = await wait(2000)
    console.log(`Duration: ${duration}`)
    return 5
}

// main()
//     .then(n => console.log)

// main2()





// FETCH

async function callAPI() {
    // const r = await fetch("https://jsonplaceholder.typicode.com/users", {
    //     method: "GET",
    //     headers: {
    //         "Accept" : "application/json",
    //     }
    // })
    
    const r = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            // DONNÉES RECUES ACCEPTÉES
            "Accept" : "application/json",
            // TYPE DE DONNÉES ENVOYÉES AVEC POST
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title: "Mon premier article"})
    })

    console.log(r.headers)
    console.log(r.headers.get("Content-Type"))

    if (r.ok === true) {
        const data = await r.json()
        return data
    } else {
        throw new Error("Impossible de contacter le serveur")
    }
}
console.log(callAPI())

// OBJET RESPONSE > NATIF À JS



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(r => r.text())
//     .then(body => console.log(body))





// const louis = {
//     name : "Louis",
//     age : 26,
//     pseudo : true,
//     notes : [2, 5, 6, 18]
// }

// const jsonLouis =  JSON.stringify(louis)

// console.log(jsonLouis)

// const jsonParseLouis = JSON.parse(jsonLouis)

// console.log(jsonParseLouis)
