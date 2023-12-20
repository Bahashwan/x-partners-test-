const jwt = require('jsonwebtoken');

const generateToken = (user)=>{
    return jwt.sign({ userId: user._id }, 'topSecretKeyThatShouldBeCHangedASAP',{ expiresIn: '12h' }); 
}

module.exports = generateToken