"use strict" //

//
const input = document.querySelector('.todo-input');
const inputId = document.getElementById('input');
const button = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//
button.addEventListener('click', addTodo);


function addTodo(event) {
    event.preventDefault(); // don't refresh

    const todoDiv = document.createElement('div'); // create div
    todoDiv.classList.add("todo");

    const todoLi = document.createElement('li');  // create li
    todoLi.innerText = 'hey';
    todoLi.classList.add("todo-item");

    todoDiv.appendChild(todoLi);

    const completedButton = document.createElement('button');  // create completed button
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complate-btn");

    todoDiv.appendChild(completedButton)

    const deleteButton = document.createElement('button');  // create delete button
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
    deleteButton.classList.add("delete-btn");

    todoDiv.appendChild(deleteButton)
    todoList.appendChild(todoDiv); // append to list 
}
