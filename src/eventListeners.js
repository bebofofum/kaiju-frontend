// let monsterContainer = document.getElementById("monster_instance_container")

// const BASE_URL = "http://localhost:3000"

document.addEventListener("click", function(e) {
  
    // if e.target is the titan delete element...then
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

    // if e.target is the sighting submit element...then

    
    
});