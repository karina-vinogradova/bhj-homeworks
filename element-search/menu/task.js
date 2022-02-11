const linksMenu = document.querySelectorAll('.menu__link');

for (let link of linksMenu) {
    let element = link.nextElementSibling;
    
    if (element && element.classList.contains('menu_sub')) {
        link.onclick = () => {
            const active = document.querySelector('.menu_active');
                       

            if (active && active !== element) {
                active.classList.remove('menu_active');
            }

            element.classList.toggle('menu_active');

            return false;
        
        }
    } 
    
}

