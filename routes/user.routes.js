const {Router} = require('express');
const {check,query} = require('express-validator')
const userRouter = Router();


const { usersGet, userPost, userGet } = require('../controllers/user.controllers');
const { rolExiste, existeCorreo, getQueryChecker, validarExisteId, compararUsuarios } = require('../helpers/userCustomCheck');
const validarCampos = require('../helpers/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

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
            validarJWT,
            check('id').custom(compararUsuarios),
            query('').custom(getQueryChecker),
            validarCampos
        ],
        usersGet)

userRouter.get('/:id',
    [
        validarJWT,
        check('id').custom(validarExisteId),
        check('id','El id es incorrecto').isMongoId(),
        check('id').custom(compararUsuarios),
        validarCampos
    ],
    userGet)




module.exports = userRouter