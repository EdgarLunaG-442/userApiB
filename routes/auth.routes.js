const {Router} = require('express');
const {check,query, body} = require('express-validator');
const { loginPost } = require('../controllers/auth.controller');
const { existeCorreo, validarUsuarioExiste, coincidePass } = require('../helpers/userCustomCheck');
const validarCampos = require('../helpers/validar-campos');
const authRouter = Router()

authRouter.post(
	'/login',
	[
		check('correo','El correo es necesario y en formato valido').isEmail(),
		check('correo').custom(validarUsuarioExiste),
		check('pass','La contrasena es necesaria').not().isEmpty(),
		body().custom(coincidePass),
		validarCampos
	]
	,loginPost
)


module.exports = authRouter