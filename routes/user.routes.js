const {Router} = require('express');
const {check,query} = require('express-validator')
const userRouter = Router();


const { userGet, userPost } = require('../controllers/user.controllers');
const { rolExiste, existeCorreo, getQueryChecker } = require('../helpers/userCustomCheck');
const validarCampos = require('../helpers/validar-campos');

userRouter.post('/',
        [
            check('nombre','El campo de nombre no puede ser nulo o vacio').not().isEmpty(),
            check('apellido','El campo apellido no puede ser nulo o vacio').not().isEmpty(),
            check('correo','El correo no tiene el formato valido').isEmail(),
            check('correo','El correo ya existe').custom(existeCorreo),
            check('rol').custom(rolExiste),
            check('pass').isLength({min:4}),
            validarCampos
        ]
        ,userPost
    )

userRouter.get('/',
        [
            check('').custom(getQueryChecker),
            validarCampos
        ],
        userGet)


module.exports = userRouter