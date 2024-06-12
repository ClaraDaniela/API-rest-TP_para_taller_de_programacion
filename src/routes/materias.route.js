const { Router } = require('express')

const materiasController = require('../controllers/materias.controller')
const materiasMiddleware = require('../middlewares/materias.middleware')
const carrerasMiddleware = require('../middlewares/carreras.middleware')
const schemaValidator = require('../middlewares/schemaValidator')
const { materiaSchema } = require('../schemas/materias.schema')

const route = Router()

route.post('/carreras/:id/materia', schemaValidator(materiaSchema), carrerasMiddleware.existeCarreraById, materiasController.createMateria)
route.get('/carreras/:carreraId/materias', carrerasMiddleware.existeCarreraById, materiasMiddleware.existenMaterias, materiasController.getMateriasByCarreraId)
route.get('/materias', materiasMiddleware.existenMaterias, materiasController.getAllMaterias)
route.get('/carreras/:carreraId/materias/:materiaId', materiasMiddleware.existenMateriasCarreraId, materiasController.getMateriaById)
route.delete('/carreras/:carreraId/materias/:materiaId', materiasMiddleware.existenMateriasCarreraId, materiasController.deleteMateriaById)

module.exports = route


