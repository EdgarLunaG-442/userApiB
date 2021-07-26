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

const getQueryChecker = async(req)=>
{
    console.log(req)
    // if(min)
    // {
    //     let minNumber = Number(min)
    //     if(minNumber!==0 && !minNumber)
    //     {
    //         throw new Error('El minimo debe ser un valor numerico')
    //     }

    // }
    // if(max)
    // {
    //     maxNumber = Number(max)
    //     if(maxNumber!==0 && !maxNumber)
    //     {
    //         throw new Error('El maximo debe ser un valor numerico')
    //     }

    // }
}

module.exports = 
{
    existeCorreo,
    rolExiste,
    getQueryChecker
}