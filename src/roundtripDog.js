const roundtripDog = {
    storage: localStorage,
    saveMethod(dog) {
        //RIGHT TO LEFT: we USE... our own method IN our OBJECT???
        //apparently this 'gets our dog array'???
        const dogs = roundtripDog.getAllMethod();
        //push DOG into our ARRAY of DOGS
        dogs.push(dog);
        //RIGHT TO LEFT: take our ARRAY (dogs) and STRINGIFY it, then store that string inside a VARIABLE (json)
        const json = JSON.stringify(dogs);
        //RIGHT TO LEFT: ADD our KEY VALUE PAIR ('dogs'--key, json--value) to our OBJECT (roundtripdog)'s STORAGE
        roundtripDog.storage.setItem('dogs', json);
        
    },
    
    // getMethod() {
    //     //RIGHT TO LEFT: store our ARRAY OBJECT and save it in a variable (dogs)?
    //     const dogs = roundtripDog.getAllMethod();
    //     //RIGHT TO LEFT: give JSON's parse METHOD localStorage's STRING (json) and SAVE it in a VARIABLE (dog)
    //     //return our ARRAY INDEX'S FIRST ITEM ([0])
    //     return dogs[0];
        
    // },

    getMethod(name) {
        const dogs = roundtripDog.getAllMethod();

        for(let i = 0; i < dogs.length; i++) {
            const dog = dogs[i];
            if(dog.name === name) {
                return dog;
            }

        }
    },

    getAllMethod() {
        //RIGHT TO LEFT: get our ITEM (a STRINGIFIED ARRAY) from roundtripdog's storage and save it into a VARIABLE (json)
        const json = roundtripDog.storage.getItem('dogs');
        //RIGHT TO LEFT: get our PARSED JSON OBJECT and store it in a variable (dogs)
        let dogs = JSON.parse(json);
        //if NO items in our ARRAY (dogs), let our RETURNED OBJECT be an empty ARRAY
        if(!dogs) {
            dogs = [];
        }

        return dogs;
    }
};

export default roundtripDog;