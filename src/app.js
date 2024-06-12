const express = require('express')
const app = express()
const carrerasRoute = require('./routes/carreras.route.js')
const materiasRoute = require('./routes/materias.route.js')

app.use(express.json())
app.use(carrerasRoute)
app.use(materiasRoute)

app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000")
})
