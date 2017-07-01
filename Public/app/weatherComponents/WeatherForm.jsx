
var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var cityname = this.refs.cityname.value;
   
    if (cityname.length > 0) {
      this.refs.cityname.value = '';
      updates.cityname = cityname;
    }


    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="cityname" placeholder="Enter city name"/>
        </div>
      
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;