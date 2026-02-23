let Karta = L.map("map").setView([41.30947107151977, 69.29645223145054], 15)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(Karta)

let icon = L.icon ({
	iconUrl:"./Без названия.png",
	iconSize:[60, 60],
})

L.marker([41.30947107151977, 69.29645223145054], {icon: icon})
.bindPopup("Auto center").openPopup()
.addTo(Karta)

L.circle([41.30947107151977, 69.29645223145054], {
	color: "blue",
	fillColor: "blue",
	fillOpacity: 0.4,
	radius: 300

}).addTo(Karta)

