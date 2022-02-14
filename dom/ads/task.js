const rotatorList = document.querySelectorAll('.rotator__case');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

    setInterval(() => {
        const randomIndex = getRandomIntInclusive(0, rotatorList.length - 1);

        for (let rotator of rotatorList) {
            let currentItem = rotatorList[randomIndex];
            rotator.classList.remove('rotator__case_active');
            currentItem.classList.add('rotator__case_active');
            currentItem.style.color = currentItem.getAttribute('data-color');  
        }
    }, 1000);

