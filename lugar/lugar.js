const axios = require('axios');

const getLugarLatLong = async(dir) => {

    //convierte a un url seguro, convierte caracteres especiales
    const encoderURL = encodeURI(dir);

    //creacion de instancia de la peticion axios
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        headers: { 'x-rapidapi-key': '607b85a44cmshc7d9faef6bf08bbp1a6f4bjsnfa71ef003a19' }
    });

    //ejecutamos la peticion
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        //direccion: direccion, es lo mismo
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLong
}