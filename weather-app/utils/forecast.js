const request = require('request');

const forecast = (latitude, longitude, cb) => {
    const url = `https://api.darksky.net/forecast/0c4d4a0709ef4e3cfe59706c40748054/${latitude},${longitude}?units=si`;
    
    request({ url, json: true }, (err, res) => {
        if ( err ) cb( 'Unable to connect to weather services!', undefined );
        else if ( res.body.error ) cb( 'Unable to find location', undefined );
        else cb( undefined, {
            summary: res.body.daily.data[0].summary,
            temperature: res.body.currently.temperature,
            precipProbability: res.body.currently.precipProbability
        } )
    } )
};

module.exports = forecast;