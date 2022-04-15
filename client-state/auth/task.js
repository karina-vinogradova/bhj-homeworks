const signin = document.querySelector('.signin');
const signinBtn = document.querySelector('.btn');
const signoutBtn = document.getElementById('signout__btn');
const welcome = document.querySelector('.welcome');
const inputs = Array.from(document.querySelectorAll('.control'));
const signOut = document.querySelector('.signout');

if (localStorage.user_id) {
    welcomeUser(localStorage.user_id);
    signinBtn.classList.add('signin__unvisible');
}

signin.classList.add('signin_active');

signinBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        if(xhr.readyState === xhr.DONE) {
            let response = JSON.parse(xhr.response);
            if (response.success) {
                localStorage.setItem('user_id', response.user_id);
                welcomeUser(response.user_id);
                signinBtn.classList.add('signin__unvisible');
            } else {
                alert('Неверный логин/пароль');
                formReset();
            }
        } 
    });

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

    const formData = new FormData(document.getElementById('signin__form'));
    xhr.send(formData);
});

signoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    welcome.classList.remove('welcome_active');
    signOut.classList.remove('signout__active');
    signinBtn.classList.remove('signin__unvisible');
    formReset();
});

function welcomeUser(user_id) {
    welcome.classList.add('welcome_active');
    welcome.textContent = `Добро пожаловать, пользователь ${user_id}`;
    signOut.classList.add('signout__active');
}

function formReset() {    
    for (let item of inputs) {
        item.value = null;
    }
}