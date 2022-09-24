// import router and routes
const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');

// use imported noteRoutes in the router
router.use(noteRoutes);

// export router
module.exports = router;