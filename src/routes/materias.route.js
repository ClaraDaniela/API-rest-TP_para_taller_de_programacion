const { Router } = require('express')

const materiasController = require('../controllers/materias.controller')
const materiasMiddleware = require('../middlewares/materias.middleware')
const carrerasMiddleware = require('../middlewares/carreras.middleware')
const schemaValidator = require('../middlewares/schemaValidator')
const { materiaSchema } = require('../schemas/materias.schema')

const route = Router()

route.post('/carreras/:id/materia', schemaValidator(materiaSchema), carrerasMiddleware.existeCarreraById, materiasController.createMateria)
route.get('/carreras/:id/materias', carrerasMiddleware.existeCarreraById, materiasController.getMateriasByCarreraId)
route.get('/materias', materiasMiddleware.existenMaterias, materiasController.getAllMaterias)
route.get('/materias/:id', materiasMiddleware.existeMateriaById, materiasController.getMateriaById)
route.delete('/materias/:id', materiasMiddleware.existeMateriaById, materiasController.deleteMateriaById)

module.exports = route


