const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));

sliderDots[0].classList.add('slider__dot_active');


next.onclick = () => {
    const activeItem = sliderItems.findIndex(slide => slide.classList.contains('slider__item_active'));
    if (activeItem === sliderItems.length - 1) {
        sliderItems[activeItem].classList.remove('slider__item_active');
        sliderItems[0].classList.add('slider__item_active');

        sliderDots[activeItem].classList.remove('slider__dot_active');
        sliderDots[0].classList.add('slider__dot_active');
    } else {       
        sliderItems[activeItem].classList.remove('slider__item_active');
        sliderItems[activeItem + 1].classList.add('slider__item_active');

        sliderDots[activeItem].classList.remove('slider__dot_active');
        sliderDots[activeItem + 1].classList.add('slider__dot_active');
    }
}

prev.onclick = () => {
    const activeItem = sliderItems.findIndex(slide => slide.classList.contains('slider__item_active'));
    if (activeItem === 0) {
        sliderItems[0].classList.remove('slider__item_active');
        sliderItems[sliderItems.length - 1].classList.add('slider__item_active');

        sliderDots[0].classList.remove('slider__dot_active');
        sliderDots[sliderItems.length - 1].classList.add('slider__dot_active');
    } else {
        sliderItems[activeItem].classList.remove('slider__item_active');
        sliderItems[activeItem - 1].classList.add('slider__item_active');

        sliderDots[activeItem].classList.remove('slider__dot_active');
        sliderDots[activeItem - 1].classList.add('slider__dot_active');
    }
}

// Переключение изображение по точкам теперь не работает, так как я не знаю как сделать это используя findIndex
// const activeDot = sliderDots.findIndex(slideDot => slideDot.classList.contains('slider__dot_active'));
// for (let dot of sliderDots) {
//     dot.onclick = () => {
//         dot.classList.add('slider__dot_active');
//     }
// }