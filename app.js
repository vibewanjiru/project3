document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const addButton = document.querySelector('button');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText) {
            const listItem = createTodoItem(todoText);
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    }

    function createTodoItem(text) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${text} <button>Remove</button>`;
        listItem.querySelector('button').addEventListener('click', () => {
            listItem.remove();
        });
        return listItem;
    }
});
