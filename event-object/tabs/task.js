const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', func);
}

function func(event) {

    let index = tabs.indexOf(event.currentTarget);

    let indexContent = tabContent.indexOf(event.currentTarget);

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab_active');
        tabContent[i].classList.remove('tab__content_active');
    }

    tabs[index].classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');
    
}

// Здесь по идее тоже можно было бы воспользовать findIndex, но я по прежнему не знаю как((