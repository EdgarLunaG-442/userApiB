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
            ref:'Role'
        },
        activo:
        {
            type: String,
            default:true
        }

    }
)

module.exports = model('Usuario',schemaUsuario);