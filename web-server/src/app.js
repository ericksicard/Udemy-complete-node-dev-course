const path = require('path');
const express = require('express');

// creating the express application
const app = express();

// Absolute path of the folder being served
const publicDirectoryPath = path.join(__dirname, '../public');

// Using hbs as the default view engine
app.set('view engine', 'hbs');

app.use( express.static(publicDirectoryPath));

/************ Routes **************/
// loading dynamic content
app.get('', ( req, res ) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Erick Sicard'
    });
});

app.get('/about', ( req, res ) => {
    res.render('about', {
        title: 'About me',
        name: 'Erick Sicard'
    });
});

app.get('/help', ( req, res ) => {
    res.render('help', {
        title: 'Help page',
        name: 'Erick Sicard'
    });
});

app.get('/weather', ( req, res ) => {
    res.send({
        forecast: '55 degrees',
        location: "Miami"
    });
});

/*********************************/ 

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})