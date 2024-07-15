const inputs = document.querySelectorAll('input');
const editBtn = document.querySelector('#edit-btn');

const getUserInfo = async () => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);
        const { data } = await axios.get(`/api/users/${currentUser.id}`);
        console.log(data);

        document.querySelector('#name').value = data.name;
        document.querySelector('#email').value = data.email;
        document.querySelector('#password').value = data.password;
        document.querySelector('#phone').value = data.phone;
        document.querySelector('#username').value = data.username;
        if (data.profilePic) {
            document.querySelector('#profile-pic-display').src = `/uploads/${data.profilePic}`;
        }
        
    } catch (error) {
        console.error(error);
    }
};

getUserInfo();

editBtn.addEventListener('click', async () => {
    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const formData = new FormData();
        
        formData.append('name', document.querySelector('#name').value);
        formData.append('email', document.querySelector('#email').value);
        formData.append('password', document.querySelector('#password').value);
        formData.append('phone', document.querySelector('#phone').value);
        formData.append('username', document.querySelector('#username').value);

        const profilePic = document.querySelector('#profile-pic-input').files[0];
        if (profilePic) {
            formData.append('profilePic', profilePic);
        }

        const { data } = await axios.put(`/api/users/${currentUser.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(data);
        
        // Actualizar el localStorage con la nueva información del usuario
        localStorage.setItem('currentUser', JSON.stringify(data));

        // Actualizar la imagen de perfil en la interfaz
        if (data.profilePic) {
            document.querySelector('#profile-pic-display').src = `/uploads/${data.profilePic}`;
        }

        // Volver a hacer los campos de solo lectura
        inputs.forEach(input => {
            input.setAttribute('readonly', 'true');
        });
    } catch (error) {
        console.error(error);
    }
});