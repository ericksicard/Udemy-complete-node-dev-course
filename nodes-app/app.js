const fs = require('fs');                   // file system
const validator = require('validator');     // validates formats
const chalk = require('chalk');             // printing in colors
const yargs = require('yargs');             // parsing arguments 

/* IMPORTING NODE.JS CORE MODULES
// This method creates the file if it doesn't exist or over-write any previous text
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// This method appends text to an existing file (notes.txt)
fs.appendFileSync('notes.txt', ' Appending some text into notes.txt')
*/


/* IMPORTING YOUR OWN FILES
//const firstName = require('./utils.js') // received the exported "name" from util.js
const add = require('./utils.js') // received the exported function add from utils.js
const getNotes = require('./notes.js')

const sum = add(4, 2);
console.log( sum )

const notes = getNotes();
console.log(notes);
*/

//IMPORTING NPM FILES
// validator npm package
console.log( validator.isEmail('esrfree@gmail.com')) // >true
console.log( validator.isEmail('esrfree')) // >false

console.log( validator.isURL('http://udemy.com')) // >true
console.log( validator.isURL('udemy@com')) // >false

// chalk npm package
const msgAlert = chalk.hex('#ffa500').bgBlueBright.bold.inverse('Success!!');
console.log( msgAlert )

/****************** SECTION 4 ******************/

//GETTING INPUTS FROM USERS ( node app.js Erick )
// printing the value passed
console.log( `Input: ${process.argv[2]}` );

const command = process.argv[2];
if ( command === "Erick" ) {
    console.log( `Hi ${command}`)
}
else {
    console.log( `I don't know you` )
}

//ARGUMENT PARSING WITH YARGS
// run: node app.js Erick --job="web developer"
console.log( yargs.argv ); // { _: [ 'Erick' ], job: 'web developer', '$0': 'app.js' }

// Customize yargs version
yargs.version('1.1.0')  // --> node app.js --version

// Create add command
yargs.command({
    command: 'add',                 // command name
    describe: 'Add a new note',
    builder: {                      // oject holding all command options
        title: {
            describe: 'Note title',
            demandOption: true,      // required
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,      // required
            type: 'string'
        }
    },
    handler: function( argv ) {      // code executed when add command is used   
        console.log( `Title: ${argv.title}` )
        console.log( `Body: ${argv.body}` )
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing out all notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read all notes',
    handler: function() {
        console.log('Reading all the notes!')
    }
})

yargs.parse()
//console.log( yargs.argv ) // 1.1.0