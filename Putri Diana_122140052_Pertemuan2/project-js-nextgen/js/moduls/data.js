export class Task {
    constructor(name, deadline) {
      this.name = name;
      this.deadline = deadline;
      this.completed = false;
    }
  }
  
  export class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(name, deadline) {
      this.tasks.push(new Task(name, deadline));
      this.saveToStorage();
    }
  
    toggleComplete(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveToStorage();
    }
  
    loadFromStorage() {
      const data = JSON.parse(localStorage.getItem('tasks'));
      if (data) {
        this.tasks = data.map(task => Object.assign(new Task(), task));
      }
    }
  
    saveToStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  