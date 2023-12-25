const textBox = document.getElementById('text-box');
const taskList = document.getElementById('taskList');

function addTask() {
    if(textBox.value === "") {
        alert("Please add your task");
    } else {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src ="./images/circle.png";
        let span = document.createElement('span');
        span.innerHTML = textBox.value;
        let deleteSpan = document.createElement('span');
        deleteSpan.className = "fa-regular fa-trash-can";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(deleteSpan);
        taskList.appendChild(li);
    }
    textBox.value = "";
    saveData();
}



/* function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
} 

function showTaskList() {
    taskList.innerHTML = localStorage.getItem("data");
}

showTaskList();  */