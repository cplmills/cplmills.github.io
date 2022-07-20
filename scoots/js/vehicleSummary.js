function vehicleSummary(){
    const apiURL = "data/vehicles.json";
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            parentTag = document.querySelector('#vehicle-tiles');
            jsObject.map(vehicle => {
                let newRow = document.createElement("tr");
                let newTdModel = document.createElement("td");
                let newTdPersons = document.createElement("td");
                let newTdResHalf = document.createElement("td");
                let newTdResFull = document.createElement("td");
                let newTdWalkHalf = document.createElement("td");
                let newTdWalkFull = document.createElement("td");

                newTdModel.innerHTML = vehicle.model;
                newTdPersons.innerHTML = vehicle.maxPersons;
                newTdResHalf.innerHTML = "$ " + vehicle.reservation.halfDay;
                newTdResFull.innerHTML = "$ " + vehicle.reservation.fullDay;
                newTdWalkHalf.innerHTML = "$ " + vehicle.walkIn.halfDay;
                newTdWalkFull.innerHTML = "$ " + vehicle.walkIn.fullDay;

                newRow.appendChild(newTdModel);
                newRow.appendChild(newTdPersons);
                newRow.appendChild(newTdResHalf);
                newRow.appendChild(newTdResFull);
                newRow.appendChild(newTdWalkHalf);
                newRow.appendChild(newTdWalkFull);
                
                document.querySelector("#vehicle-summary").appendChild(newRow);
            });
        });
}


function fillVehicleDropDown(idName){
    const apiURL = "data/vehicles.json";
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            parentTag = document.querySelector(idName);
            jsObject.map(vehicle => {
                let newValue = document.createElement("option");
                newValue.setAttribute('value', vehicle.model);
                newValue.innerText = vehicle.model;
                parentTag.appendChild(newValue);
            });
        });
}
