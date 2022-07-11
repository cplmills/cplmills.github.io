function loadTownData(){
  // Loads the town data for index.html
  const apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  let res = fetch(apiURL)
    .then((response) => response.json())
    .then(data => {
      townsToShow = [];
      newTownData = data.towns.map((town) => {
        if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven") {
          townsToShow.push(town);
        }
      });
      statTags = document.getElementsByClassName("town-info-value");
      tagLineTags = document.getElementsByClassName("town-banner-tagline");
      imgTags = document.getElementsByClassName("banner-img");
      imgBlock = document.getElementsByClassName("block-img");

      townsToShow.map(town => {
        if (town.name == "Preston"){
          t = 0;
          m = 0;
        } else if (town.name == "Fish Haven") {
          t = 3;
          m = 1;
        } else if (town.name == "Soda Springs") {
          t = 6;
          m = 2;
        }
        statTags[t].innerHTML = town.yearFounded;
        statTags[t+1].innerHTML = town.currentPopulation;
        statTags[t+2].innerHTML = town.averageRainfall;
        tagLineTags[m].innerHTML = town.motto;
        imgTags[m].setAttribute('src', 'images/' + town.photo);
        imgTags[m].setAttribute('data-src', 'images/' + town.photo);
        imgBlock[m].setAttribute('src', 'images/' + town.photo);
        imgBlock[m].setAttribute('data-src', 'images/' + town.photo);

      })
    });
}

function loadEvents(townName){
  // Loads event information for the requested town, used on the preston, fishhaven and sodasprings pages
  const apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  let res = fetch(apiURL)
    .then((response) => response.json())
    .then(data => {
      const thisTown = data.towns.filter(town => {
        if (town.name == townName){
          events = town.events;
          mainDiv = document.querySelector(".events");
          eventTags = document.getElementsByClassName("event-item");
          events.map(event => {
            newEventTag = document.createElement("p");
            newEventTag.setAttribute("class", "event-item")
            newEventTag.innerHTML = event;
            mainDiv.appendChild(newEventTag);
          })
        }
      })
      
    });  
}