import { createNotification } from "../components/notification.js";


const form = document.querySelector('#form')
const nombreApellido = document.querySelector('#nombre-apellido');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const matchPassword = document.querySelector('#confirm-password');
const prefijo = document.querySelector('#prefijo');
const phoneInput = document.querySelector('#phone-input');
const username = document.querySelector('#username');
const createBtn = document.querySelector('#create-btn')
const notification = document.querySelector('#notification');

//console.log(form.children);

// Ahora vamos a poner los REGEX
const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Ejemplo: mínimo 8 caracteres, al menos una letra y un número
const REGEX_NAME = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+ [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/; // Nombre espacio Apellido
const REGEX_PHONE = /^\d{7}$/ // Acepta 7 numeros del 0 al 9 y nada mas
const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


let nombreValidation = false; // Para que al momento de que el usuario entre en la pagina se reinicie por asi decirlo
let emailValidation = false;
let passwordValidation = false;
let matchValidation = false;
let phoneValidation = false;
let usernameValidation = false;

// Creamos una funcion para las verificaciones

const validation = (input, regexValidation) => {
    createBtn.disabled = nombreValidation && emailValidation && passwordValidation && matchValidation && phoneValidation && usernameValidation ? false : true;
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

// const info = document.querySelector('.info');

// if (!nombreValidation || !emailValidation || !passwordValidation || !matchValidation) {
//     info.style.display = 'block';
// } else {
//     info.style.display = 'none';
// }

// Crear evento del form


nombreApellido.addEventListener('input', e => {
    // console.log(e.target.value); Es para ver si agarra lo que estoy escribiendo
    nombreValidation = REGEX_NAME.test(e.target.value); // Va a testear lo que escribamos con ese regex
    // console.log(nombreValidation);
    validation(nombreApellido, nombreValidation);
});

email.addEventListener('input', e => {
    emailValidation = REGEX_EMAIL.test(e.target.value);
    validation(email, emailValidation);
    //console.log(emailValidation);
});


password.addEventListener('input', e => {
    passwordValidation = REGEX_PASSWORD.test(e.target.value);
    matchValidation = e.target.value === matchPassword.value;
    validation(password, passwordValidation);
    validation(matchPassword, matchValidation);
    // console.log(passwordValidation);
});

matchPassword.addEventListener('input', e => {
    matchValidation = e.target.value === password.value;
    validation(matchPassword, matchValidation);
    // console.log(matchValidation);
});

phoneInput.addEventListener('input', e => {
    phoneValidation = REGEX_PHONE.test(e.target.value);
    validation(phoneInput, phoneValidation);
    // console.log(phoneValidation);
});


username.addEventListener('input', e => {
    usernameValidation = e.target.value !== '';
    validation(username, usernameValidation);
});

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        
        const newUser = {
        name: nombreApellido.value,
        email: email.value,
        password: password.value,
        phone: prefijo.value + phoneInput.value,
        username: username.value,
        }
        const { data } = await axios.post('/api/users', newUser)

        createNotification(false, data);
        setTimeout(() => {
            notification.innerHTML = '';
        }, 4000)

        nombreApellido.value = '';
        email.value = '';
        password.value = '';
        matchPassword.value = '';
        phoneInput.value = '';
        username.value = '';
        validation(nombreApellido, false);
        validation(email, false);
        validation(password, false);
        validation(matchPassword, false);
        validation(phoneInput, false);
        validation(username, false);
        createBtn.disabled = true;
        

    } catch (error) {
        createNotification(true, error.response.data.error);
        setTimeout(() => {
            notification.innerHTML = '';
        }, 4000)
        
    }
});