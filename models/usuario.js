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
            type: Schema.Types.ObjectId,
            ref:'Role',
            required:true
        },
        activo:
        {
            type: String,
            default:true
        }

    }
)

schemaUsuario.methods.toJSON = async function()
{
    const user = this.toObject()
    const {pass,activo,__v,...resto}= user
    const rol = await model('Role').findById(resto['rol'])
    resto['rol'] = rol.rol
    return resto

}



module.exports = model('Usuario',schemaUsuario);