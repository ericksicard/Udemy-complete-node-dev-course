const request = require('request');

const location = {
    lat: 25.761681,
    lon: -80.191788
}
const opts = {
    units: 'si',
    lang: 'es'
}

// DarkSky
const darkskyURL = `https://api.darksky.net/forecast/0c4d4a0709ef4e3cfe59706c40748054/${location.lat},${location.lon}?units=${opts.units}&lang=${opts.lang}`;
request({ url: darkskyURL, json: true }, ( err, res ) => {
    if ( err ) console.log('Unable to connect to weather services!');
    else if ( res.body.error ) console.log('Unable to find location'); 
    else {
        console.log(`
        ${res.body.daily.data[0].summary}
        Actualmente la temperatura es de ${res.body.currently.temperature} grados centigrados. 
        Existe una probabilidad de lluvias del ${res.body.currently.precipProbability} %.
        `);
    }
});

// Geocoding
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Miami.json?access_token=pk.eyJ1IjoiZXNyZnJlZSIsImEiOiJjazRobXpvY2gxYm9xM2VvNjVnN3g5NXZ5In0.mRSyRiQSdS6UDY0naSB0jw&limit=1';
request({ url: geocodeURL, json: true }, ( err, res ) => {
    if ( err ) console.log('Unable to connect to geolocation services!');
    else if ( res.body.features.length == 0 ) console.log('Unable to find location. Try another search'); 
    else {
        const latitude = res.body.features[0].center[1];
        const longitude = res.body.features[0].center[0];
        console.log( `Latitude: ${latitude}, Longitude: ${longitude}` );
    }
})