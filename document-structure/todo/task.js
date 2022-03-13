
const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

function removeElement(event) {
    event.target.closest('.task').remove();
}

function addTask(event) {

    event.target.value = event.target.value.trim(); 

    const taskTitle = event.target.value;
    tasksList.innerHTML += `
        <div class="task">
            <div class="task__title">
            ${taskTitle}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `;

    event.target.value = null;

    const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    
    for (task of taskRemove) {
        task.addEventListener('click', removeElement);
    }
   
}

input.addEventListener('change', addTask);




