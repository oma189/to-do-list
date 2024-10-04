
// Get elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Initialize task array
let tasks = [];

// Function to add task
function addTask(task) {
    tasks.push({ text: task, completed: false });
    renderTaskList();
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}

// Function to toggle task completion
function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTaskList();
}

// Function to render task list
function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        taskElement.classList.add('task');
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? 'Uncomplete' : 'Complete';
        toggleBtn.onclick = () => toggleCompletion(index);
        taskElement.appendChild(deleteBtn);
        taskElement.appendChild(toggleBtn);
        taskList.appendChild(taskElement);
    });
}

// Add event listener to add task button
addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

var firstName = ' oluoma';
console.log(firstName)