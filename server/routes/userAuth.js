const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const authMiddleware = require('../middleware/auth');
const registerValidation = require('../middleware/registerValidation');
const generateToken = require('../middleware/JWT-TokenGenerate');

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');
  if (req.body.password != req.body.rePassword)
    return res.status(400).send("passwords doesn't match");
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dateOfBirth: req.body.dateOfBirth,
    sex: req.body.sex,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = generateToken(user);
  res.status(200).json({
    success: true,
    data: 'User registered successfully.',
    user,
    token,
  });
});

router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email }).populate('photos').exec();
  if (!user) {
    return res.status(401).send('Invalid email or password.');
  }

  const validPassword = await user.comparePassword(password);
  user = await User.findOne({ email })
    .select('-password')
    .populate('photos')
    .exec();
  if (!validPassword) {
    return res.status(401).send('Invalid email or password.');
  }
  const token = generateToken(user);
  if (token) res.status(200).json({ token, user, success: true });
});

router.get('/login/token', authMiddleware, async (req, res) => {
  try {
    var userId = req.user.userId;

    var user = await User.findById(userId)
      .select('-password')
      .populate('photos')
      .exec();
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).send('something went Wrong');
  }
});

module.exports = router;
