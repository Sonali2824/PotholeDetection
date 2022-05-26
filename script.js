mapboxgl.accessToken =
  "pk.eyJ1Ijoic29uYWxpLTEwOSIsImEiOiJjbDNmeXJiMWQwM215M2pxdTFvajcwNzRyIn0.2QMd9gIP8h9VA1-9Sq33-w"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  // const map = new mapboxgl.Map({
  //   container: "map",
  //   style: "mapbox://styles/mapbox/streets-v11",
  //   center: center,
  //   zoom: 15
  // })
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
});


 const potholes=[[77.6519,12.97123],
 [77.65207,12.97127],
 [77.65218,12.97125],
 [-122.083,37.4213],
 [-122.184,37.4219],
 [-122.14,37.4218983],
 [-122.1434,37.4239809],
 [-122.12,37.42187],
[77.69212,12.93372],
[77.70154,12.95695]]
var popup = new mapboxgl.Popup()
  .setText('Pothole')
  .addTo(map);
potholes.map((element)=>{
  let marker = new mapboxgl
  .Marker({ color: 'red' })
    .setLngLat( element)
    .addTo(map)
    .setPopup(popup);
})

  

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}

