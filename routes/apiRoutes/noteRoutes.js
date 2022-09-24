const router = require('express').Router();
const data = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes.js');

router.get('/notes', (req, res) => {
    res.json(data);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, data);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    res.send('hello');
})

module.exports = router;