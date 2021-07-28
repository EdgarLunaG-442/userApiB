const Usuario = require("../models/usuario")

const { response, request } = require("express")
const bcrypt = require('bcryptjs')

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

		res.json(
			{
				correo,
				pass
			}
		)
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