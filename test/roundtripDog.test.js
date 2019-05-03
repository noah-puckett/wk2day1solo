import roundtripDog from '../src/roundtripDog.js';

const test = QUnit.test;

QUnit.module('getDog');

roundtripDog.storage = sessionStorage;
const testStorage = sessionStorage;

test('roundtripDog success', (assert) => {
    testStorage.removeItem('dogs');
    //Arrange
    //create object literal
    const dog = {
        name: 'longboi',
        age: 5, 
        temperament: 'hissing',
        colors: ['brown', 'green'],
        goodDog: 'yes-caps',
        faveActivity: 'falling'
    };

    //Act
    roundtripDog.saveMethod(dog);
    const result = roundtripDog.getMethod();

    //Assert
    //deepEqual is checking ===, not ==
    assert.deepEqual(result, dog);
});

test('no dogs in local storage returns empty array', (assert) => {
    testStorage.removeItem('dogs');
    //arrange
    const expected = [];

    //act
    const dogs = roundtripDog.getAllMethod();

    //assert
    assert.deepEqual(dogs, expected);

});

test('two saves return array with two items', (assert) => {
    testStorage.removeItem('dogs');

    //arrange
    const dog1 = { name: 'test1' };
    const dog2 = { name: 'test2' };
    const expected = [dog1, dog2];

    roundtripDog.saveMethod(dog1);
    roundtripDog.saveMethod(dog2);

    //act
    const dogs = roundtripDog.getAllMethod();

    //assert
    assert.deepEqual(dogs, expected);

});