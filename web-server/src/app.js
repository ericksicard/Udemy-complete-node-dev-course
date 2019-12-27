const path = require('path');
const express = require('express');

// creating the express application
const app = express();

// Absolute path of the folder being served
const publicDirectoryPath = path.join(__dirname, '../public');

app.use( express.static(publicDirectoryPath));


app.get('/weather', ( req, res ) => {
    res.send({
        forecast: '55 degrees',
        location: "Miami"
    });
}); 

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})