// //ok so this function creates a ROW
// //that looks like this:

// // name:
// // age:
// // temperament:
// // colors:
// // are they a good dog?:

// //and each field is POPULATED with the argument (dog) we PASS to it

// function createVerticalRow(dog) {

//     //first we create the PARENT element, tr
//     const tr = document.createElement('tr');

//     //then we grab OUR values from our RETURNED FUNCTION'S VALUE and STORE that in a VARIABLE
//     //we need the make<thing>Cell() FUNCTION to... scrub the input? 
//     const nameCell = makeNameCell(dog.name);
//     const ageCell = makeAgeCell(dog.age);
//     const temperamentCell = makeTemperamentCell(dog.temperament);
//     const colorsCell = makeColorsCell(dog.colors);
//     const goodDogCell = makeGoodDogCell(dog.goodDog);

//     tr.appendChild(nameCell);
//     tr.appendChild(ageCell);
//     tr.appendChild(temperamentCell);
//     tr.appendChild(colorsCell);
//     tr.appendChild(goodDogCell);
// }

// //LET US EXPLORE A UTILITY OBJECT
 
// const dogRowMaker = {
//     makeNameCell: makeNameCell(),
//     makeAgeCell: makeAgeCell(),
//     makeTemperamentCell: makeTemperamentCell(),
//     makeColorsCell: makeColorsCell(),
//     makeGoodDogCell: makeGoodDogCell(),
// };