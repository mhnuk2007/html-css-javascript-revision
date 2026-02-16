const Car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start: function() {
        console.log('The car has started.');
    },
    stop: function() {
        console.log('The car has stopped.');
    }
};
document.body.innerHTML = `<p>Make: ${Car.make}</p><p>Model: ${Car.model}</p><p>Year: ${Car.year}</p>`;
