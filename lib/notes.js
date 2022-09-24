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

function deleteNote(Id, notesArr) {
    const index = notesArr.indexOf(notesArr.find(el => el.id === Id));
    if (index > -1) {
        notesArr.splice(index, 1);
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(notesArr, null, 2)
        );
    }

    return notesArr;
};

module.exports = {
    createNewNote,
    deleteNote
};

