let firstCard = 6
let secondCard = 10

let sum = firstCard + secondCard

if (sum < 21 ) {
    console.log("Draw another card ?")
} else if (sum === 21) {
    console.log("BLACKJACK !!!")
}