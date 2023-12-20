
const express = require('express');
const router = express.Router();

// User
const userRoutes = require('../routes/user');
router.use('/api/users', userRoutes);

//Photos
const photoRoutes = require('../routes/photo');
router.use('/api/photo', photoRoutes);



module.exports = router;


