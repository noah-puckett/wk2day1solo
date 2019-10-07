function getDog(formData) {
    //populate our object (a dog) with form data (user input for our apply HTML page) 
    const age = parseInt(formData.get('age'));
    const dog = {
        name: formData.get('name'),
        age: age,
        temperament: formData.get('temperament'),
        colors: formData.getAll('colors'),
        goodDog: formData.get('good-dog'),
        faveActivity: formData.get('fave-activity'),
    };
    return dog;
}

export default getDog;