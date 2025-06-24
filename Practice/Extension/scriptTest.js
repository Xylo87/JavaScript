const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting) {
    welcomeEl.textContent = `${greeting} Xylo !`
}

greetUser("Hello")