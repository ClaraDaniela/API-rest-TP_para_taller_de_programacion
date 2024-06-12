const data = require('../../data/data.json')
const carreras = data.map(c => c.Carrera)

const getAllMaterias = (req, res) => {
    const allMaterias = carreras.flatMap(carrera => carrera.materias)
    res.status(200).json(allMaterias)
};

const createMateria = (req, res) => {
    const materia = req.body
    const carreraId = parseInt(req.params.id)

    const carrera = carreras.find(c => c.id === carreraId)
    if (!carrera) {
        return res.status(404).json({ error: 'Carrera no encontrada' })
    }

    let id = 1
    if (carrera.materias.length > 0) {
        const ids = carrera.materias.map(m => m.id)
        id = Math.max(...ids) + 1
    }

    const nuevaMateria = { id, ...materia, carreraId }
    carrera.materias.push(nuevaMateria)

    res.status(201).json(nuevaMateria)
}

const getMateriasByCarreraId = (req, res) => {
    const carreraId = parseInt(req.params.carreraId)
    const carrera = carreras.find(c => c.id === carreraId)

    if (!carrera) {
        return res.status(404).json({ error: 'Carrera no encontrada' })
    }

    res.status(200).json(carrera.materias)
}

const getMateriaById = (req, res) => {
    const carreraId = parseInt(req.params.carreraId)
    const materiaId = parseInt(req.params.materiaId)
    const carrera = carreras.find(c => c.id === carreraId)

    if (!carrera) {
        return res.status(404).json({ error: 'Carrera no encontrada' })
    }

    const materia = carrera.materias.find(m => m.id === materiaId)
    if (!materia) {
        return res.status(404).json({ error: 'Materia no encontrada' })
    }

    res.status(200).json(materia)
}

const deleteMateriaById = (req, res) => {
    const carreraId = parseInt(req.params.carreraId)
    const materiaId = parseInt(req.params.materiaId)
    const carrera = carreras.find(c => c.id === carreraId)

    if (!carrera) {
        return res.status(404).json({ error: 'Carrera no encontrada' })
    }

    const materiaIdx = carrera.materias.findIndex(m => m.id === materiaId)
    if (materiaIdx >= 0) {
        const borrada = carrera.materias.splice(materiaIdx, 1)
        res.status(200).json({ mensaje: `La materia con id ${materiaId} fue borrada con éxito`, objeto: borrada[0] })
    } else {
        res.status(404).json({ error: `La materia con id ${materiaId} no se encuentra` })
    }
}

module.exports = { createMateria, getMateriasByCarreraId, getAllMaterias, getMateriaById, deleteMateriaById }