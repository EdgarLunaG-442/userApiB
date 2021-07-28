const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT=async(req,res,next)=>
{
	const token = req.header('x-token');
	if(!token)
	{
		return res.status(401).json({msg:'No hay token en la peticion'})
	}
	try{
		const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
		req.usuario = await Usuario.findById(uid)
		req.uid=uid
		next()
	}
	catch(e)
	{
		res.status(401).json({msg:'token no valido'})
	}

}

module.exports = {validarJWT}