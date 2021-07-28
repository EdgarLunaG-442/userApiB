const { request, response } = require("express")
const bcrypt = require('bcryptjs')

const Role = require('../models/rol')
const Usuario = require("../models/usuario")

const userGet=async(req=request,res=response)=>
{
    let query = req.query
    let {min,max}=query
    res.json({max})
}

const userPost=async(req = request,res = response)=>
{
        let {pass,rol,...resto} = req.body;
        const {activo,...userJson} = resto;
        userJson['rol'] = rol;
        const salt  = bcrypt.genSaltSync(10);
        pass = bcrypt.hashSync(pass,salt);
        rol = await Role.findOne({rol})
        resto['rol']=rol
        resto['pass']=pass
        const newUser = await new Usuario(resto)
        res.json(userJson);
        newUser.save()

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
    userGet,
    userPost,
    userPut,
    userDelete
}