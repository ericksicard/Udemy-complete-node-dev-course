const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode( 'Miami', ( err, data ) => {
    console.log( 'Error:', err );
    console.log( 'Data:', data );
})

forecast( 25.761681, -80.191788, ( err, data ) => {
    console.log( 'Error:', err );
    console.log( 'Data:', data );
})