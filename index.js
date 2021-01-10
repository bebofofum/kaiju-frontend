document.addEventListener("DOMContentLoaded", function() {
    createTitanForm();
    fetchTitans();

    
  });

  const BASE_URL = "http://localhost:3000"

// Want to View or Read full listing of Titans and see its details

  function fetchTitans() {
    fetch(`${BASE_URL}/titans`)
    .then(response => response.json())
    .then(titans => {
        for(const titan_inst of titans){

            let titan1 = new Titan(titan_inst.id, titan_inst.nickname, titan_inst.tclass, titan_inst.size, titan_inst.image_src, titan_inst.details)
            titan1.renderTitan();
        }
    })
}

    
// Want to be able to Create a Titan
// create a form
// add eventlistener
// once form is submitted send a fetch post to backend
// do something with the returned object

function createTitanForm() {
    let monsterForm = document.getElementById("monster-form")

    monsterForm.innerHTML += 
    `
    <form> 
        <div class="field"> 
            <div class="control">
                <input type="text" class="input is-medium is-primary" placeholder="Titan Name" id="nickname"><br>
            </div>
        </div>
        <div class="field"> 
            <div class="control">
                <input type="text" class="input is-medium is-primary" placeholder="Titan Class" id="tclass"><br>
            </div>
        </div>
        <div class="field"> 
            <div class="control">
                <input type="text" class="input is-medium is-primary" placeholder="Titan Size" id="size"><br>
            </div>
        </div>
        <div class="field"> 
            <div class="control">
                <input type="text" class="input is-medium is-primary" placeholder="Titan Image Source" id="image-src"><br>
            </div>
        </div>
        <div class="field"> 
            <div class="control">
                <textarea class="textarea is-medium is-primary" placeholder="Titan Details" id="details"></textarea>
            </div>
        </div>

        <div class="control">
            <button class="button is-primary">Register Titan</button>
        </div>

    </form>
    `

    monsterForm.addEventListener("submit", monsterFormSubmitHandler)

    // debugger;
    // monsterForm.reset();

}

function monsterFormSubmitHandler() {

    event.preventDefault();
        
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
        let titan1 = new Titan(newTitan.id, newTitan.nickname, newTitan.tclass, newTitan.size, newTitan.image_src, newTitan.details)

        titan1.renderTitan();

    })

}



    // Want to be able to Delete a Titan
    let monsterContainer = document.getElementById("monster_instance_container")

    monsterContainer.addEventListener("click", function(e) {
      
        // e.target is the clicked element!
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
    });
    

    function deleteTitan() {
    }



    // Want to be able to Read the a listing of a specific Titans sightings
    // Want to be able to Create a Sighting for a Titan
    // Deleting a Titan should delete the associated Sightings
