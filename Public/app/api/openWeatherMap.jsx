var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=46582aac64e46e3eae24c621289936f8&units=metric';


module.exports = {

   getTemp: function(location){
       var encodedLocation = encodeURIComponent(location);
       var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

       return axios.get(requestUrl).then(
        
           function(res){
           if(res.data.cod && res.data.message){
               throw new Error(res.data.message);
           }else{
               return res.data.main;
           }

       }, function(res){
           throw new Error(res.data.message);
       });
   }

}