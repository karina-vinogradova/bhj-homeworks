const title = document.querySelector('.poll__title');
const answer = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let data = JSON.parse(xhr.responseText).data;
        let answerArr = data.answers;
        
        title.textContent = data.title;

        answerArr.forEach(element => {
            let button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = element;

            answer.appendChild(button);

            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', 'async');
xhr.send();
