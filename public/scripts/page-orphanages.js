const map = L.map('mapid').setView([-2.5108731,-44.2594127], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// criar icone personalizado
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({name, id, lat, lng}) {

    // criar popup
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( (span) => {
    const orphanage = {
        name: span.dataset.name,
        id: span.dataset.id,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
} )