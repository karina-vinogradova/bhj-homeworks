const editor = document.getElementById('editor');
const resetButton = document.querySelector('.button__reset');
localStorage.test = 'testValue, can`t delete from localStorage';
console.log(localStorage);

if (!localStorage.textarea) {
    localStorage.textarea = '';
} else {
    editor.value = localStorage.textarea;
}

editor.addEventListener('input', () => {
    localStorage.textarea = editor.value;
    console.log(localStorage);
});

resetButton.addEventListener('click', () => {
    localStorage.removeItem('textarea');
    console.log(localStorage);
});

