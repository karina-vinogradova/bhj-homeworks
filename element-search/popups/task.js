const open = document.getElementById('modal_main');
open.classList.add('modal_active');

const closeButton = document.querySelectorAll('.modal__close');

for (let item of closeButton) {
    item.onclick = () => {
        item.closest('.modal').classList.remove('modal_active');
    }
   
}

const success = document.querySelector('.show-success');
const successWindow = document.getElementById('modal_success');

success.onclick = () => {
    open.classList.remove('modal_active');
    successWindow.classList.add('modal_active');
}

// Окно закрывается по кнопке Хорошо сделано!
const btnSuccess = document.querySelector('.btn_success');

btnSuccess.onclick = () => {
    btnSuccess.closest('.modal').classList.remove('modal_active');
}