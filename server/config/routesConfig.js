
const express = require('express');
const router = express.Router();
// const fs = require('fs');

// UserAuth
const userAuthRoutes = require('../routes/userAuth');
router.use('/api/auth', userAuthRoutes);

//Photos
const photoRoutes = require('../routes/photo');
router.use('/api/photo', photoRoutes);

//User
const userRoutes = require('../routes/user')
router.use('/api/user', userRoutes);


module.exports = router;


