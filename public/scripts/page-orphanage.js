const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanLat = document.querySelector('[data-lat]')
const spanLng = document.querySelector('[data-lng]')

const map = L.map('mapid', options).setView([spanLat.dataset.lat, spanLng.dataset.lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// criar icone personalizado
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

L.marker([spanLat.dataset.lat, spanLng.dataset.lng], { icon })
.addTo(map)

/* image galery */

function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    button.classList.add('active')

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-datails > img')

    imageContainer.src = image.src
}