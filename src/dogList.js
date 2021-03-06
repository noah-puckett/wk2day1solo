import roundtripDog from './roundtripDog.js';

//reference all DOM elements that need to be updated
const name = document.getElementById('name');
const age = document.getElementById('age');
const temperament = document.getElementById('temperament');
const colors = document.getElementById('colors'); //I'm not getting the id, I'm using the name because it's an array
const goodDog = document.getElementById('good-dog'); //same thing here, different id values, using name
const faveActivity = document.getElementById('fave-activity');

//TODO: figure this out one day.
//not entirely sure what is happening here, honestly. 
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

//getMETHOD the applicant data from the API object
const dog = roundtripDog.getMethod(id);

//populate the DOM elements with the corresponding properties, Marty's code say "mediate data into the elements"
name.textContent = dog.name;
age.textContent = dog.age;
temperament.textContent = dog.temperament;
let colorsList = '';
if(dog.colors) {
    colorsList = dog.colors.join(', ');
}
colors.textContent = colorsList;
if(dog.goodDog === 'yes-caps') {
    goodDog.textContent = 'YES';
} else {
    goodDog.textContent = 'yes';
}
faveActivity.textContent = dog.faveActivity;