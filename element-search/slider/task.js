const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const sliderDots = document.querySelectorAll('.slider__dot')
const sliderItems = document.querySelectorAll('.slider__item');

let count = 0;

function switchSlider(index) {
    if (index > sliderItems.length - 1) {
        count = 0;
    }

    if (index < 0) {
        count = sliderItems.length - 1;
    }

    for (let item of sliderItems) {
        item.classList.remove('slider__item_active');
    }

    for (let item of sliderDots) {
        item.classList.remove('slider__dot_active');
    }

   sliderItems[count].classList.add('slider__item_active');
   sliderDots[count].classList.add('slider__dot_active');
}

next.onclick = () => {
    switchSlider(count += 1);
}

prev.onclick = () => {
    switchSlider(count -= 1)
}

const arrDots = Array.from(sliderDots);
for (let i = 0; i < arrDots.length; i++) {
    arrDots[i].onclick = () => {
        count = i;
        switchSlider(count);
    }
}

switchSlider(count);


