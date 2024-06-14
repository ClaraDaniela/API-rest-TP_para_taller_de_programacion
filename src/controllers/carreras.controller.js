const data = require('../../data/data.json')

const carreras = data.map(c => c.Carrera) 

const getAllCarreras = async (req, res) => {
    await res.status(200).json(carreras)
}

const getCarreraById = async (req, res) => {
    const id = req.params.id
    const carrera = carreras.find(c => c.id == id)
    await res.status(200).json(carrera)
}

const createCarrera = async (req, res) => {
    const carrera = req.body
    let id = 1
    if (carreras.length) {
        const ids = carreras.map(c => c.id)
        id = Math.max(...ids) + 1
    }
    const nuevaCarrera = { id, ...carrera }
    carreras.push(nuevaCarrera)
    await res.status(201).json(nuevaCarrera) 
}

const deleteCarreraById = async (req, res) => {
    const id = req.params.id
    const idx = carreras.findIndex(c => c.id == id)
    if (idx >= 0) {
        const borrados = carreras.splice(idx, 1)
        await res.status(200).json({ mensaje: `La carrera con id ${id} fue borrada con éxito`, objeto: borrados[0] })
    } 
}

module.exports = { getAllCarreras, getCarreraById, createCarrera, deleteCarreraById }
