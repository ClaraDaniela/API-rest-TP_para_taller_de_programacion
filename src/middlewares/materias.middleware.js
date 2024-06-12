const data = require('../../data/data.json')
const carreras = data.map(item => item.Carrera)

const existenMateriasCarreraId = (req, res, next) => {
    const carreraId = parseInt(req.params.carreraId)
    const carrera = carreras.find(c => c.id === carreraId)
    if (!carrera) {
        return res.status(404).json({ error: `No se encuentra la carrera con el id ${carreraId}` })
    }
    if (carrera.materias.length === 0) {
        return res.status(400).json({ error: "No existen materias en esta carrera por el momento" })
    }
    next()
}

const existenMaterias = (req, res, next) => {
    const materias = carreras.flatMap(carrera => carrera.materias)
    if (materias.length === 0) {
        return res.status(400).json({ error: "No existen materias por el momento" })
    }
    next()
}

module.exports = { existenMateriasCarreraId, existenMaterias }
