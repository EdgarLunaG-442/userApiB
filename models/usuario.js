const {Schema,model} = require('mongoose')

const schemaUsuario = new Schema(
    {
        nombre:
        {
            type: String,
            required:true
        },
        apellido:
        {
            type: String,
            required:true
        },
        correo:
        {
            type: String,
            required:true
        },
        pass:
        {
            type: String,
            required:true
        },
        rol:
        {
            type:String,
            required:true
        },
        activo:
        {
            type: String,
            default:true
        }

    }
)

schemaUsuario.methods.toJSON =function()
{
    const user = this.toObject()
    const {pass,activo,_id,__v,...resto}= user
    resto.uuid =_id
    return resto

}



module.exports = model('Usuario',schemaUsuario);