const express = require('express');
const { userRouter } = require('../routes/user.routes');
const path = require('path');
const conectarDB = require('../config/configDB');
require('dotenv').config();

class Servidor
{
    constructor()
    {
        this.port = process.env.PORT;
        this.app = express();
        this.userRoute='/api/usuarios';

        //middlewares
        this.middlewares()

        //database

        conectarDB(); 

        // rutas
        this.rutasUsuarios()

    }

    middlewares()
    {
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    rutasUsuarios()
    {
        this.app.use(this.userRoute,userRouter)
    }

    listen()
    {
        console.log('Servidor corriendo en puerto 8080')
        this.app.listen(this.port)
    }
}

module.exports=Servidor