let posts = [];
const list = document.querySelector('#list')
let corazonIconClass = 'fa-regular fa-heart fa-2x';

const renderPosts = () => {
  list.innerHTML = '';
  posts.forEach(post => {
    // Crear elemento
    const li = document.createElement('li');
    li.id = post.id;
    const arrayLikes = post.likes.length;
    const arrayComentarios = post.comentario.length
    li.innerHTML = `
        <div id="object" class="h-fit p-4 border-b border-gray-500 md:max-w-lg md:mx-auto">
            <div id="halfs" class="flex flex-row h-full">
                <div id="left" class=" w-1/5 p-2">
                    <div id="profile-pic" class="py-1">
                        <img id="profile-pic-display" class="rounded-full h-24 w-auto mx-auto" src="${user.profilePic ? user.profilePic : '/uploads/usuario-default.png'}" alt="foto-perfil">
                    </div>
                    <div id="interactions">
                        <div id="likes" class="flex flex-row h-8 gap-1 items-center justify-center mt-2">
                            <p class="font-bold text-2xl md:text-xl">${arrayLikes}</p>
                            <button class="corazon">
                                <i id='corazon-icono' class="${corazonIconClass}"></i>
                            </button>
                        </div>
                        <div id="comments" class="flex flex-row h-8  gap-1 items-center justify-center mt-2">
                            <p class="font-bold text-2xl md:text-xl">${arrayComentarios}</p>
                            <button class='comentario'>
                                <i class="fa-regular fa-comment fa-2x"></i>
                            <button/>
                        </div>
                    </div>
                </div>
                <div id="right" class=" w-4/5 p-2 flex flex-col gap-1">
                    <div id="title-stars" class="flex flex-row justify-between border-b border-gray-500 pb-1">
                        <h2 class="text-2xl font-semibold text-blue-500">${post.rest}</h2>
                        <div id="stars" class="flex flex-row items-center gap-1">
                            <p class="text-2xl">${post.stars}</p>
                            <svg class="h-auto w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        </div>
                    </div>
                    <h1 class="text-2xl font-medium">${post.title}</h1>
                    <div id="desciption" class="flex flex-col">
                        <p class="text-xl pb-1">${post.description}</p>
                        <img id="postImage" class="post-image h-26 w-auto rounded-md" src="/uploads/${post.image}" />
                    </div>
                </div>
            </div>
        </div>
    `;
    list.append(li);
  });
}


list.addEventListener('click', async e => {
    const corazon = e.target.closest('.corazon');
    const comentario = e.target.closest('.comentario')
    const imageButton = e.target.closest('.post-image');
    const corazonIcon = e.target.closest('#corazon-icono')
    
    if (corazon) {
        const li = corazon.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        const { data } = await axios.patch(`/api/posts/${li.id}`);
        console.log(data);
        posts = posts.map(post => post.id === data.postLiked.id ? data.postLiked : post);
        console.log('antes:', corazonIcon.classList);
        if (data.liked) {
            console.log('jejee');
            corazonIconClass = 'fa-solid fa-heart fa-2x text-red-500'
        } else {
            console.log('lili');
             corazonIconClass = 'fa-regular fa-heart fa-2x'
        }
        console.log('despues:', corazonIcon.classList);
        renderPosts();
    }

    if (comentario) {
        const li = comentario.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        window.location.pathname = `/post/${li.id}`;
    }

    if (imageButton) {
        console.log('image click')
        imageButton.classList.toggle('expanded');
    }
});

(async () => {
    try {
        const { data } = await axios.get('/api/posts', {
          withCredentials: true
        });
        console.log('get the posts:', data);
        posts = data
        renderPosts();
        
    } catch (error) {

        if (error.response.status === 401) {
            window.location.pathname = '/login'
        }
    }
  })();