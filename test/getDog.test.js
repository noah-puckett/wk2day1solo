import getDog from '../src/getDog.js';
const test = QUnit.test;

QUnit.module('getDog');

test('getDog success', function(assert) {
    //Arrange
    //create object literal
    const expected = {
        name: 'longboi',
        age: 5, 
        temperament: 'hissing',
        colors: ['brown', 'green'],
        goodDog: 'yes-caps',
        faveActivity: 'falling'
    };

    // Set up your parameters and expectations
    //create an INSTANCE (object) of built-in FormData CLASS.
    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('age', expected.age);
    formData.set('temperament', expected.temperament);
    formData.set('colors', expected.colors[0]);
    formData.append('colors', expected.colors[1]);
    formData.set('good-dog', expected.goodDog);
    formData.set('fave-activity', expected.faveActivity);
    

    //Act 
    // Call the function you're testing and set the result to a const
    const dog = getDog(formData);
    //Assert
    //deepEqual is checking ===, not ==
    assert.deepEqual(dog, expected);
});