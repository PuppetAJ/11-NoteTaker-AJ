const router = require('express').Router();
const data = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes.js');

router.get('/notes', (req, res) => {
    res.json(data);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, data);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const arr = deleteNote(id, data);
    res.json(arr);
})

module.exports = router;