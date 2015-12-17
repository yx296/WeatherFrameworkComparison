(function(){
  'use strict';

var WeatherCtrl = function(WeatherFactory) {
  this.entries = [];
  this.placeholder = "Enter a zip code";

  this.toggleUnit = function(index) {
    var entry = this.entries[index];

    var isImperial = entry.unit === '°F';
    
    if (isImperial) {
      var celsius = (entry.weather - 32) * (5 / 9);
      entry.weather = celsius.toFixed(2);
      entry.unit = '°C';
    } else {
      var fahrenheit = entry.weather / (5 / 9) + 32;
      entry.weather = fahrenheit.toFixed(2);
      entry.unit = '°F';
    }
  }

  this.addWeather = function(keyEvent) {
    if (keyEvent.which === 13) {
      var zipcode = this.zipcode
      WeatherFactory.getWeatherForCity(zipcode).then(function(data) {
        if (data.cod === "404") {
          this.placeholder = "Sorry, zip code invalid";
          return;
        }

        var weatherObj = {
          zipcode: zipcode,
          city: data.name,
          weather: data.main.temp.toFixed(2),
          unit: '°F'
        }
        this.entries.push(weatherObj);
      }.bind(this));

      this.zipcode = '';   
    }
  };
}

angular
  .module('HowsTheWeather')
  .controller('WeatherCtrl', [
    'WeatherFactory',
    WeatherCtrl
    ]);


})();
