const { request } = require("express")
const bcrypt = require('bcryptjs')

const Role = require('../models/rol')

const userGet=(req,res)=>
{
    res.send('Hola')
}

const userPost=(req = request,res)=>
{
    const {pass,rol,...resto} = req.body;
    const salt  = bcrypt.genSaltSync(10);
    pass = bcrypt.hashSync(pass,salt);
    rol = new Role({rol})
    resto['rol']=rol
    reso['pass']=pass
    
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