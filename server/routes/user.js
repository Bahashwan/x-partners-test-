const express = require('express');
const Photo = require('../models/Photo');
const User = require('../models/user');

const router = express.Router();


// 
router.get('/getAll', async (req, res) => {
  const users =await User.find().select('-password').populate('photos').exec();

  if(users)res.status(200).json(users)
});

module.exports = router;
