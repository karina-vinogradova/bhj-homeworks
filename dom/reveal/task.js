const revealList = document.querySelectorAll('.reveal');



function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {        
        return false;
    }
   
    return true;
}


function getReveal() {
   for (let reveal of revealList){
       if (isVisible(reveal)) {
            reveal.classList.add('reveal_active');
       } else {
            reveal.classList.remove('reveal_active');
       }
    } 
}

document.addEventListener('scroll', getReveal);