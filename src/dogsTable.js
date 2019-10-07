import roundtripDog from './roundtripDog.js';

const tbody = document.getElementById('dogs');

const dogs = roundtripDog.getAllMethod();

for(let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];
    
    //store the HTML element (tr or TABLE ROW) in a VARIABLE
    const tr = document.createElement('tr');
    
    //store the HTML element (td or TABLE DATA, which is a CHILD element of tr)
    const nameCell = document.createElement('td');
    
    //create the anchor link <a>
    const link = document.createElement('a');

    //RIGHT TO LEFT: initialize a new INSTANCE and store it in a VARIABLE
    const searchParams = new URLSearchParams();

    //set the name KEY with the dog NAME as the VALUE
    searchParams.set('id', dog.name);

    //use the FORMATTED SEARCH STRING as the END of the LINK href
    //that goes to the detail page
    link.href = 'dog-list.html?' + searchParams.toString();

    //use the dog's name as the display text for the link
    link.textContent = dog.name;

    //append a child element (<a>) onto nameCell
    nameCell.appendChild(link);

    //append nameCell to the table row
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