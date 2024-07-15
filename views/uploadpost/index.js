var config = {
  method: 'get',
  url: 'https://api.geoapify.com/v1/geocode/autocomplete?text=caracas&apiKey=1fef0ff4947d47eb82a0be1257787d89',
  headers: { }
};

axios(config)
.then(function (response) {
//   console.log(response.data);
})

.catch(function (error) {
  console.log(error);
});

const restNames = new autocomplete.GeocoderAutocomplete(
    document.getElementById("autocomplete"),
    '1fef0ff4947d47eb82a0be1257787d89',
    {
        limit: 4,
        placeholder: 'A que restaurante fuiste?',
        lang: 'es',
        debounceDelay: 100,
        type: 'amenity'
});

let restName= '';

restNames.on('select', (elem) => {
// check selected country here
    console.log(elem);
    console.log(elem.properties.address_line1);
    restName = elem.properties.address_line1;
});
//Hasta aca va todo lo del nombre del restaurante

let v = 1; // Este es el valor predeterminado de las estrellas 

// Ahora va todo lo de las estrellas
document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.getElementById('stars');
  const stars = starsContainer.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('mouseover', handleHover);
    star.addEventListener('mouseout', handleMouseOut);
    star.addEventListener('click', handleClick);
  });

  function handleHover(event) {
    const value = parseInt(event.currentTarget.getAttribute('data-value'));

    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= value) {
        star.classList.add('hovered');
      } else {
        star.classList.remove('hovered');
      }
    });
  }

  function handleMouseOut() {
    stars.forEach(star => {
      star.classList.remove('hovered');
    });
  }

  function handleClick(event) {
    const starValue = parseInt(event.currentTarget.getAttribute('data-value'));
    v = starValue;

    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= starValue) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });

    console.log(`Valor seleccionado: ${starValue}`);

  }
});


const stars = document.querySelector('#stars')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const image = document.querySelector('#image')
const form = document.querySelector('#formulario')

form.addEventListener('submit', async e => {
  e.preventDefault();
  const newElement = {
    stars: v,
    title: title.value,
    rest: restName,
    description: description.value,
    image: image.files[0]
  }

  //console.log(newElement);
  
  //Primero creo el form data
  const bodyFormData = new FormData();

  for (const key in newElement) {
    bodyFormData.append(key, newElement[key]);
  }

  await axios.post('/api/posts', bodyFormData);
  window.location.pathname = '/home/';
});