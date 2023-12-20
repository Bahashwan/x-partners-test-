const express = require('express');
const multer = require('multer');
const Photo = require('../models/Photo'); 
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');


const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const orFileName=file.originalname
    const unique = Date.now() + '-' + uuidv4();
    const filetype = orFileName.split('.')[1]
    const filename = `${unique}.${filetype}`
    cb(null, filename);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('photo'), (req, res) => {
  const photo = new Photo({
    filename: req.file.filename,
    path: req.file.path
  });
  photo.save();

  console.log(photo);
  res.send('success');
});



module.exports = router;
