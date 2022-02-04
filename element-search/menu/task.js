const linksMenu = document.querySelectorAll('.menu__link');

for (let link of linksMenu) {
    let element = link.nextElementSibling;
    console.log(element)
    if (element && element.classList.contains('menu_sub')) {
        link.onclick = () => {
            element.classList.add('menu_active');

            const active = document.querySelector('.menu_active');

            if (active && active !== element) {
                active.classList.remove('menu_active');
            }

            return false;
        }
    }
}
