const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    return 'Your notes...'
}

const addNote = ( title, body ) => {
    // 1- LOADS THE NOTES 
    const notes = loadNotes();
    // checking for duplicated items in the array
    const duplicateNotes = notes.filter( note => note.title === title );

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

const removeNote = title => {
    // 1- LOADS THE NOTES 
    const notes = loadNotes();
    // keeping unique items in the array
    const notesToKeep = notes.filter( note => note.title !== title );

    if ( notesToKeep.length < notes.length ) {
        saveNotes( notesToKeep );
        console.log( chalk.bgGreen('Note removed!') );
    }
    else {
        console.log( chalk.bgRed('No note found!') );
    }
}

const listNotes = () => {
    // 1- LOADS THE NOTES 
    const notes = loadNotes();

    console.log( chalk.bgGreen('Your notes!') );
    notes.forEach( note => console.log( note.title ))
};

/******* Re-usable functions ***************/
// saves the new data
const saveNotes = notes => {
    const dataJSON = JSON.stringify( notes );
    fs.writeFileSync( 'notes.json', dataJSON );
}

// loads notes and return an array of notes
const loadNotes = () => {
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
    removeNote,
    listNotes
}