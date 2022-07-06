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

    console.log(imgTags);
    console.log(imgBlock);

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
      imgTags[m].setAttribute('src', '/lesson5/images/' + town.photo);
      imgTags[m].setAttribute('data-src', '/lesson5/images/' + town.photo);
      imgBlock[m].setAttribute('src', '/lesson5/images/' + town.photo);
      imgBlock[m].setAttribute('data-src', '/lesson5/images/' + town.photo);

    })
  });