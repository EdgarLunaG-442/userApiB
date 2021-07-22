const Usuario = require("../models/usuario")

const existeCorreo=async({correo})=>
{
    const usuarioExiste = await Usuario.findOne({correo})
    if(usuarioExiste)
    {
        throw new Error('El correo ya existe en la base de datos')
    }
}

module.exports = 
{
    existeCorreo
}