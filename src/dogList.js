import roundtripDog from './roundtripDog.js';

//reference all DOM elements that need to be updated
const name = document.getElementById('name');
const age = document.getElementById('age');
const temperament = document.getElementById('temperament');
const colors = document.getElementById('colors'); //I'm not getting the id, I'm using the name because it's an array
const goodDog = document.getElementById('good-dog'); //same thing here, different id values, using name
const faveActivity = document.getElementById('fave-activity');

//getMETHOD the applicant data from the API object
const dog = roundtripDog.getMethod();

//populate the DOM elements with the corresponding properties, Marty's code say "mediate data into the elements"
name.textContent = dog.name;
age.textContent = dog.age;
temperament.textContent = dog.temperament;
colors.textContent = dog.colors;
goodDog.textContent = dog.goodDog;
faveActivity.textContent = dog.faveActivity;