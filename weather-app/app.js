const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

let location =  process.argv[2]; // getting the input from user at command line

if ( !location ) console.log('Please, provide a location')
else {
    geocode( location, ( err, {latitude, longitude, location} ) => {
        if ( err ) return console.log( 'Error:', err );
    
        forecast( latitude, longitude, ( err, forecastData ) => {
            if ( err ) return console.log( 'Error:', err );
            
            console.log( location );
            console.log( forecastData );
        })
    })
}


