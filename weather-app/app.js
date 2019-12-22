const request = require('request');

const location = {
    lat: 25.761681,
    lon: -80.191788
}
const opts = {
    units: 'si',
    lang: 'es'
}

const url = `https://api.darksky.net/forecast/0c4d4a0709ef4e3cfe59706c40748054/${location.lat},${location.lon}?units=${opts.units}&lang=${opts.lang}`;

request({ url, json: true }, ( error, response ) => {
    console.log(`${response.body.daily.data[0].summary}
Actualmente la temperatura es de ${response.body.currently.temperature} grados centigrados. 
Existe una probabilidad de lluvias del ${response.body.currently.precipProbability} %.`)

});