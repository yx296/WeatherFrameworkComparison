$(document).ready(function() {
  var $weatherInput = $('.weatherInput');
  var $weatherList = $('#list');

  $weatherInput.on('keypress', function(e) {
    if (e.which === 13) {
      var zipcode = $weatherInput.val();
      console.log(zipcode);
      addWeatherEntry(zipcode);
      $weatherInput.val('');
    }
  })

  $weatherList.on('click', '.message', function() {
    var weatherVal = $(this).find(".weatherVal").text();
    var weatherUnit = $(this).find(".weatherUnit").text();
    

    if (weatherUnit === '°F') {
      weatherVal = (weatherVal - 32) * (5 / 9);
      weatherUnit = '°C';
      $(this).find(".weatherVal").text(weatherVal.toFixed(2));
      $(this).find(".weatherUnit").text(weatherUnit);
    } else {
      weatherVal = (weatherVal / (5 / 9)) + 32;
      weatherUnit = '°F';
      $(this).find(".weatherVal").text(weatherVal.toFixed(2));
      $(this).find(".weatherUnit").text(weatherUnit);
    }


  });

  function addWeatherEntry(zipcode) {
    $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
      function(data) {
        if (data.cod === "404") {
          $weatherInput.attr("placeholder", "Sorry, zip code invalid");
          return;
        }

        var weatherObj = {
          zipcode: zipcode,
          city: data.name,
          weather: data.main.temp.toFixed(2),
          unit: '°F'
        }
        appendWeather(weatherObj);
      }
    );
  }

  function appendWeather(weatherObj) {
    $weatherList.append('<div class="entry">' + '<p class="message">It is currently ' +  
      '<span class="weatherVal">' + weatherObj.weather + '</span>' + 
      '<span class="weatherUnit">' + weatherObj.unit + '</span>' +  
      ' in ' + weatherObj.city + '.</p>' + '</div>');
  }


});
