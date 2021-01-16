document.addEventListener("DOMContentLoaded", function() {
    Titan.createTitanForm();

    fetchTitans()
    .then(fetchSightings);
    
  });


const BASE_URL = "http://localhost:3000"

// Want to View or Read full listing of Titans and see its details

  function fetchTitans() {
    return fetch(`${BASE_URL}/titans`)
    .then(response => response.json())
    .then(titans => {
        for(const titan_inst of titans){

            let titan1 = new Titan(titan_inst.id, titan_inst.nickname, titan_inst.tclass, titan_inst.size, titan_inst.image_src, titan_inst.details)
            titan1.renderTitan();
        }
        
     })
  }


// Want to fetch (GET:READ) listings of Sightings based on a Titan ID and see its details

  function fetchSightings() {
    fetch(`${BASE_URL}/sightings`)
    .then(response => response.json())
    .then(sightings => {
        sightings.forEach(sighting => {
            let jsSightingObj = new Sighting(sighting.id, sighting.location, sighting.titan_id)
            jsSightingObj.renderSighting();

        })
            
            
     })
  }


