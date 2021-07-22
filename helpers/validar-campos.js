const { validationResult } = require("express-validator")

const validarCampos=async(req,res,next)=>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        res.status(400).json(
            {
                errors: errors.array()
            }
        )
    }
    next();
}

module.exports = validarCampos