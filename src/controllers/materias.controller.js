const data = require('../../data/data.json')

const carreras = data.map(c => c.Carrera)

const getAllMaterias = (req, res) => {
    const allMaterias = carreras.flatMap(carrera => carrera.materias)
    res.status(200).json(allMaterias)
}

const createMateria = (req, res) => {
    const materia = req.body
    const carreraId = parseInt(req.params.id)

    const carrera = carreras.find(c => c.id == carreraId)

    let id = 1
    if (carrera.materias.length) {
        const ids = carrera.materias.map(m => m.id)
        id = Math.max(...ids) + 1
    }

    const nuevaMateria = { id, ...materia, carreraId }
    carrera.materias.push(nuevaMateria)

    res.status(201).json(nuevaMateria)
}

const getMateriasByCarreraId = (req, res) => {
    const id = req.params.id

    const carrera = carreras.find(c => c.id == id)

    res.status(200).json(carrera.materias)
}

const getMateriaById = (req, res) => {
    const id = req.params.id
    const materiaId = req.params.materiaId

    const carrera = carreras.find(c => c.id == id)

    const materia = carrera.materias.find(m => m.id == materiaId)

    res.status(200).json(materia)
}

const deleteMateriaById = (req, res) => {
    const id = req.params.id
    const materiaId = req.params.materiaId

    const carrera = carreras.find(c => c.id == id)

    const materiaIdx = carrera.materias.findIndex(m => m.id == materiaId)
    if (materiaIdx >= 0) {
        const borrada = carrera.materias.splice(materiaIdx, 1)
        res.status(200).json({ mensaje: `La materia con id ${materiaId} fue borrada con éxito`, objeto: borrada[0] })
    } else {
        res.status(404).json({ error: `La materia con id ${materiaId} no se pudo borrar` })
    }
}

module.exports = { createMateria, getMateriasByCarreraId, getAllMaterias, getMateriaById, deleteMateriaById }