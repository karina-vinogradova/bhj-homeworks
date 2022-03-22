const progress = document.getElementById('progress');

const form = document.getElementById('form');

document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (element) => {
        let uploader = element.loaded / element.total;
        progress.value = uploader;

    })

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', 'async');
    
    let formData = new FormData(document.forms.form);
    xhr.send(formData);
});







