
export function validateSchema(schema){

    return (req, res, next) => {
        
        const validates = schema.validate(req.body, {abortEarly:false});
       
        if (validates.error){

            const messages = validates.error.details.map(detail => detail.message)
            return res.status(422).send(messages)
        }
        next();
    }
};