// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Add task event
addTaskButton.addEventListener('click', addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete-btn');
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
  taskInput.value = '';
}
