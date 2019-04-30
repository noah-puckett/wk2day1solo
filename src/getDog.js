function getDog(formData) {

    const dog = {
        name: formData.get('name'),
        age: formData.get('age'),
        temperament: formData.get('temperament'),
        colors: formData.getAll('colors'),
        goodDog: formData.get('good-dog'),
        faveActivity: formData.get('fave-activity'),
    };
    return dog;
}

export default getDog;