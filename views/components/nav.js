const navBar = document.querySelector('#nav-bar');

const createNavHome = ()=>{
    navBar.innerHTML = `
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" class="self-center text-2xl font-semibold flex flex-row gap-2">
            <svg class="size-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#df4353" d="M32 32C32 14.3 46.3 0 64 0S96 14.3 96 32V240H32V32zM224 192c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V192zm-64-64c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm160 96c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V352c0 88.4-71.6 160-160 160H162.3c-42.4 0-83.1-16.9-113.1-46.9L37.5 453.5C13.5 429.5 0 396.9 0 363V336c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"/></svg>
            <span class='dark:text-white'>Complein</span>
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="../profile" class="h-auto w-10">
                <p class="text-white hover:text-blue-500 font-bold cursor-pointer">Perfil</p>
            </a>

            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 font-medium border mt-0 border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="/home/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inicio</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">¿Qué es complein?</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                </li>

                <li class="flex justify-center">
                    <button  class="cerrar-btn bg-red-400 hover:bg-red-600 font-semibold text-white rounded-md px-3 py-1">Cerrar sesión</button>
                </li>
            </ul>
        </div>

        <!-- Este es el menu lateral -->
        <div id="side-bar" class="bg-transparent fixed top-16 right-0 left-0 bottom-0 hidden ">
            <ul class="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inicio</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">¿Qué es complein?</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                </li>

                <li class="flex justify-center">
                    <button class="cerrar-btn bg-red-400 hover:bg-red-600 font-semibold text-white rounded-md px-3 py-1">Cerrar sesión</button>
                </li>
                
            </ul>
        </div>
    </div>
    `;
}

const createNavProfile = ()=>{
    navBar.innerHTML = `
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" class="self-center text-2xl font-semibold flex flex-row gap-2">
            <svg class="size-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#df4353" d="M32 32C32 14.3 46.3 0 64 0S96 14.3 96 32V240H32V32zM224 192c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V192zm-64-64c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm160 96c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V352c0 88.4-71.6 160-160 160H162.3c-42.4 0-83.1-16.9-113.1-46.9L37.5 453.5C13.5 429.5 0 396.9 0 363V336c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"/></svg>
            <span class='dark:text-white'>Complein</span>
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="../profile" class="h-auto w-10">
            </a>

            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 font-medium border mt-0 border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="/home/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inicio</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">¿Qué es complein?</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                </li>

                <li class="flex justify-center">
                    <button  class="cerrar-btn bg-red-400 hover:bg-red-600 font-semibold text-white rounded-md px-3 py-1">Cerrar sesión</button>
                </li>
            </ul>
        </div>

        <!-- Este es el menu lateral -->
        <div id="side-bar" class="bg-transparent fixed top-16 right-0 left-0 bottom-0 hidden ">
            <ul class="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inicio</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">¿Qué es complein?</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                </li>

                <li class="flex justify-center">
                    <button  class="cerrar-btn bg-red-400 hover:bg-red-600 font-semibold text-white rounded-md px-3 py-1">Cerrar sesión</button>
                </li>
            </ul>
        </div>
    </div>
    `;
};

if (window.location.pathname === '/home/' || '/upload') {
    createNavHome();
}

if (window.location.pathname === '/profile/') {
    createNavProfile();
};

// Boton para mostrar el menu lateral
const navBtn = navBar.children[0].children[1].children[1];
const sideBar = document.querySelector('#side-bar');

// Evento para mostrar el menu lateral en Movil
navBtn.addEventListener('click', ()=> {
    if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        sideBar.classList.remove('hidden');
        navBtn.innerHTML = `
            <svg class="w-6 h-6 animate-spin"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        `;
    } else {
        navBtn.classList.remove('active');
        sideBar.classList.add('hidden');
        navBtn.innerHTML = `
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        `;
    }
});

const cerrarBtn = document.querySelectorAll(".cerrar-btn")


cerrarBtn.forEach(btn => {
    btn.addEventListener('click', async e => {
        try {
            await axios.get('/api/logout');
            window.location.pathname = '/login'
        } catch (error) {
            console.log(error);
        }
    });
})

