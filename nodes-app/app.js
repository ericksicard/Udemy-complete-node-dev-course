const fs = require('fs');
const validator = require('validator')

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
console.log( validator.isEmail('esrfree@gmail.com')) // >true
console.log( validator.isEmail('esrfree')) // >false

console.log( validator.isURL('http://udemy.com')) // >true
console.log( validator.isURL('udemy@com')) // >false