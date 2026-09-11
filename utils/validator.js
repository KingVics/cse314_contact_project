import joi from 'joi';

export const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    favoriteColor: joi.string().required(),
    birthday: joi.date().iso().required()
})

