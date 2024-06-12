const data = require('../../data/data.json')
const carreras = data.map(item => item.Carrera)

const existeCarreraById = (req, res, next) => {
    const carreraId = parseInt(req.params.id)
    const carrera = carreras.find(c => c.id === carreraId)

    if (!carrera) {
        return res.status(404).json({
            error: `No se encuentra la carrera con el id ${carreraId} desde carreras middleware`
        })
    }
    next()
}

const existenCarreras = (req, res, next) => {
    if (carreras.length === 0) {
        return res.status(400).json({
            error: "No existen carreras por el momento"
        })
    }
    next()
}

module.exports = { existeCarreraById, existenCarreras }

