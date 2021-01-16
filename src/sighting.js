class Sighting {
    constructor(id, location, titanId) {
        this.id = id;
        this.location = location;
        this.titanId = titanId;
        // Sighting.all.push(this);
    }

    // setSightingContainer() {
    //     let container = document.getElementById(`titanDivId-${this.titanId}`)

    //     const sightingDiv = document.createElement('div')
    //     const sightingList = document.createElement('ul')


    //     sightingDiv.setAttribute("id",`sightingId-${this.id}`)
    //     sightingDiv.setAttribute("class","sightingDiv")

    //     container.appendChild(sightingDiv)
    //     sightingDiv.appendChild(sightingList)

    // }

    renderSighting(){
        
        let container = document.getElementById(`titanDivId-${this.titanId}`)

        const sightingDiv = document.createElement('div')
        const sightingList = document.createElement('ul')
        const sightingListItem = document.createElement('li')
        const sightingLocation = document.createElement('p')

        sightingDiv.setAttribute("id",`sightingId-${this.id}`)
        sightingDiv.setAttribute("class","sightingDiv")

        sightingLocation.innerText = `Titan Sighting: ${this.location}`

        container.appendChild(sightingDiv)
        sightingDiv.appendChild(sightingList)
        sightingList.appendChild(sightingListItem)
        sightingListItem.appendChild(sightingLocation)

    }


    // renderSightingForm() {

    // }

   
}

// Sighting.all = []





