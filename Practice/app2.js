// let lastName = "Reznor"

// let firstName = "Trent"

// let fullName = firstName + " " + lastName

// // console.log(fullName)

// let greeting = "Hi there"

// function salute() {
//     console.log(greeting + ", " + firstName + "!")
// }

// salute()



// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// add3Points()

// console.log(myPoints)



// let btn = document.querySelector("button")
// let error = document.getElementById("error")

// btn.addEventListener("click", purchase)

// function purchase() {
//     error.textContent = ("Someting went wrong ! Please try again")
// }



let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

total = document.getElementById("sum-el")

document.getElementById("add").addEventListener("click", add)
document.getElementById("sub").addEventListener("click", sub)
document.getElementById("div").addEventListener("click", div)
document.getElementById("div").addEventListener("click", mult)



function add() {
   total.textContent = "Sum = " + (num1 + num2)
}

function sub() {
   total.textContent = "Sub = " + (num1 - num2)
}

function div() {
   total.textContent = num1 / num2
}

function mult() {
   total.textContent = num1 * num2
}

