// import router, data, and functions
const router = require('express').Router();
const data = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes.js');

// GET route for /api/notes
router.get('/notes', (req, res) => {
    // responds with total notes data
    res.json(data);
});

// POST route for /api/notes
router.post('/notes', (req, res) => {
    // creates a new note, and sends it as json
    const note = createNewNote(req.body, data);
    res.json(note);
});

// DELETE route for /api/notes/id
router.delete('/notes/:id', (req, res) => {
    // deletes a specified note, and sends it as json
    const id = req.params.id;
    const arr = deleteNote(id, data);
    res.json(arr);
})

// export router
module.exports = router;