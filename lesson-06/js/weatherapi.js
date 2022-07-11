function weatherData(cityNumber){

  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityNumber + "&units=imperial&appid=c586379ded6a7698afec8afa0d841a8a";
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      const currentWeather = jsObject.list[0].weather[0].main;
      const windSpeed = jsObject.list[0].wind.speed;
      const humidity = jsObject.list[0].main.humidity;
      const temp = jsObject.list[0].main.temp;
      const tags = document.getElementsByClassName("dayOfWeek");
      const labeltags = document.getElementsByClassName("forecast-label");
      document.getElementById("currently").innerHTML = currentWeather;
      document.getElementById("temperature").textContent = temp + " ℉";
      document.getElementById("humidity").textContent = humidity+"%";
      document.getElementById("windspeed").textContent = windSpeed + " Mph";

      data = jsObject.list;
      let day = 0;
      data.map(entry => {
        if (entry.dt_txt.includes("18:00:00")){
          dayIcon = "https://openweathermap.org/img/wn/" + entry.weather[0].icon + "@2x.png";
          tags[day].setAttribute('src', dayIcon);
          labeltags[day].innerHTML = entry.weather[0].main;
          day += 1;
        }
      });

      showWindChill();    
    });
  }

function calcWindChill(t, s){
    return 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
}

function showWindChill(){
    let speed = parseInt(document.querySelector('#windspeed').innerHTML);
    let temp  = parseInt(document.querySelector('#temperature').innerHTML);
    if (temp >= 50 && speed >= 3){
        document.querySelector('#windchill').innerHTML = Math.round(calcWindChill(temp, speed),2) + " ℉";
    } else {
        document.querySelector('#windchill').innerHTML = "N/A";
    }
}
