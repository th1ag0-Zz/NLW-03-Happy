const map = L.map('mapid').setView([-2.5108731,-44.2594127], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// criar icone personalizado
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker

// create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], { icon }).addTo(map)
})


// select photos

function addPhotoField() {
    const photoContainer = document.querySelector('.images-upload')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0]
    if(input.value == '') {
        return
    }

    input.value = ''

    photoContainer.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        // limpar campo
        span.parentNode.children[0].value = ''
        return
    } 

    span.parentNode.remove()
}


// select Yes or No

function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name=open_on_weekends]')
    input.value = button.dataset.value
}

function validate(event) {
    // validar se lat e lng estão prenchidos
    // event.preventDefault()
    // alert('preencha todos os campos')
}