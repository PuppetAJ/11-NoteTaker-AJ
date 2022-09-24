// import modules and router
const path = require('path');
const router = require('express').Router();

// GET route for (url)/
router.get('/', (req, res) => {
    // serves index.html
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// GET route for (url)/notes
router.get('/notes', (req, res) => {
    // serves notes.html
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// GET route for all wildcard options
router.get('*', (req, res) => {
    // serves index.html
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// export router
module.exports = router;