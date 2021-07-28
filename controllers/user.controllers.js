const { request, response } = require("express")
const bcrypt = require('bcryptjs')

const Role = require('../models/rol')
const Usuario = require("../models/usuario")

const usersGet=async(req=request,res=response)=>
{
    try
    {
        let {min=0,max=5} = req.query

        min=Number(min);
        max=Number(max)

        const usuariosArray = await Usuario.find({activo:true}).skip(min).limit(max)
        res.json(usuariosArray)
    }
    catch(e)
    {

    }

}

const userGet=async(req=request,res=response)=>
{
   try
   {
       id = req.url.split('/')[1]
       let usuarioExiste = await Usuario.findById(id)
       const usuarioAutenticado = req.usuario

       res.json({usuarioExiste,usuarioAutenticado})
   }
   catch(e)
   {

   }
}


const userPost=async(req = request,res = response)=>
{
    try
    {
        let {pass,activo,...resto} = req.body;
        const salt  = bcrypt.genSaltSync(10);
        pass = bcrypt.hashSync(pass,salt);
        resto['pass']=pass
        const newUser = await new Usuario(resto)
        res.json(newUser);
        newUser.save()
    }
    catch(e)
    {

    }


}
const userPut=(req,res)=>
{
    res.send('Hola')
}
const userDelete=(req,res)=>
{
    res.send('Hola')
}

module.exports = 
{
    usersGet,
    userGet,
    userPost,
    userPut,
    userDelete
}