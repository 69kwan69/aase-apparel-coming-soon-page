const main = document.querySelector('main');
const inputEmail = document.querySelector('.input-email');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(validateEmail(inputEmail.value)) {
        console.log('Valid email');
        form.classList.remove('error');
    } else {
        console.log('Invalid Email');
        form.classList.add('error');
    }
});

main.addEventListener('click', () => {
    form.classList.remove('error');
})

const validateEmail = email => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};