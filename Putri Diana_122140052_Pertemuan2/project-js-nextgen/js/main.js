import { updateClock } from './modules/utils.js';
import { TaskManager } from './modules/data.js';
import { renderTasks, handleFormSubmit } from './app.js';

const clockElement = document.getElementById('clock');

// Tampilkan waktu real-time
setInterval(() => updateClock(clockElement), 1000);
updateClock(clockElement); // inisialisasi awal

// Inisialisasi manajemen tugas
const taskManager = new TaskManager();
taskManager.loadFromStorage();
renderTasks(taskManager);

// Event listener untuk form tambah tugas
const form = document.getElementById('task-form');
form.addEventListener('submit', (e) => handleFormSubmit(e, taskManager));
