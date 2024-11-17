// JAVASCRIPT NAVIGATEUR

console.log(location)
// console.log(window.location)

// console.log(setTimeout(console.log, 3000))
// console.log(window.setTimeout(console.log, 3000))

// générer une variable globale (passer info d'un script à un autre)
// window.a = 3

// n'exécute pas le script avant la fin de l'alerte
// alert("DANGER")


// MANIPULER LE DOM

console.log(document.querySelector("#hello"))

console.log(document.querySelectorAll("li"))

const lis = document.querySelectorAll("li")
console.log(lis[1])
lis.forEach((v, i) => { 
    console.log(v, i)})