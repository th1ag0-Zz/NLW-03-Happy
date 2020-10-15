const map = L.map('mapid').setView([-2.5108731,-44.2594127], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// criar icone personalizado
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// criar popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

L.marker([-2.5108731,-44.2594127], { icon })
.addTo(map)
.bindPopup(popup)