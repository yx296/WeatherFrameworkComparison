var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      unit: '°F',
      weather: this.props.data.weather
    }
  },

  toggleUnit: function() {
    var isImperial = this.state.unit === '°F'

    if (isImperial) {
      var celsius = (this.state.weather - 32) * (5 / 9);
      this.setState({
        unit: '°C',
        weather: celsius.toFixed(2)
      });
    } else {
      var fahrenheit = (this.state.weather / (5 / 9)) + 32;
      this.setState({
        unit: '°F',
        weather: fahrenheit.toFixed(2)
      });
    }

  },

  render: function() {
    var city = this.props.data.city
    return <div className="entry">
      <p onClick={this.toggleUnit}>It is currently {this.state.weather}{this.state.unit} in {city}.</p>
    </div>
  }
});


