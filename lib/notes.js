const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createNewNote(body, notesArr) {
    const note = body;
    note.id = uuidv4();
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );

    return note;
};

module.exports = {createNewNote};

