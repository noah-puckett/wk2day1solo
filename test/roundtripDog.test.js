const test = QUnit.test;

QUnit.module('getDog');

//implement an object with two methods

const roundtripDog = {
    saveMethod(dog) {
        //RIGHT TO LEFT: take DOG, turn in into JSON's STRING, STORE it in VARIABLE
        const json = JSON.stringify(dog);
        //RIGHT TO LEFT: take KEY (the string 'dog) and VALUE (json's STRING), set it as localStorage's ITEM
        localStorage.setItem('dog', json);
        
    },
    
    getMethod() {
        //RIGHT TO LEFT: get localStorage's STRING ('dog'), SAVE it in a VARIABLE (json)
        const json = localStorage.getItem('dog');
        //RIGHT TO LEFT: give JSON's parse METHOD localStorage's STRING (json) and SAVE it in a VARIABLE (dog)
        const dog = JSON.parse(json);
        //return it!
        return dog;
        
    }
};

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
