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

export default roundtripDog;