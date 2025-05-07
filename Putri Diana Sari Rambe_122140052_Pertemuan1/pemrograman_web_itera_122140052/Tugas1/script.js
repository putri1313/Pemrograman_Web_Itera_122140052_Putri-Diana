document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm hover:bg-gray-200 transition cursor-pointer';
            listItem.innerHTML = `
                <span class="flex-grow">${taskText}</span>
                <button class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md ml-2 delete-btn">Hapus</button>
            `;

            // Event untuk menandai selesai dengan mencoret
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('line-through');
                listItem.classList.toggle('text-gray-400');
            });

            todoList.appendChild(listItem);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.stopPropagation(); // Mencegah klik dari list item
            e.target.parentElement.remove();
        }
    });
});
