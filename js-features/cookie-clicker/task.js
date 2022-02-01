function cookieClicker() {
    let speedContainer = document.createElement("div");
    speedContainer.innerText = 'Скорость кликов: ';
    speedContainer.classList.add('clicker__speed');
    
    let span = document.createElement("span");
    speedContainer.appendChild(span);
    span.id = 'speed';
    document.querySelector('.clicker__status').after(speedContainer);
    
    const cookieImg = document.getElementById('cookie');
    const clickCounter = document.getElementById('clicker__counter');
    const speed = document.getElementById('speed');

    let even = true;
    let timeStart = Date.now();
    let timeEnd;

    cookieImg.onclick = () => {
    
        if (even) {            
            cookieImg.width += 20;
            even = false;
        } else {
            cookieImg.width -= 20;
            even = true;
        }
        
        clickCounter.textContent++;

        timeEnd = Date.now();
        speed.textContent = (1000 / (timeEnd - timeStart)).toFixed(2);
        timeStart = timeEnd;
    }
} 

cookieClicker();

