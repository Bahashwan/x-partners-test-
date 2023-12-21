const Joi = require('joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(8).required(),
    rePassword:Joi.string().min(8).required(),
    dateOfBirth:Joi.string().min(10).required(),
    sex:Joi.string().min(4).required(),
  });

  return schema.validate(data);
};

module.exports = registerValidation;
