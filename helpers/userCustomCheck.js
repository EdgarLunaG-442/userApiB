const Usuario = require("../models/usuario")
const Role = require('../models/rol')

const bcrypt = require('bcryptjs')
const { request } = require("express")

const existeCorreo=async(correo)=>
{
    const usuarioExiste = await Usuario.findOne({correo})
    if(usuarioExiste)
    {
        throw new Error('El correo ya existe en la base de datos')
    }
}

const validarUsuarioExiste = async(correo)=>
{
    const usuarioExiste = await Usuario.findOne({correo})
    if(!usuarioExiste)
    {
        throw new Error('El correo no existe en la base de datos')
    }
    else
    {
        const activo = (usuarioExiste['activo'] ==="true")
        if(!activo)
        {
            throw new Error('El usuario no se encuentra activo')
        }
    }
}
const validarExisteId = async(id)=>
{
    const usuarioExiste = await Usuario.findById(id)
    if(!usuarioExiste)
    {
        throw new Error('El usuario no existe en la base de datos')
    }
    else
    {
        const activo = (usuarioExiste['activo'] ==="true")
        if(!activo)
        {
            throw new Error('El usuario no se encuentra activo')
        }
    }
}
const coincidePass = async({correo,pass})=>
{
    const {pass:passUser} = await Usuario.findOne({correo});
    const coincide = bcrypt.compareSync(pass,passUser);
    if(!coincide)
    {
        throw new Error('La contrasena es incorrecta')
    }

}

const rolExiste = async(rol)=>
{
    const rolExiste = await Role.findOne({rol});
    if(!rolExiste)
    {
        throw new Error('El rol no existe en la BD')
    }
}

const getQueryChecker = async({min,max})=>
{
    if(min)
    {
        let minNumber = Number(min)
        if(minNumber!==0 && !minNumber)
        {
            throw new Error('El minimo debe ser un valor numerico')
        }

    }
    if(max)
    {
        maxNumber = Number(max)
        if(maxNumber!==0 && !maxNumber)
        {
            throw new Error('El maximo debe ser un valor numerico')
        }

    }
}

const compararUsuarios = async (id,{req})=>
{
    if(id!==req.uid)
    {
        if(!(req.usuario.rol === 'ADMIN'))
        {
            throw new Error('No tiene los permisos para realizar esta accion')
        }
        
    }
}

module.exports = 
{
    existeCorreo,
    rolExiste,
    getQueryChecker,
    validarUsuarioExiste,
    coincidePass,
    validarExisteId,
    compararUsuarios
}