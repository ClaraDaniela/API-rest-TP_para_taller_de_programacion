const data = require('../../data/data.json')

const carreras = data.map(c => c.Carrera)

const existeMateriaById = (req, res, next) => {
    const id = req.params.id

    const materias = carreras.flatMap(carrera => carrera.materias)

    const materia = materias.find(m => m.id == id)

    if (!materia) {
        return res.status(404).json({ 
            error: `Materia con el id ${id} no fue encontrada` 
        })
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

module.exports = { existeMateriaById, existenMaterias }
