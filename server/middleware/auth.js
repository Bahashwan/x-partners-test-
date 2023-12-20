const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, 'topSecretKeyThatShouldBeCHangedASAP'); // Replace 'secret_key' with the same secret key used for token generation
    req.user = decoded;
    
    next();
  } catch (error) {
    return res.status(401).send('Invalid token.');
  }
};

module.exports = authMiddleware;
