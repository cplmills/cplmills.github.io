function vehicleTiles(masterId, classname){
    const apiURL = "data/vehicles.json";
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            parentTag = document.getElementById(masterId);
            jsObject.map(vehicle => {
                let newDiv = document.createElement("div");
                newDiv.setAttribute('class', classname);

                let newImg = document.createElement("img");
                newImg.setAttribute('src', vehicle.photo);
                newImg.setAttribute('alt', vehicle.model);

                let newModel = document.createElement("b");
                newModel.innerHTML = vehicle.model;

                let newCapacity = document.createElement("p");
                newCapacity.innerHTML = "Capacity: "+vehicle.maxPersons;

                let newStartPrice = document.createElement("p");
                newStartPrice.innerHTML = "Start Price*: $" + vehicle.reservation.halfDay;

                newDiv.appendChild(newImg);
                newDiv.appendChild(newModel);
                newDiv.appendChild(newCapacity);
                newDiv.appendChild(newStartPrice);
                
                parentTag.appendChild(newDiv);
            });
        });
}