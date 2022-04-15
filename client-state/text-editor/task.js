const editor = document.getElementById('editor');
const resetButton = document.querySelector('.button__reset');
// localStorage.test = 'testValue, can`t delete from localStorage';

editor.value = localStorage.getItem('textarea');

editor.addEventListener('input', () => {
    localStorage.textarea = editor.value;
});

resetButton.addEventListener('click', () => {
    localStorage.removeItem('textarea');
});

