const {Schema, model} = require('mongoose')

const schemaRol = new Schema(
	{
		rol:
		{
			type: String,
			required: true
		}
	}
)

module.exports = model('Role',schemaRol)