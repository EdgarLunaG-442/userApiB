const { request, response } = require('express')
const Rol = require('../models/rol')
const rolPost = async(req=request,res=response)=>
{
	try
	{
		const {rol} = req.body
		const nuevoRol = new Rol({rol})
		await nuevoRol.save()
		res.json({msg: 'Se creo correctamente el rol',value:rol})
	}
	catch(e)
	{
		
	}

}

module.exports=
{
	rolPost
}