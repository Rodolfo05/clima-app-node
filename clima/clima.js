const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7c9f3d4481ffe55a9a0feb48bc4ec491&units=metric`);

    return resp.data.main.temp

}

module.exports = {
    getClima
}