function getDog(formData) {
    //convert data to variables
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