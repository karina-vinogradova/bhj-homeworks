// не знаю как сделать так, чтобы не показывалось первоначальное значение 59
// перед тем как поменяется формат времени на 00:00:59

function countDown() {
    const timer = document.getElementById('timer');
    let timing = timer.textContent;
    let timeCounter = setInterval(() => {
        if (timing > 0) {
                timer.textContent = new Date(timing * 1000).toISOString().substr(11, 8);
                timing--;
            } else {
                clearTimeout(timeCounter);
                alert('Вы победили в конкурсе!');
            }
    }, 1000)
}

countDown();
    