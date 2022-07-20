function weatherData(cityNumber){
  // Lodas weather statistics for the supplied town
  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityNumber + "&units=imperial&appid=c586379ded6a7698afec8afa0d841a8a";
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      const currentWeather = jsObject.list[0].weather[0].main;
      const humidity = jsObject.list[0].main.humidity;
      const temp = jsObject.list[0].main.temp;
      const currentlyIcon = jsObject.list[0].weather[0].icon + "@2x.png"
      const dayIcon = "https://openweathermap.org/img/wn/" + currentlyIcon;
      const tags = document.getElementById("currently-img");
      const labeltags = document.getElementsByClassName("five-day");

      document.getElementById("currently").innerHTML = currentWeather;
      document.getElementById("temperature").textContent = temp + " ℉";
      document.getElementById("humidity").textContent = humidity+"%";
      tags.setAttribute('src', dayIcon);
      
      fiveDayTags = document.querySelectorAll(".day-icon");
      data = jsObject.list;
      let day = 0;
      data.map(entry => {
        if (entry.dt_txt.includes("12:00:00")){
          fiveDayIcon = "https://openweathermap.org/img/wn/" + entry.weather[0].icon + "@2x.png";
          fiveDayTags[day].setAttribute('src', fiveDayIcon);
          labeltags[day].textContent = entry.weather[0].main;
          day += 1;
        }
      });
    });
  }

