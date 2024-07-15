const main = document.querySelector('#main')
const list = document.querySelector('#list')
const postId = window.location.pathname.split('/')[2];

let posts = [];

const renderPosts = () => {
    list.innerHTML = '';
    posts.forEach(post => {
      // Crear elemento
      const li = document.createElement('li');
      li.id = post.id;
      const arrayLikes = post.likes.length;
      li.innerHTML = `
          <div id="object" class="h-fit p-4 border-b border-gray-500 md:max-w-lg md:mx-auto">
              <div id="halfs" class="flex flex-row h-full">
                  <div id="left" class=" w-1/5 p-2">
                      <div id="profile-pic" class="py-1">
                          <svg class="bg-gray-400 rounded-full md:h-auto " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M158.4 32.6c4.8-12.4-1.4-26.3-13.8-31s-26.3 1.4-31 13.8L81.1 100c-7.9 20.7-3 44.1 12.7 59.7l57.4 57.4L70.8 190.3c-2.4-.8-4.3-2.7-5.1-5.1L46.8 128.4C42.6 115.8 29 109 16.4 113.2S-3 131 1.2 143.6l18.9 56.8c5.6 16.7 18.7 29.8 35.4 35.4L116.1 256 55.6 276.2c-16.7 5.6-29.8 18.7-35.4 35.4L1.2 368.4C-3 381 3.8 394.6 16.4 398.8s26.2-2.6 30.4-15.2l18.9-56.8c.8-2.4 2.7-4.3 5.1-5.1l80.4-26.8L93.7 352.3C78.1 368 73.1 391.4 81.1 412l32.5 84.6c4.8 12.4 18.6 18.5 31 13.8s18.5-18.6 13.8-31l-32.5-84.6c-1.1-3-.4-6.3 1.8-8.5L160 353.9c1 52.1 43.6 94.1 96 94.1s95-41.9 96-94.1l32.3 32.3c2.2 2.2 2.9 5.6 1.8 8.5l-32.5 84.6c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8L430.9 412c7.9-20.7 3-44.1-12.7-59.7l-57.4-57.4 80.4 26.8c2.4 .8 4.3 2.7 5.1 5.1l18.9 56.8c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-18.9-56.8c-5.6-16.7-18.7-29.8-35.4-35.4L395.9 256l60.5-20.2c16.7-5.6 29.8-18.7 35.4-35.4l18.9-56.8c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-18.9 56.8c-.8 2.4-2.7 4.3-5.1 5.1l-80.4 26.8 57.4-57.4c15.6-15.6 20.6-39 12.7-59.7L398.4 15.4C393.6 3 379.8-3.2 367.4 1.6s-18.5 18.6-13.8 31l32.5 84.6c1.1 3 .4 6.3-1.8 8.5L336 174.1V160c0-31.8-18.6-59.3-45.5-72.2c-9.1-4.4-18.5 3.3-18.5 13.4V112c0 8.8-7.2 16-16 16s-16-7.2-16-16V101.2c0-10.1-9.4-17.7-18.5-13.4C194.6 100.7 176 128.2 176 160v14.1l-48.3-48.3c-2.2-2.2-2.9-5.6-1.8-8.5l32.5-84.6z"/></svg>
                      </div>
                      <div id="interactions">
                          <div id="likes" class="flex flex-row h-8 gap-1 items-center justify-center">
                              
                          </div>
                          <div id="comments" class="flex flex-row h-8  gap-1 items-center justify-center">
                              
                          </div>
                      </div>
                  </div>
                  <div id="right" class=" w-4/5 p-2 flex flex-col gap-1">
                      <div id="title-stars" class="flex flex-row justify-between border-b border-gray-500 pb-1">
                          <h1 class="text-3xl">${post.title}</h1>
                          <div id="stars" class="flex flex-row items-center gap-1">
                              <p class="text-2xl">${post.stars}</p>
                              <svg class="h-auto w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                          </div>
                      </div>
                      <h2 class="text-2xl font-semibold text-blue-500">${post.rest}</h2>
                      <div id="desciption" class="flex flex-col">
                          <p class="text-xl pb-1">${post.description}</p>
                          <button type="button">
                          <img class="h-26 w-auto rounded-md" src="/uploads/${post.image}"></img>
                          </button>
                      </div>
                      <div class='flex flex-col justify-between mt-2'>
                        <div class="flex flex-row border-b-2 pb-2">
                            <input id="comentario-input" class='w-full focus:outline-none text-lg' type="text" placeholder="¿Qué opinas de este post?">
                            <button id='comentario-btn'>
                                <svg class="size-10 bg-red-400 hover:bg-red-600 border rounded-lg p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
                            </button>
                        </div>
                        <ul class="flex flex-col-reverse" id="chao"></ul>
                    </div>
                  </div>
              </div>
          </div>
        
      `;

      const ul = li.children[0].children[0].children[1].children[3].children[1];

    post.comentario.forEach(c => {
        const p = document.createElement('p');
        p.classList.add('text-lg');
        p.innerHTML = c.mensaje;
        p.id = c.id;
        const div = document.createElement('div')
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-user', 'mr-2', 'text-green-500');
        div.append(icon)
        div.append(p)
        div.classList.add('flex', 'flex-row', 'items-center', 'py-1')
        ul.append(div);
    });
  
      list.append(li);
    });
}


list.addEventListener('click', async e => {
    const comentarioBtn = e.target.closest('#comentario-btn');


    if (comentarioBtn) {
        const comentarioinput = comentarioBtn.parentElement.children[0];
        //console.log(comentarioBtn);
        const li = comentarioBtn.parentElement.parentElement.parentElement.parentElement.parentElement;
        const { data } = await axios.post(`/api/comentarios/`, {mensaje: comentarioinput.value, postId});
        //console.log(data);
        posts = posts.map(post => post.id === data.id ? data : post);
        renderPosts();
    }


});

(async ( )=> {
    const {data} = await axios.get(`/api/posts/${postId}`);
    posts = posts.concat(data);
    console.log(data);
    renderPosts();
})();

