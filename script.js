const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


let todoItems = [];

function addTodo() {
  const todo = {
    text : "New todo",
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);

  const list = document.querySelector('.todo-list');
  list.insertAdjacentHTML('beforeend', `
    <li class="TODO_ITEM" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox" class="z" onclick="updateCount()"/>
      <label for="${todo.id}"></label>
      <span>${todo.text}</span>
      <button class="TODO_DELETE" onclick="deleteTodo(${todo.id})">
        Delete
      </button>
    </li>
  `);
  updateCount();
}

function deleteTodo(key) {
  todoItems = todoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
  updateCount();
}

function updateCount() {
    var x = document.querySelectorAll('.z').length;
  var y = document.querySelectorAll('.z:checked').length;
  document.getElementById("item-count").innerHTML = x;
  document.getElementById("unchecked-count").innerHTML = x-y;
};