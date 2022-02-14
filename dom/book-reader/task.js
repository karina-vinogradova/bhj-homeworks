const fontSizeArr = Array.from(document.querySelectorAll('.font-size'));
const bookSize = document.getElementById('book');


for (let fz = 0; fz < fontSizeArr.length; fz++) {
    fontSizeArr[fz].addEventListener('click', getFontSize);
}

function getFontSize(event) {

    event.preventDefault();

    for (let fz of fontSizeArr) {
        fz.classList.remove('font-size_active');
    }

    event.target.classList.add('font-size_active');
   
    if (event.target.dataset.size === 'small') {
        bookSize.classList.remove('book_fs-big');
        bookSize.classList.add('book_fs-small');        
    }

    if (event.target.dataset.size === 'big') {
        bookSize.classList.add('book_fs-big');
        bookSize.classList.remove('book_fs-small');        
    }

    if (event.target.dataset.size == null) {
        bookSize.classList.remove('book_fs-big');
        bookSize.classList.remove('book_fs-small');        
    }
}

