const inputBox = document.getElementById("task-input");
const dueDateInput = document.getElementById('due-date-input');
const priorityInput = document.getElementById('priority-input');
const statusInput = document.getElementById('status-input');
const todoTable = document.getElementById('todo-table');
const todoCountTable = document.getElementById('todoCount');
const listContainer = document.getElementById("list-container");
const noTaskDiv = document.querySelector(".no-task");

function addTask(){
    if(inputBox.value.trim() === ''){
        alert("You must write something in task field");
    }
    else{
        let li = document.createElement("li");
        let nameDiv = document.createElement("div");
        nameDiv.classList.add('TaskName');
        let dateDiv = document.createElement("div");
        let priorityDiv = document.createElement("div");
        let statusDiv = document.createElement("div");
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add("edit");
        let deleteSpan = document.createElement("span");


        //content adding
        nameDiv.textContent= inputBox.value;
        dateDiv.textContent= dueDateInput.value;
        priorityDiv.textContent =priorityInput.value;
        statusDiv.textContent = statusInput.value;

        //adding
        li.append(nameDiv, dateDiv, priorityDiv, statusDiv, editBtn, deleteSpan);

        listContainer.appendChild(li);

        noTaskDiv.style.display="none";
    }
    // clear input 
    inputBox.value="";
    dueDateInput.value="";
    priorityInput.value="";
    statusInput.value="";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        saveData();
        if (listContainer.querySelectorAll('li').length === 0) {
            noTaskDiv.style.display = "flex";
        }
    }
}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


