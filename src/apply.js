import getDog from './getDog.js';

//get forum element
const form = document.getElementById('application');

//subscribe event listener/wire up submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const dog = getDog(formData);
    console.log(dog);
});