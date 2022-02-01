//  этот код позволяет нажимать на одного крота в одной лунке несколько раз.
//  Я хотела разрешить только один клик, но мне не совсем понятно как пользоваться
//  методами addEventListene и removeEventListene. Как можно реализовать запрет
// на второй и последующие клики?


const holes = document.getElementsByClassName('hole');
    const dead = document.getElementById('dead')
    const lost = document.getElementById('lost');
   
    for (let hole of holes) {
   
        hole.onclick = () => {
                if (hole.classList.contains('hole_has-mole')) {
                    dead.textContent++;
                } else {
                    lost.textContent++;
                }

            if (Number(dead.textContent) === 10) {
                alert('Вы выиграли');
                dead.textContent = 0;
                lost.textContent = 0;
            }
    
            if (Number(lost.textContent) === 5) {
                alert('Вы проиграли')
                lost.textContent = 0;
                dead.textContent = 0;
            }
        }
    }