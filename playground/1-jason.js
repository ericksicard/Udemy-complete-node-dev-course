const fs = require('fs');
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

// object to JSON string
//const bookJSON = JSON.stringify( book );
//console.log( bookJSON );
//fs.writeFileSync( '1-json.json', bookJSON ); // saving the JSON data to a file

// JSON string to object
//const parsedData = JSON.parse( bookJSON )
//console.log( parsedData.author );

//const dataBuffer = fs.readFileSync('1-json.json');  // reading the data from the new file
//const dataJSON = dataBuffer.toString();             // converting the data to a string
//const data = JSON.parse( dataJSON )                 // formating JSON data and converting it to an object    
//console.log( data.title );


/******** Challenge: Work with JSON and the file system ********/
const dataBuffer = fs.readFileSync('1-json.json');      // reading the data from the new file
let dataJSON = dataBuffer.toString();                 // converting the data to a string
const data = JSON.parse( dataJSON );                    // formating JSON data and converting it to an object
data.name = "Erick";                                    // updating object properties 
data.age = 40;
dataJSON = JSON.stringify( data )                       // converting the data object to a JSON format(string) 
fs.writeFileSync( '1-json.json', dataJSON );            // saving the JSON data to a file