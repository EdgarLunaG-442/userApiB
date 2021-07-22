const mongoose= require('mongoose')

const conectarDB=async()=>
{
    try{
        await mongoose.connect(process.env.DB_STRING,
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true
            })
        console.log('Se conecto correctamente a la BD')
    }
    catch (e){
        console.log('Hubo un error al conectar a la BD')
    }

}

module.exports=conectarDB