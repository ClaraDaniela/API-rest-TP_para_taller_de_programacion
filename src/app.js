const express = require('express')
const app = express()
const carrerasRoute = require('./routes/carreras.route.js')
const materiasRoute = require('./routes/materias.route.js')
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(carrerasRoute)
app.use(materiasRoute)

app.listen(PORT, () => {
    console.log("Servidor activo")
})
