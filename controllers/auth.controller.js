const { response, request } = require("express")
const bcrypt = require('bcryptjs')
const jwt = require('../helpers/generarJWT')

const Usuario = require("../models/usuario")



const loginPost = async(req=request,res=response)=>
{
	const {correo,pass} = req.body

	try{

		//verificar si existe email
		const usuarioExiste = await Usuario.findOne({correo})
		if(!usuarioExiste)
		{
			return
		}
	
		//verificar si el usuario esta activo

		if(!(usuarioExiste.activo==="true"))
		{
			return
		}

		//verificar contrasena
		const {pass:passUser} = await Usuario.findOne({correo});
		const coincide = bcrypt.compareSync(pass,passUser);
		if(!coincide)
		{
			return
		}
		//Generar JWT

		const [token,usuario] = await Promise.all([jwt(usuarioExiste['id']),usuarioExiste.toJSON()])

		res.json({token,usuario})
	}
	catch(e)
	{
		res.status(500).json(
			{
				msg:'Error, comunicarse con el administrador'
			}
		)
	}


}

module.exports=
{
	loginPost
}