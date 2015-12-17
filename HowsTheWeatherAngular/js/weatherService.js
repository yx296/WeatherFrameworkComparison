(function(){
  'use strict';

var WeatherFactory = function($http) {
  var openWeatherAPI = {};
  openWeatherAPI.getWeatherForCity = function (zipcode) {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b')
      .then(function(response) {
        return response.data;
      });   
  }
  return openWeatherAPI;
}

angular
  .module('HowsTheWeather')
  .factory('WeatherFactory', ['$http',
    WeatherFactory
  ]);

})();
