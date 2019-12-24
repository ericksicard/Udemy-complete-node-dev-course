//const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

let location =  process.argv[2]; // getting the input from user at command line

if ( !location ) console.log('Please, provide a location')
else {
    geocode( location, ( err, data ) => {
        if ( err ) return console.log( 'Error:', err );
    
        forecast( data.latitude, data.longitude, ( err, forecastData ) => {
            if ( err ) return console.log( 'Error:', err );
            
            console.log( data.location );
            console.log( forecastData );
        })
    })
}



