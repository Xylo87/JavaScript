let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true


let message = ""

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

// let start = document.getElementById("start")
// let newCard = document.getElementById("start")

function startGame() {
    renderGame()
}



function renderGame() {
    
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20 ) {
        message = "Draw another card ?"
    } else if (sum === 21) {
        message = "BLACKJACK !!!"
        hasBlackJack = true
    } else {
        message = "You lose !"
        isAlive = false
    }
    
    messageEl.textContent = message
    
    console.log(hasBlackJack)
    console.log(isAlive)
}



function newCard() {
    console.log("Drawing a newcard from the deck !")
    let card = 8
    sum += card
    cards.push(card)
    renderGame()
}





// let age = 22

// if (age < 21) {
//     console.log("You cannot enter the club !")
// } else {
//     console.log("Welcome !")
// }


// let age = 100

// if (age < 100) {
//     console.log("no")
// } else if (age === 100) {
//     console.log("ok")
// } else {
//     console.log("no")
// }





// let experience = ["arbogast", 37, true]

// experience.push(6)
// // ---> objet.methode

// console.log(experience)

// experience.pop()

// console.log(experience)





// for (let i = 0; i < 11; i +=2) {
//     console.log(i)
// }



// let cardsTest = [7, 3, 9]

// for (let i = 0; i < cardsTest.length; i++) {
//     console.log(cardsTest[i])
    
// }



// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }