const data = require('../../data/data.json')

const carreras = data.map(c => c.Carrera)

const existenMateriasCarreraId = (req, res, next) => {
    const id = req.params.id

    const carrera = carreras.find(c => c.id == id)

    if (carrera.materias.length == 0) {
        return res.status(400).json({ error: "No existen materias en esta carrera por el momento" })
    }
    next()
}

const existenMaterias = (req, res, next) => {
    const materias = carreras.flatMap(carrera => carrera.materias)
    if (materias.length == 0) {
        return res.status(400).json({ error: "No existen materias por el momento" })
    }
    next()
}

module.exports = { existenMateriasCarreraId, existenMaterias }
