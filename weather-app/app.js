const request = require('request');

const url = 'https://api.darksky.net/forecast/0c4d4a0709ef4e3cfe59706c40748054/37.8267,-122.4233';

request({ url }, ( error, response ) => {
    const data = JSON.parse( response.body )
    console.log(data.currently)
})