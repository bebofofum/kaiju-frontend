class Titan {
    constructor(id, nickname, tclass, size, image_src, details) {
        this.id = id;
        this.nickname = nickname;
        this.tclass = tclass;
        this.size = size;
        this.image_src = image_src;
        this.details = details;
    }

    // then make function to render a titan instance to the Dom
    renderTitan() {
        let titanItem = document.getElementById("monster_instance_container")

        const titanDivList = document.createElement('div')
        const titanList = document.createElement('ul')
        const titanListItem = document.createElement('li')
        const titanItmHead = document.createElement('h3')
        const titanDetail = document.createElement('p')
        const titanItmClass = document.createElement('p')
        const titanItmSize = document.createElement('p')
        const titanImg = document.createElement('img')
        const deleteBtn = document.createElement('button')
        const addSightingBtn = document.createElement('button')

        const sightingForm = document.createElement('form')
        const sightingDivField = document.createElement('div')
        const sightingDivControl = document.createElement('div')
        const sightingField = document.createElement('fieldset')
        const sightingFormInput = document.createElement('input')
        const submitSightingBtn = document.createElement('button')

        sightingForm.classList.add("toggle-vis")
        sightingForm.setAttribute("id",`formId-${this.id}`);
        sightingDivField.setAttribute("class","field")
        sightingDivControl.setAttribute("class","control")

        sightingFormInput.setAttribute("type","text")
        sightingFormInput.setAttribute("placeholder","Sighting Location")
        sightingFormInput.setAttribute("id",`sighting-event-${this.id}`)
        sightingFormInput.setAttribute("class","input is-medium is-primary")
        
        submitSightingBtn.setAttribute("class","submit-sighting-btn");
        submitSightingBtn.innerText = "Submit Sighting"

        titanImg.src = this.image_src
        titanDivList.setAttribute("id",`titanDivId-${this.id}`)
        titanDivList.setAttribute("class","titanDiv")

        titanItmHead.innerText = `Titan Name: ${this.nickname}`
        titanItmSize.innerText = `Size: ${this.size}`
        titanItmClass.innerText = `Class: ${this.tclass}`

        deleteBtn.setAttribute("class","delete-btn");
        deleteBtn.setAttribute("data-id",this.id);
        deleteBtn.innerText = "Delete"

        addSightingBtn.setAttribute("class","add-sighting-btn toggle-form-vis");
        addSightingBtn.setAttribute("data-id",this.id);
        addSightingBtn.innerText = "Add Sighting"

        titanItem.appendChild(titanDivList)
        titanDivList.appendChild(titanList)
        titanList.appendChild(titanListItem)
        titanListItem.appendChild(titanImg)
        titanListItem.appendChild(titanItmHead)
        titanListItem.appendChild(titanItmSize)
        titanListItem.appendChild(titanItmClass)
        titanListItem.appendChild(titanDetail).innerText = `Description: ${this.details}`
        titanListItem.appendChild(deleteBtn)
        titanListItem.appendChild(addSightingBtn)

        titanDivList.appendChild(sightingForm)
        sightingForm.appendChild(sightingDivField)
        sightingDivField.appendChild(sightingDivControl)
        sightingDivControl.appendChild(sightingField)
        sightingField.appendChild(sightingFormInput)
        sightingForm.appendChild(submitSightingBtn)

    }


}

