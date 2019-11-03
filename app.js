const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//sin comando intermedio como crear o listar
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//UNA FUNCION ASYNC A FUERZA REGRESA UNA PROMESA
// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log);

//argv.direccion

// clima.getClima(-33.459999, -70.639999)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const respDireccion = await lugar.getLugarLatLong(direccion);
        const respClima = await clima.getClima(respDireccion.lat, respDireccion.lng);

        return `El clima de ${respDireccion.direccion} es de ${respClima} °C`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)