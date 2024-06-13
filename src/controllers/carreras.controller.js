const data = require('../../data/data.json')

const carreras = data.map(c => c.Carrera) 

const getAllCarreras = (req, res) => {
    res.status(200).json(carreras)
}

const getCarreraById = (req, res) => {
    const id = req.params.id
    const carrera = carreras.find(c => c.id == id)
    res.status(200).json(carrera)
}

const createCarrera = (req, res) => {
    const carrera = req.body
    let id = 1
    if (carreras.length) {
        const ids = carreras.map(c => c.id)
        id = Math.max(...ids) + 1
    }
    const nuevaCarrera = { id, ...carrera }
    carreras.push(nuevaCarrera)
    res.status(201).json(nuevaCarrera) 
}

const deleteCarreraById = (req, res) => {
    const id = req.params.id
    const idx = carreras.findIndex(c => c.id == id)
    if (idx >= 0) {
        const borrados = carreras.splice(idx, 1)
        res.status(200).json({ mensaje: `La carrera con id ${id} fue borrada con éxito`, objeto: borrados[0] })
    } else {
        res.status(404).json({ error: `La carrera con id ${id} no se pudo borrar` })
    }
}

module.exports = { getAllCarreras, getCarreraById, createCarrera, deleteCarreraById }
