
import Joi from "joi";
import ApiError from "../utils/ApiError.js";

export const signUpValidation = async (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).trim().required(),
        email: Joi.string().email().trim().required(),
        password: Joi.string().min(6).trim().required()
    });
      
    const validation = schema.validate(req.body);
    if (validation.error) {
        return next(new ApiError(validation.error.details[0].message, 400));
    }
    next();
}


 export const loginValidation = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().trim().required(),
        password: Joi.string().min(6).trim().required()
    });

    const validation = schema.validate(req.body);
    if (validation.error) {
        return next(new ApiError(validation.error.details[0].message, 400));
    }
    next();
}