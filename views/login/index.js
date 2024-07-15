import { createNotification } from "../components/notification.js";

const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const form = document.querySelector('#form');
const loginBtn = document.querySelector('#login-btn');


const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let emailValidation = false;
let passwordValidation = false;

const validation = (input, regexValidation) => {
    loginBtn.disabled = emailValidation && passwordValidation ? false : true;
    //console.log(nombreValidation && passwordValidation && matchValidation && phoneValidation && emailValidation && usernameValidation);

    const info = input.nextElementSibling;

    if (input.value === '') {
        input.classList.add('focus:outline-indigo-700');
        input.classList.remove('outline-green-700', 'outline', 'outline-2');
        input.classList.remove('outline-red-700', 'outline', 'outline-2');
        info.classList.add('hidden');
        info.classList.remove('block');
    } else if (regexValidation) {
        input.classList.remove('focus:outline-indigo-700');
        input.classList.add('outline-green-700', 'outline', 'outline-2');
        input.classList.remove('outline-red-700', 'outline', 'outline-2');
        info.classList.add('hidden');
        info.classList.remove('block');
    } else {
        input.classList.remove('focus:outline-indigo-700');
        input.classList.remove('outline-green-700', 'outline', 'outline-2');
        input.classList.add('outline-red-700', 'outline', 'outline-2');
        info.classList.remove('hidden');
        info.classList.add('block');
    }
}

inputEmail.addEventListener('input', e => {
    emailValidation = REGEX_EMAIL.test(e.target.value);
    validation(inputEmail, emailValidation);
    //console.log(emailValidation);
})

inputPassword.addEventListener('input', e => {
    passwordValidation = REGEX_PASSWORD.test(e.target.value);
    validation(inputPassword, passwordValidation);
    // console.log(passwordValidation);
})

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const user = {
        email: inputEmail.value,
        password: inputPassword.value
        }
        const { data } = await axios.post('/api/login', user);
        localStorage.setItem('currentUser', JSON.stringify(data))
        window.location.pathname = '/home/';
    } catch (error) {
        console.log(error);
        createNotification(true, error.response.data);
        setTimeout(() => {
            notification.innerHTML = '';
        }, 4000)
    }
    
    
});