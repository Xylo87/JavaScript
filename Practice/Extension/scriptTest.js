const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji} !`
}

greetUser("Hello", "Xylo", "🤟")



function add(num1, num2) {
    return num1 + num2
}

console.log(add(75, 6897))



function getFirst(arr) {
    return arr[0]
}

console.log(getFirst(["Théo", 78, true]))