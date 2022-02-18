const widget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');

const container = document.querySelector('.chat-widget__messages-container');

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();

const answerList = [
    'Привет',
    'И что теперь?',
    'Никого нет дома!',
    'Это ваши проблемы!',
    'Позвоните завтра',
    'Война войной, а обед по расписанию'
];

function sendMessage(event) {
    event.target.value = event.target.value.trim(); 
            if (event.target.value.length !== 0) {
                messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${hours}:${minutes}</div>
                        <div class="message__text">
                        ${event.target.value}
                        </div>
                    </div>
                    `;

                    event.target.value = null;
                    robotAnswer(answerList);

                   
            }
        }

function robotAnswer(answerList) {

    let randomAnswer = Math.floor(Math.random() * answerList.length);
    
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
            ${answerList[randomAnswer]}
            </div>
        </div>
        `;

    scrollChat(container);
}


widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active');
});

input.addEventListener('change', sendMessage);

//прячу чат если есть клик не окна
document.addEventListener('click', (e) => {
    let target = e.target;
    if (!target.closest('.chat-widget')) {
        widget.classList.remove('chat-widget_active');
    }
});

//прокрутка чата
function scrollChat(chat) {
    chat.scrollTop = chat.scrollHeight - chat.getBoundingClientRect().height;
}
