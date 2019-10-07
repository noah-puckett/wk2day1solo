import getDog from './getDog.js';
import roundtripDog from './roundtripDog.js';

//get forum element from HTML and save it into a variable
const form = document.getElementById('application');

//subscribe event listener/wire up submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    //formData is a new INSTANCE of the OBJECT with OUR FORM passed as an argument (what FormData does is 
    //construct an object with the info we give it, specifically input fields and name ids, I think?)
    const formData = new FormData(form);

    const dog = getDog(formData);
    roundtripDog.saveMethod(dog);

    //after applying, send users to a thank you page
    window.location = 'thanks.html';
});