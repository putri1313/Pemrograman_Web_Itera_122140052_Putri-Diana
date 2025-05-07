import { formatDateTime } from './modules/utils.js';

// Render daftar tugas ke DOM
export function renderTasks(taskManager) {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  taskManager.tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      taskManager.toggleComplete(index);
      renderTasks(taskManager);
    });

    const content = document.createElement('div');
    content.className = 'task-content';
    content.innerHTML = `
      <strong class="${task.completed ? 'completed' : ''}">${task.name}</strong>
      <br>
      <span>⏰ ${formatDateTime(task.deadline)}</span>
    `;

    li.appendChild(checkbox);
    li.appendChild(content);
    list.appendChild(li);
  });
}

// Tangani submit form tambah tugas
export function handleFormSubmit(e, taskManager) {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');
  const deadlineInput = document.getElementById('deadline-input');

  const name = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (!name || !deadline) return;

  taskManager.addTask(name, deadline);
  renderTasks(taskManager);

  e.target.reset();
}
