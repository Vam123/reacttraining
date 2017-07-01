var React = require('react');
var WeatherData = require('WeatherData');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
 
  getInitialState: function () {
    return {
       isLoading : false 
    };
  },
  handleNewData: function (updates) {
    var that = this;

    this.setState({isLoading : true});
    OpenWeatherMap.getTemp(updates.cityname).then(function (main){
       that.setState({
           cityname: updates.cityname,
           temp: main.temp,
           humidity: main.humidity,
           isLoading: false
       });
    }, function(errorMessage){
        that.setState({isLoading: false});
        alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, humidity, cityname}  = this.state;

    function rederMessage(){
        if(isLoading){
            return<h3>Fetching Weather...</h3>;
        } else if (temp && cityname){
            return <WeatherData cityname={cityname} temp={temp} humidity={humidity}/>;
        }
    }

    return (
      <div>
        {rederMessage()}
        <WeatherForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Weather;