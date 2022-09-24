// Import required modules
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Logic for creating a new note
function createNewNote(body, notesArr) {
    // note to be created is sent as body
    const note = body;
    // add a uuid to the note set to id property
    note.id = uuidv4();
    // push the new note to the existing notes array in db.json
    notesArr.push(note);

    // replace db.json with new data
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );
    
    // return note for server response
    return note;
};

// Logic for deleting a specified note
function deleteNote(Id, notesArr) {
    // get the index of the note by finding it in the array using its UUID
    const index = notesArr.indexOf(notesArr.find(el => el.id === Id));
    // if the index is greater than -1 (prevents any undefined responses)
    if (index > -1) {
        // splice the array (removes the selected element)
        notesArr.splice(index, 1);
        // write the new array into db.json
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(notesArr, null, 2)
        );
    }

    // return notesArr for server response
    return notesArr;
};

// Export functions
module.exports = {
    createNewNote,
    deleteNote
};

