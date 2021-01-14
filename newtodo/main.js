const toDoContainer = document.getElementById('toDoContainer');
const addToDoButton = document.getElementById('addToDoButton');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('todo-styling');
    paragraph.innerText = inputField.value;
    inputField.value = "";
    toDoContainer.appendChild(paragraph);

    paragraph.addEventListener('click', () =>{
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    })
    
})
const themeToggleButton = document.querySelector('.theme-toggle-button');

themeToggleButton.addEventListener('click', ()=> {
    const contentRight = document.querySelector('.content-right');
    contentRight.classList.toggle('blue');
    
})