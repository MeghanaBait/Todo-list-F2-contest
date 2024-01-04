const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const noTaskDiv = document.querySelector(".no-task");

function addTask(){
    if(inputBox.value.trim() === ''){
        alert("You must write something in task field");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let deleteSpan = document.createElement("span");
        li.appendChild(deleteSpan);

        listContainer.appendChild(li);

        noTaskDiv.style.display="none";
    }
    // clear input 
    inputBox.value="";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        if (listContainer.querySelectorAll('li').length === 0) {
            noTaskDiv.style.display = "flex";
        }
    }
}, false);

