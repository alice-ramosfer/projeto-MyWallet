import joi from "joi";

export const userSignUpSchema = joi.object({
    
    nome: joi.string().required(),
    email:joi.string().email().required(),
    senha:joi.string().min(6).required()
});

export const userSignInSchema = joi.object({
    email:joi.string().email().required(),
    senha:joi.string().required()
});