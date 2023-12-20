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
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res
    .status(200)
    .json({ success: true, data: 'User registered successfully.' });
});

router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send('Invalid email or password.');
  }

  const validPassword = await user.comparePassword(password);
  if (!validPassword) {
    return res.status(401).send('Invalid email or password.');
  }
  const token = generateToken(user);
  res.status(200).json({ token, userId: user['_id'] });
});

router.get('/login/token', authMiddleware, async (req, res) => {
  try {
    var userId = req.user.userId;

    var user = await User.findById(userId);
    res.status(200).json({
      message: 'Protected route accessed successfully.',
      user: user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send('something went Wrong');
  }
});

module.exports = router;
