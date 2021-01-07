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
        Titan Name: <input type="text" id="nickname"><br>
        Titan Class: <input type="text" id="tclass"><br>
        Titan Size: <input type="text" id="size"><br>
        Titan Image: <input type="text" id="image-src"><br>
        Titan Details: <input type="text" id="details"><br>
        <input type="submit" value="Log Titan">
    </form>
    `

    monsterForm.addEventListener("submit", monsterFormSubmitHandler)

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
        return response;
    })
    .then(titans => {
        let titan1 = new Titan(titan_inst.id, titan_inst.nickname, titan_inst.tclass, titan_inst.size, titan_inst.image_src, titan_inst.details)
        titan1.renderTitan();

    })

}



    // Want to be able to Delete a Titan

    let delButton = document.getElementsByClassName("delete-btn")
    console.log(delButton)
    document.getElementById("parent-list").addEventListener
    // delButton.forEach( (btn) => {
    //     btn.addEventListener("click", () => { 
    //         debugger;
    //     })
    // })



    // Want to be able to Read the a listing of a specific Titans sightings
    // Want to be able to Create a Sighting for a Titan
    // Deleting a Titan should delete the associated Sightings
