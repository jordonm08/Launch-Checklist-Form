window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotInput = document.querySelector("input[name = 'pilotName']").value;
      let copilotInput = document.querySelector("input[name = 'copilotName']").value;
      let fuelLevelInput = document.querySelector("input[name = 'fuelLevel']").value;
      let cargoMassInput = document.querySelector("input[name = 'cargoMass']").value;

      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput} is ready for launch`
      document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput} is ready for launch`

      if(fuelLevelInput < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = `yeah... ${fuelLevelInput}L of fuel is not gonna get us there champ`
         document.getElementById("launchStatus").style.color = 'red'
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
      }
      if(cargoMassInput > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = `yeah... ${cargoMassInput}kg is a bit too much weight for this ship`
         document.getElementById("launchStatus").style.color = 'red'
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
      }
      
      if(fuelLevelInput >= 10000 && cargoMassInput <= 10000 ){
         document.getElementById("faultyItems").style.visibility = "hidden"
         document.getElementById("launchStatus").innerHTML = `Shuttle ready for launch... finally`
         document.getElementById("launchStatus").style.color = 'green'
      }

      let api = "https://handlers.education.launchcode.org/static/planets.json"
      
      fetch(api).then(function(response) {
         response.json().then(function(json){
            let i = json[Math.floor(Math.random() * json.length)];
            console.log(i)
            document.getElementById("missionTarget").innerHTML = `
               <h2>Mission Destination</h2>
                <ul>
                   <li>Name: ${i.name}</li>
                   <li>Diameter: ${i.diameter}</li>
                   <li>Star: ${i.star}</li>
                   <li>Distance from Earth: ${i.distance}</li>
                   <li>Number of Moons: ${i.moons}</li>
               </ul>
               <img src="${i.image}">
            `
         })
      })

   });
});


// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">