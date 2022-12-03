"use strict" //

//
const input = document.querySelector('.todo-input');
const inputId = document.getElementById('input');
const button = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');


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
    
}
