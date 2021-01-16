

// if event is Click

document.addEventListener("click", function(e) {
  
    // if e.target is the titan delete element...then fetch to delete method
    if(e.target && e.target.matches("button.delete-btn")) {
        let monsterListItem = document.getElementById(`titanDivId-${e.target.dataset.id}`)

        let titanId = e.target.dataset.id
        fetch(`${BASE_URL}/titans/${titanId}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(monsterListItem.remove())          
    }

    // if e.target is the sighting add button...then show sighting form
    if(e.target && e.target.matches("button.toggle-form-vis")) {
        
        let sightForm = document.getElementById(`formId-${e.target.dataset.id}`)

        sightForm.classList.toggle("is-visible")

    }

    
});


// if event is Submit 

document.addEventListener("submit", function(e) {


    // if e.target is the monster-form...

    if(e.target && e.target.matches("form.titan-form")) {

        e.preventDefault();
    
        let monsterName = document.getElementById("nickname").value
        let monsterClass = document.getElementById("tclass").value
        let monsterSize = document.getElementById("size").value
        let monsterImg = document.getElementById("image-src").value
        let monsterDetail = document.getElementById("details").value

        let newTitan = {
            nickname: monsterName,
            tclass: monsterClass,
            size: monsterSize,
            image_src: monsterImg,
            details: monsterDetail
        }

        fetch(`${BASE_URL}/titans`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTitan)
        })
        .then(function(response) {
            return response.json();
        })
        .then(newTitan => {
            let jsTitanObj = new Titan(newTitan.id, newTitan.nickname, newTitan.tclass, newTitan.size, newTitan.image_src, newTitan.details)
            jsTitanObj.renderTitan();
            e.target.reset();

        })
    }
    

    // if e.target is the toggle-vis form...then fetch to post method

    if(e.target && e.target.matches("form.toggle-vis")) {
        e.preventDefault();

        let formId = e.target.id.split("-")[1]

        let titanId = parseInt(formId)

        let sightingLocation = document.getElementById(`sighting-event-${formId}`).value

        let newSighting = {
            location: sightingLocation,
            titan_id: titanId,
        }

        fetch(`${BASE_URL}/sightings`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(newSighting)
        })
        .then(function(response) {
            return response.json();
        })
        .then(newSighting => {
            let jsSightingObj = new Sighting(newSighting.id, newSighting.location, newSighting.titan_id)
            jsSightingObj.renderSighting();
            e.target.reset();
    
        })
    }


});

    

