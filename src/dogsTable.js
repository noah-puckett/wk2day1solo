import roundtripDog from './roundtripDog.js';

const tbody = document.getElementById('dogs');

const dogs = roundtripDog.getAllMethod();

for(let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = dog.name;
    tr.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = dog.age;
    tr.appendChild(ageCell);

    const temperamentCell = document.createElement('td');
    temperamentCell.textContent = dog.temperament;
    tr.appendChild(temperamentCell);
    
    //colors is an array
    const colorsCell = document.createElement('td');
    let colorsList = '';
    if(dog.colors) {
        colorsList = dog.colors.join(', ');
    }
    colorsCell.textContent = colorsList;
    tr.appendChild(colorsCell);

    //I was dumb and now I have to fix my radio button input by using the code below: lesson be unto me.
    const goodDogCell = document.createElement('td');
    if(dog.goodDog === 'yes-caps') {
        goodDogCell.textContent = 'YES';

    } else {
        goodDogCell.textContent = dog.goodDog;
    }
    tr.appendChild(goodDogCell);

    tbody.appendChild(tr);
}