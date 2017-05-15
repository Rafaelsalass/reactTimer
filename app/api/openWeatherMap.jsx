import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=47a86bba75d97fcbb30e3fc4fc774eee&units=metric';

export default {
  getTem (place){
    var encodedPlace = encodeURIComponent(place);
    var reqURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedPlace}`;
    return axios.get(reqURL).then( res => {
      if (res.data.cod === 200){
        return JSON.stringify(res.data.main.temp);
      } 
      throw res.data.cod;
    }, res => {
      throw  (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
    })
  }
}
