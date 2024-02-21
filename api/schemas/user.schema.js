const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(21);
const role = Joi.string().min(5)
const job = Joi.string().min(5)

const createUserSchema = Joi.object({
  name: name.required(),
  role: role.required(),
  job: job.required()
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  role: role,
  job:job,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
