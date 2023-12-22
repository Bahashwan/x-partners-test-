const express = require('express');
const multer = require('multer');
const Photo = require('../models/Photo'); 
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');


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

router.post('/upload/:userId', upload.single('photo'), async(req, res) => {
  try{
  const userId = req.params.userId
  const user = await User.findById(userId);
  if (!user) res.status(500).send('an Error has accured')
  const photo = new Photo({
    filename: req.file.filename,
    path: req.file.path,
  });
  photo.save();

  user.photos.push(photo);
    await user.save();

 
  res.status(200).json({data:'success', photo});}catch(err){
console.log(err);
  }
});




module.exports = router;
