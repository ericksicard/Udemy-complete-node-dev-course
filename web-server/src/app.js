const path = require('path');
const express = require('express');
const hbs = require('hbs');

// creating the express application
const app = express();

// Define paths for Express config (Absolute path of the folders being served)
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);  //setup of the views directory(templates)
hbs.registerPartials(partialPath); // run "nodemon app.js -e js,hbs" to make nodemon watch for chances in .hbs

// Setup static directory to serve 
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
        aboutText: 'Ask whatever you wanna know about us',
        name: 'Erick Sicard'
    });
});

app.get('/help', ( req, res ) => {
    res.render('help', {
        title: 'Help page',
        helpText: 'Here we are going to provide all the help you might need',
        title: 'Help',
        name: 'Erick Sicard'
    });
});

app.get('/weather', ( req, res ) => {
    res.send({
        forecast: '55 degrees',
        location: "Miami"
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg: 'Help article not found',
        name: 'Erick Sicard'
    })
})

app.get('*', (req, res) => {   // this has to be last, after all possible matches have been checked
    res.render('404', {
        title: '404',
        errorMsg: 'Page not found',
        name: 'Erick Sicard'
    })
})

/*********************************/ 

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})