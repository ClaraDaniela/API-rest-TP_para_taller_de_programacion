const Joi = require('joi')

const materiaSchema = Joi.object({
    nombre: Joi.string().required().messages({
        "string.empty": "nombre no debe ser vacío",
        "any.required": "nombre es requerido"
    }),
    cuatrimestral: Joi.number().integer().required().messages({
        "number.base": "cuatrimestral debe ser un número",
        "number.integer": "cuatrimestral debe ser un número entero",
        "any.required": "cuatrimestral es requerido"
    }),
    anio: Joi.number().integer().required().messages({
        "number.base": "anio debe ser un número",
        "number.integer": "anio debe ser un número entero",
        "any.required": "anio es requerido"
    })
    
})

module.exports = { materiaSchema }

