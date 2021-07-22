const {Router} = require('express');
const {check} = require('express-validator')
const userRouter = Router();


const { userGet } = require('../controllers/user.controllers');
const validarCampos = require('../helpers/validar-campos');

userRouter.post('/',
        [
            check('nombre','El campo de nombre no puede ser nulo o vacio').not().isEmpty(),
            check('apellido','El campo apellido no puede ser nulo o vacio').not().isEmpty(),
            check('correo','El correo no tiene el formato valido').isEmail(),
            check('correo','El correo ya existe').custom(existe),
            check('pass').isLength({min:4}),
            validarCampos
        ]
        ,userGet
    )


module.exports = userRouter