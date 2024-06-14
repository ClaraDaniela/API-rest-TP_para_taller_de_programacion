# Estrellas Y Código

## Integrantes

- Cardoso Eliana Natasha
- Cantarino Clara


### Comandos necesarios para instalar y ejecutar la Api:

Principalmente, para poder usarla, hay que descargarla desde el repositorio de git. Se abre el git bash desde el directorio donde la queremos descargar, y se ejecuta el comando:
```git clone ```
Una vez que la tenemos clonada, hay que verificar si tenemos las dependencias necesarias para utilizarla. Hay que asegurarse de que tenemos Node.js y npm (Node Package Manager) instalados en tu máquina, con los siguientes comandos lo sabremos:
```node -v```

```npm -v```
Luego, si no se las tiene, se ejecuta este comando:
```npm install```
Una vez instaladas las dependencias, vamos a ejecutar la api, se le puede asignar un puerto, o sino por defecto usara el puerto 3000:
```PORT=3001 npm run dev```


### ¿Cómo armamos la estructura?

#### Data Directory (data/):
Contiene archivos JSON u otros archivos que actúan como bases de datos simuladas.

#### Controllers Directory (controllers/):
Contiene la lógica de negocio para manejar las solicitudes entrantes y devolver respuestas. Aquí es donde se define qué hacer cuando se recibe una solicitud HTTP para diferentes rutas.

#### Middlewares Directory (middlewares/):
Contiene funciones que se ejecutan antes de que las solicitudes lleguen a los controladores. Pueden usarse para validaciones, autenticación, registro de actividades, etc.

#### Routes Directory (routes/):
Define las rutas de la API y asocia cada ruta con su controlador correspondiente. Básicamente, especifica qué controlador manejará cada solicitud de ruta.

#### Schemas Directory (schemas/):
Define los esquemas de validación de datos utilizando bibliotecas como Joi. Se usa en los middlewares de validación para asegurar que los datos entrantes cumplan con los formatos esperados.

#### Package.json:
Archivo de configuración de npm que lista las dependencias del proyecto y scripts para tareas comunes.

#### app.js:
Archivo principal que inicia el servidor Express, carga middlewares globales, y configura las rutas.

Basandonos en el siguiente diagrama:

![DIAGRAMA](DER.png)

Se armo un archivo json, que tiene una estructura donde tenemos un array, y dentro de este tenemos anidadas las carreras, las cuales a su vez tienen materias asociadas en un array de objetos ya que son muchas materias por cada carrera.

```[
    {
        "Carrera":{
          "id": 1,
          "nombre": "Tecnicatura en tecnologias industriales",
          "grado": "Tecnicatura",
          "universidad": "UNPAZ",
          "materias":[
            {
                "id": 1,
                "nombre": "Tecnología y Sociedad",
                "cuatrimestral": 1,
                "anio": 1,
                "carreraId": 1
            },
            {
                "id": 2,
                "nombre": "Inglés I",
                "cuatrimestral": 1,
                "anio": 1,
                "carreraId": 1
            },
            {
                "id": 3,
                "nombre": "Matemática I",
                "cuatrimestral": 1,
                "anio": 1,
                "carreraId": 1
            },
            {
                "id": 4,
                "nombre": "Informatica",
                "cuatrimestral": 1,
                "anio": 1,
                "carreraId": 1
            },
            {
                "id": 5,
                "nombre": "Mecánica",
                "cuatrimestral": 1,
                "anio": 1,
                "carreraId": 1
            },
            {
                "id": 6,
                "nombre": "Electricidad y electrónica",
                "cuatrimestral": 1,
                "anio": 1,
                "carreraId": 1
            },
            {
                "id": 7,
                "nombre": "Matemática II",
                "cuatrimestral": 1,
                "anio": 1,
                "carreraId": 1
            }
        ]
          }
    }
]```






