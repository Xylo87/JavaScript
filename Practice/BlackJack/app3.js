// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let message = ""

let hasBlackJack = false
let isAlive = false

let player = {
    name: "Per",
    chips: 145
}

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

// let start = document.getElementById("start")
// let newCard = document.getElementById("newcard")



function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}



function startGame() {
    isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
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
}



function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
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





// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTimeams() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTimeams()

// console.log (fastestRace)



// function totalRaceTime() {
//     return player1Time + player2Time
// }

// let total = totalRaceTime()

// console.log(total)



// function rollDice() {
//     return Math.floor(Math.random() * 13) + 1 
// }

// dice = rollDice()

// console.log(dice)

// for (let i = 0; i < 11; i++) {
//     console.log(Math.floor(Math.random() * 6) + 1)
// }





// let hasCompletedCourse = true
// let givesCertificate = true

// function generateCertificate() {
//     if (hasCompletedCourse && givesCertificate === true) {
//         console.log("Generating certificate...")
//     }
// }

// generateCertificate()


// let hasSolvedChallenge = false
// let hasHintsLeft = false 

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution...")
// }


// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new file we think you will like !")
// }





let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Stéphane Smail",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

// console.log(course.tags)
// console.log(course["tags"])

let castle = {
    title : "Castle of Arghhhhh",
    price : 190,
    isAvalable : false,
    equipements : ["crossbow", "living armor", "iron maiden"],
    sayHello : function () {
        console.log("Hi !")
    }
}

// console.log(castle)
// console.log(castle.equipements)
// console.log(castle.isAvalable)

// Object + Method
// castle.sayHello()




let Foobar = {
    name : "Thomas Mandolini",
    age : 38,
    country : "France"
}

function logData() {
    console.log(Foobar.name + " is " + Foobar.age + " years old and lives in " + Foobar.country + ".")
}

// logData()




// let age = 17

// if (age < 6) {
//     console.log("Free")
// } else if (age < 18) {
//     console.log("Child discount") 
// } else if (age < 27) {
//     console.log("Student discount") 
// } else if (age < 67) {
//     console.log("Full price") 
// } else {
//     console.log("Senior citizen discount")
// }




let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largest countries in the world :")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }



let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries2.pop()
largeCountries2.shift()

largeCountries2.push("Pakistan")
largeCountries2.unshift("China")

// console.log(largeCountries2)



let dayOfMonth = 13
let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// } else {
//     console.log("Is ok")
// }



let hands = ["rock", "paper", "scissor"]
// let randomIndex = Math.floor(Math.random() * hands.length)
// let randomItem = hands[randomIndex]

// console.log(randomItem)

function randomItem() {
    let randomIndex = Math.floor(Math.random() * hands.length)
    return hands[randomIndex]
}

// console.log(randomItem())




let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sort() {
    fruit.forEach(element => {
        if (element === "🍎") {
            appleShelf.append(element)
        } else {
            orangeShelf.append(element)
        }
    });
}

// sort()

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            appleShelf.textContent += "🍊"
        }
    }
}

// sortFruit()