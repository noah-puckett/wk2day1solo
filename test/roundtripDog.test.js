import roundtripDog from '../src/roundtripDog.js';

const test = QUnit.test;

QUnit.module('getDog');

test('roundtripDog success', function(assert) {
    //Arrange:
    // Set up your parameters and expectations
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
    // Call the function you're testing and set the result to a const
    roundtripDog.saveMethod(dog);
    const result = roundtripDog.getMethod();

    //Assert
    //deepEqual is checking ===, not ==
    assert.deepEqual(result, dog);
});
