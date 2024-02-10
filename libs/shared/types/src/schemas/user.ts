import Joi from 'joi';

export const userFragmentSchema = Joi.object({
  user_id: Joi.string().required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
})
  .meta({ className: 'UserFragment' })
  .label('UserFragment');
