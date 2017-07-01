var React = require('react');


var WeatherData = React.createClass({
    render: function () {
      var{temp, cityname, humidity} = this.props; 
      
     
      return (
        <div>
          <h1>Weather in {cityname}! is {temp} &#8451; and Humidity is  {humidity}</h1>
         
        </div>
      );
    }
});

module.exports = WeatherData;