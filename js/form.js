let message = {
loading: 'Загрузка...',
success: 'Спасибо! Скоро мы с вами свяжемся',
failure: 'Что-то пошло не так!'
};

const form = document.querySelector('.main-form');
const input = form.getElementsByTagName('input');
const statusMessage = document.createElement('div');

statusMessage.classList.add('status');
form.addEventListener('submit', sendContact())

//TODO: create the db by json-server for contact sending 
async function sendContact (phone, e) {
    e.preventDefault();
    form.appendChild(statusMessage);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const json = await response.json();
    return console.log(json);
}



