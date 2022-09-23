const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const data = require('../../db/db.json');
const { json } = require('express');

router.get('/notes', (req, res) => {
    res.json(data);
});

router.post('/notes', (req, res) => {

    req.body.id = data.length.toString();

    const note = req.body;

    data.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(data, null, 2) 
    )

    res.json(note);

});

// router.post('/api/notes', (req, res) => {

// });

module.exports = router;