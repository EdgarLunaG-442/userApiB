const Usuario = require("../models/usuario")
const Role = require('../models/rol')

const existeCorreo=async({correo})=>
{
    const usuarioExiste = await Usuario.findOne({correo})
    if(usuarioExiste)
    {
        throw new Error('El correo ya existe en la base de datos')
    }
}

const rolExiste = async({rol})=>
{
    const rolExiste = await Role.findOne({rol});
    if(!rolExiste)
    {
        throw new Error('El rol no existe en la BD')
    }
}

module.exports = 
{
    existeCorreo,
    rolExiste
}