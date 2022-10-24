const fs = require('fs')
const colors = require('colors')

let salida = ''
let consola = ''

const crearArchivo = async (base, listar = false, hasta) => {

    try {
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
        }

        if (listar) {
            console.log("================================".green)
            console.log(`Tabla del ${colors.red(base)}`.green)
            console.log("================================".green)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    } catch (error) {
        throw error
    }

    return `tabla-${base}.txt`
}

module.exports = {
    crearArchivo
}