const Joi = require('joi')
const { materiaSchema } = require('./materias.schema')

const carreraSchema = Joi.object({
    nombre: Joi.string().max(50).required().messages({
        "string.max": "nombre debe tener como máximo {#limit} caracteres",
        "string.empty": "nombre no debe ser vacío",
        "any.required": "nombre es requerido"
    }),
    grado: Joi.string().valid("Licenciatura", "Tecnicatura", "Diplomatura").required().messages({
        "any.required": "grado es requerido",
        "any.only": "Los grados solo pueden ser Licenciatura, Tecnicatura o Diplomatura"
    }),
    universidad: Joi.string().max(50).required().messages({
        "string.max": "universidad debe tener como máximo {#limit} caracteres",
        "string.empty": "universidad no debe ser vacía",
        "any.required": "universidad es requerida"
    }),
    materias: Joi.array().items(materiaSchema).required().messages({
        "array.base": "materias debe ser un arreglo",
        "any.required": "materias es requerido"
    })
})

module.exports = { carreraSchema }
