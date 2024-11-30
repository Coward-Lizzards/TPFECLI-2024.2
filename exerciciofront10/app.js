// Seleção de elementos
const taskForm = document.getElementById('taskForm');
const taskName = document.getElementById('taskName');
const taskDate = document.getElementById('taskDate');
const taskPriority = document.getElementById('taskPriority');
const taskList = document.getElementById('taskList');
const filterStatusButton = document.getElementById('filterStatus');
const sortPriorityButton = document.getElementById('sortPriority');
const sortDateButton = document.getElementById('sortDate');

// Array de objetos para armazenar tarefas
let tasks = [];
let filterStatus = 'all'; // all, completed, pending

// Função para adicionar tarefas
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = {
    id: Date.now(),
    name: taskName.value,
    date: taskDate.value,
    priority: taskPriority.value,
    completed: false,
  };
  tasks.push(task);
  taskForm.reset();
  renderTasks();
});

// Função para renderizar tarefas
function renderTasks() {
  taskList.innerHTML = '';

  let filteredTasks = tasks;

  if (filterStatus === 'completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (filterStatus === 'pending') {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('task-item');
    if (task.completed) li.classList.add('completed');
    if (isTaskUrgent(task)) li.classList.add('urgent');

    li.innerHTML = `
      <div>
        <strong class="priority-${task.priority}">${task.name}</strong> 
        <span>(${task.date})</span>
      </div>
      <div>
        <button onclick="toggleTaskCompletion(${task.id})">${task.completed ? 'Desmarcar' : 'Concluir'}</button>
        <button onclick="editTask(${task.id})">Editar</button>
        <button onclick="deleteTask(${task.id})">Excluir</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Funções auxiliares
function isTaskUrgent(task) {
  const today = new Date();
  const taskDate = new Date(task.date);
  return taskDate <= today && !task.completed;
}

function toggleTaskCompletion(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function editTask(id) {
  const task = tasks.find((task) => task.id === id);
