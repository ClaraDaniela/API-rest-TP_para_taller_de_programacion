const Joi = require('joi')

const materiaSchema = Joi.object({
    nombre: Joi.string().min(5).max(50).required().messages({
        "string.base": "nombre debe ser un texto",
        "string.empty": "nombre no debe ser vacío",
        "string.min": "nombre debe tener al menos 5 caracteres",
        "string.max": "nombre debe tener como máximo 20 caracteres",
        "any.required": "nombre es requerido"
    }),
    cuatrimestral: Joi.number().integer().valid(1, 2).required().messages({
        "number.base": "cuatrimestral debe ser un número",
        "number.integer": "cuatrimestral debe ser un número entero",
        "any.only": "cuatrimestral debe ser 1 o 2",
        "any.required": "cuatrimestral es requerido"
    }),
    anio: Joi.number().integer().min(1).max(6).required().messages({
        "number.base": "anio debe ser un número",
        "number.integer": "anio debe ser un número entero",
        "number.min": "anio debe ser al menos 1",
        "number.max": "anio debe ser como máximo 6",
        "any.required": "anio es requerido"
    })
})

module.exports = { materiaSchema }


