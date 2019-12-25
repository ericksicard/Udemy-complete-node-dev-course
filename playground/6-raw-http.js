const https = require('https');
const url = `https://api.darksky.net/forecast/0c4d4a0709ef4e3cfe59706c40748054/25,-80?units=si`;

const request = https.request( url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.on('error', (error) => {
    console.log('An error ', error);
})

request.end();