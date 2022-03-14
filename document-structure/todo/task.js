
const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const btn = document.querySelector('.tasks__add');

function addTask() {
    if (input.value !== '') {
        tasksList.insertAdjacentHTML('afterBegin', `
        <div class="task">
            <div class="task__title">${input.value.trim()}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        );
        
    input.value = null;
    }
   
    const taskRemove = tasksList.querySelector(".task").querySelector(".task__remove");

    taskRemove.onclick = () => {
        taskRemove.closest('.task').remove();
        return false;
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
});




