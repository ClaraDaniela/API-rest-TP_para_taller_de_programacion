const data = require('../../data/data.json')

const carreras = data.map(c => c.Carrera)

const getAllMaterias = async (req, res) => {
    const allMaterias = carreras.flatMap(carrera => carrera.materias)
    await res.status(200).json(allMaterias)
}

const createMateria = async (req, res) => {
    const materia = req.body
    const carreraId = req.params.id

    const carrera = carreras.find(c => c.id == carreraId)

    let id = 1
    if (carrera.materias.length) {
        const ids = carrera.materias.map(m => m.id)
        id = Math.max(...ids) + 1
    }

    const nuevaMateria = { id, ...materia, carreraId }
    carrera.materias.push(nuevaMateria)

    await res.status(201).json(nuevaMateria)
}

const getMateriasByCarreraId = async (req, res) => {
    const id = req.params.id

    const carrera = carreras.find(c => c.id == id)

    await res.status(200).json(carrera.materias)
}

const getMateriaById = async (req, res) => {
    const id = req.params.id

    const materias = carreras.flatMap(carrera => carrera.materias)
    const materia = materias.find(m => m.id == id)

    await res.status(200).json(materia)
}

const deleteMateriaById = async (req, res) => {
    const id = req.params.id
    const materias = carreras.flatMap(carrera => carrera.materias)

    const materiaIdx = materias.findIndex(m => m.id == id)
    if (materiaIdx >= 0) {
        const borrada = materias.splice(materiaIdx, 1)
        await res.status(200).json({ mensaje: `La materia con id ${id} fue borrada con éxito`, objeto: borrada[0] })
    } 
}

module.exports = { createMateria, getMateriasByCarreraId, getAllMaterias, getMateriaById, deleteMateriaById }