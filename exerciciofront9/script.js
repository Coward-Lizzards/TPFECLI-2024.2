document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    const filterStatusButton = document.getElementById("filterStatus");
    const filterPriorityButton = document.getElementById("filterPriority");
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let filterStatus = "all"; // all, completed, pending
    let filterPriority = false;
  
    const saveTasks = () => localStorage.setItem("tasks", JSON.stringify(tasks));
  
    const renderTasks = () => {
      taskList.innerHTML = "";
  
      const filteredTasks = tasks.filter((task) => {
        if (filterStatus === "completed") return task.completed;
        if (filterStatus === "pending") return !task.completed;
        return true;
      });
  
      const sortedTasks = filterPriority
        ? filteredTasks.sort((a, b) => (a.priority > b.priority ? 1 : -1))
        : filteredTasks;
  
      sortedTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = `task-item ${task.urgent ? "urgent" : ""}`;
        li.innerHTML = `
          <span>
            <strong>${task.name}</strong> - ${task.date} - ${task.priority.toUpperCase()}
          </span>
          <div>
            <button onclick="toggleTask(${index})">${task.completed ? "Desmarcar" : "Completar"}</button>
            <button onclick="editTask(${index})">Editar</button>
            <button onclick="deleteTask(${index})">Excluir</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    };
  
    const checkUrgentTasks = () => {
      const now = new Date();
      tasks.forEach((task) => {
        const taskDate = new Date(task.date);
        task.urgent = taskDate - now < 2 * 24 * 60 * 60 * 1000; // 2 dias
      });
    };
  
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("taskName").value;
      const date = document.getElementById("taskDate").value;
      const priority = document.getElementById("taskPriority").value;
  
      tasks.push({ name, date, priority, completed: false, urgent: false });
      saveTasks();
      renderTasks();
      taskForm.reset();
    });
  
    window.toggleTask = (index) => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    };
  
    window.editTask = (index) => {
      const newName = prompt("Novo nome:", tasks[index].name);
      const newDate = prompt("Nova data (YYYY-MM-DD):", tasks[index].date);
      const newPriority = prompt("Nova prioridade (alta/media/baixa):", tasks[index].priority);
  
      if (newName) tasks[index].name = newName;
      if (newDate) tasks[index].date = newDate;
      if (newPriority) tasks[index].priority = newPriority;
  
      saveTasks();
      renderTasks();
    };
  
    window.deleteTask = (index) => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };
  
    filterStatusButton.addEventListener("click", () => {
      filterStatus = filterStatus === "all" ? "completed" : filterStatus === "completed" ? "pending" : "all";
      renderTasks();
    });
  
    filterPriorityButton.addEventListener("click", () => {
      filterPriority = !filterPriority;
      renderTasks();
    });
  
    // Inicialização
    checkUrgentTasks();
    renderTasks();
  });
  