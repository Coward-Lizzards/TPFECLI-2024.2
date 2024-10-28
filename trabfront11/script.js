// Carrega as tarefas armazenadas no localStorage quando a página é carregada
window.onload = () => {
    loadTasks();
    checkDeadlines();
  };
  
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filterStatus = "all"; // Valores: "all", "completed", "pending"
  let sortByPriority = false;
  
  // Função para adicionar uma nova tarefa
  function addTask() {
    const name = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
  
    if (name === "" || dueDate === "") {
      alert("Por favor, preencha o nome e a data de conclusão da tarefa.");
      return;
    }
  
    const newTask = {
      id: Date.now(),
      name,
      dueDate,
      priority,
      completed: false,
    };
  
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    clearForm();
  }
  
  // Função para salvar tarefas no localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Função para carregar tarefas do localStorage e exibir na lista
  function loadTasks() {
    renderTasks();
  }
  
  // Função para exibir a lista de tarefas com filtros e ordenações
  function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    let filteredTasks = tasks;
  
    // Filtra tarefas pelo status
    if (filterStatus === "completed") {
      filteredTasks = filteredTasks.filter((task) => task.completed);
    } else if (filterStatus === "pending") {
      filteredTasks = filteredTasks.filter((task) => !task.completed);
    }
  
    // Ordena tarefas pela prioridade
    if (sortByPriority) {
      filteredTasks = filteredTasks.sort((a, b) => {
        const priorities = { alta: 1, media: 2, baixa: 3 };
        return priorities[a.priority] - priorities[b.priority];
      });
    }
  
    // Exibe cada tarefa na lista
    filteredTasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${task.name} - ${task.dueDate} - ${task.priority}</span>
        <span>
          <button onclick="toggleComplete(${task.id})">
            ${task.completed ? "Desmarcar" : "Concluir"}
          </button>
          <button onclick="editTask(${task.id})">Editar</button>
          <button onclick="deleteTask(${task.id})">Excluir</button>
        </span>
      `;
      li.classList.toggle("completed", task.completed);
      taskList.appendChild(li);
    });
  }
  
  // Função para alternar o status de uma tarefa (concluída/não concluída)
  function toggleComplete(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
  }
  
  // Função para editar uma tarefa
  function editTask(id) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      const newName = prompt("Nome da tarefa:", task.name);
      const newDueDate = prompt("Data de conclusão:", task.dueDate);
      const newPriority = prompt(
        "Prioridade (alta, media, baixa):",
        task.priority
      );
  
      if (newName && newDueDate && newPriority) {
        task.name = newName;
        task.dueDate = newDueDate;
        task.priority = newPriority;
        saveTasks();
        renderTasks();
      }
    }
  }
  
  // Função para excluir uma tarefa
  function deleteTask(id) {
    tasks =
  