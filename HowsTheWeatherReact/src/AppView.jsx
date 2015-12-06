var React = require('react');
var TitleView = require('./TitleView');
var InputView = require('./InputView');
var EntryView = require('./EntryView');

module.exports = React.createClass({

  getInitialState: function() {
    return { data: [] }
  },

  handleWeatherSubmit: function(zipcode) {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
      dataType: 'json',
      cache: false,
      success: function(data) {
        var weatherData = this.state.data;
        weatherData.push({
          zipcode: zipcode,
          city: data.name,
          weather: data.main.temp.toFixed(2)
        })
        this.setState({
          data: weatherData
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },
  render: function() {
    var list = this.state.data.map(function(data) {
      return <EntryView data={data}/>
    }.bind(this));

    return <div id="app">
      <TitleView title={this.props.title}/>
      <InputView onWeatherSubmit={this.handleWeatherSubmit}/>
      <div id="list">
        {list}
      </div>
    </div>
  }
})


















