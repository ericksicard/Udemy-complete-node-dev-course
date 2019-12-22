const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    return 'Your notes...'
}

const addNote = function( title, body ) {
    // 1- LOADS THE NOTES 
    const notes = loadNotes();
    // checking for duplicated items in the array
    const duplicateNotes = notes.filter( function( note ) {
        return note.title === title;
    })

    if ( duplicateNotes.length === 0 ) {
        // 2- CHANGING THE NOTES: adding the argument values to the array 
        notes.push({
            title,          // same as title: title
            body
        })        
        // 3- SAVING THE NOTES
        saveNotes( notes );

        console.log('New note added!');
    }
    else {
        console.log('Note title taken!');
    }    
}

const removeNote = function( title ) {
    // 1- LOADS THE NOTES 
    const notes = loadNotes();
    // keeping unique items in the array
    const notesToKeep = notes.filter( function( note ) {
        return note.title !== title;
    })

    if ( notesToKeep.length < notes.length ) {
        saveNotes( notesToKeep );
        console.log( chalk.bgGreen('Note removed!') );
    }
    else {
        console.log( chalk.bgRed('No note found!') );
    }
}

/******* Re-usable functions ***************/
// saves the new data
const saveNotes = function( notes ) {
    const dataJSON = JSON.stringify( notes );
    fs.writeFileSync( 'notes.json', dataJSON );
}

// loads notes and return an array of notes
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse( dataJSON );
    } catch (e) {
        return [];
    }
}
/*******************************************/

module.exports = {
    getNotes,
    addNote,
    removeNote
}