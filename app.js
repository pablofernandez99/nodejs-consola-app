const argv = require("./config/yargs")
const { crearArchivo } = require("./helpers/multiplicar")

require('colors')


console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.red, 'creado!'))
    .catch(console.log)