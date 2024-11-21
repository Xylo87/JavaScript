



// AJOUTER UNE TASK-CARD

const addBtn = document.querySelector("#btn")
const taskCard = document.querySelector(".todoCard")
const tasksContainer = document.querySelector("#todoCards")


function addTask() {
    const newTask = taskCard.cloneNode(true)
    tasksContainer.append(newTask)
    
    const newTextArea = newTask.querySelector(".task")
    newTextArea.value = "New Task"
    // newTextArea.innerText = "New Task"
    
    addNumber()
    
    
    // SUPPRESSION NEW TASK
    
    const newDelBtn = newTask.querySelector(".delBtn")
    newDelBtn.addEventListener("click", function() {
        deleteTask(newTask)
        
        subNumber()
    })

}

addBtn.addEventListener("click", addTask)



// FONCTION DE CONFIG DU BOUTON DE SUPPRESSION

function deleteTask(task) {
    task.remove()
}



// SUPPRESSION DE LA TASK ORIGINALE

const delBtn = document.querySelector(".delBtn")

delBtn.addEventListener("click", function() {
    deleteTask(taskCard)

    subNumber()
})



// COMPTEUR

const counter = document.querySelector("#count")
let count = 1

function addNumber() {
    count = count + 1
    counter.innerText = count
}

function subNumber() {
    count = count - 1
    counter.innerText = count
}