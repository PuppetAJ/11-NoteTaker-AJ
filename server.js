// import packages and routes
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// set PORT to 3001, or the environment's port
const PORT = process.env.PORT || 3001;

// create express instance
const app = express();

// middleware boilerplate
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// set server to listen on PORT
app.listen(PORT, () => {
    console.log(`Server now open on port ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
});