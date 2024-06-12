const { Router } = require('express')
const carrerasController = require('../controllers/carreras.controller')
const carrerasMiddleware = require('../middlewares/carreras.middleware')
const schemaValidator = require('../middlewares/schemaValidator')
const { carreraSchema } = require('../schemas/carreras.schema')

const route = Router()

route.get('/carreras', carrerasMiddleware.existenCarreras, carrerasController.getAllCarreras)
route.get('/carreras/:id', carrerasMiddleware.existeCarreraById, carrerasController.getCarreraById)
route.post('/carreras', schemaValidator(carreraSchema), carrerasController.createCarrera)
route.delete('/carreras/:id', carrerasMiddleware.existeCarreraById, carrerasController.deleteCarreraById)

module.exports = route
