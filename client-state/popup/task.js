const arrCookies = document.cookie.split('; ');
console.log(arrCookies)

for (let value of arrCookies) {
    if (value !== 'popup=close') {
        openPopup();
    }
}

function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}`;
}

function deleteCookie(name) {
    document.cookie = `${name}=; Expires=Mon, 11 Apr 2022 00:00:00 GMT`;
}

function openPopup() {
    const open = document.getElementById('subscribe-modal');
    open.classList.add('modal_active');

    const closeButton = document.querySelectorAll('.modal__close');

    for (let item of closeButton) {
        item.onclick = () => {
            item.closest('.modal').classList.remove('modal_active');
            setCookie('popup', 'close');
        }   
    }

    // Закрытие окна по клику вне попапа
    const modal__content = document.querySelector('.modal__content');
    document.addEventListener('click', (e) => {
        if (e.target !== modal__content) {
            open.classList.remove('modal_active');
            setCookie('popup', 'close');
        }
    });
}

// deleteCookie('popup');





