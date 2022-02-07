const clickButton = document.querySelector('.dropdown__value');
const dropdown = document.querySelector('.dropdown__list');
const dropdownList = document.querySelectorAll('.dropdown__item');

clickButton.addEventListener('click', addActive);

for (let item of dropdownList) {
    item.addEventListener('click', getContent);
}

function addActive(event) {
    dropdown.classList.add('dropdown__list_active');
}

function getContent(event) {
    event.preventDefault();
    let content = event.currentTarget.textContent;
    clickButton.textContent = content;
    dropdown.classList.remove('dropdown__list_active');
}
