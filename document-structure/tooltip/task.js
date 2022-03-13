const elements= Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = document.querySelector('.tooltip');


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', getHint);
}

function getHint(event) {
    event.preventDefault();
    const activeHint = document.querySelector('.tooltip_active');

    if (activeHint) {
        if (event.target.title === activeHint.textContent) {
            activeHint.classList.remove('tooltip_active');
            return;
        }
        
        activeHint.classList.remove('tooltip_active');
    }

    tooltip.classList.add('tooltip_active');
    tooltip.textContent = event.target.title;

    tooltip.style.left = event.target.getBoundingClientRect().left + 'px';
    tooltip.style.top = event.target.getBoundingClientRect().top + 22 + 'px';
}
