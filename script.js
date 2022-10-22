const timerRef = document.querySelector("#timer")
const startRef = document.querySelector("#start")

let counter = 0
let timeLeft = 10;

const gpsLog = []
const gpsCapture = {}


const startTimer = (longitudeGps, latitudeGps) => {
  const downloadTimer = setInterval(function(){

    if(timeLeft <= 0){
      timeLeft = 11;
      counter++

      gpsCapture.lng = longitudeGps
      gpsCapture.lat = latitudeGps
  
      gpsLog.push(gpsCapture)
      console.log(gpsLog)

      downloadTimer;
    } else {
      timerRef.innerHTML = timeLeft;
    }
    timeLeft -= 1;
  }, 1000);
}


let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.350405, lng: -6.206338 },
    zoom: 17,
    mapTypeId: 'satellite'
  });
  infoWindow = new google.maps.InfoWindow();

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(startRef);
  startRef.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          let singleGps = {}

          gpsLog.position = pos
      
          singleGps.latitude = pos.lat
          singleGps.longitude = pos.lng

          startTimer(singleGps.latitude, singleGps.longitude)

          const marker = new google.maps.Marker({
            position: pos,
            map: map,
          });

          const gpsPath = new google.maps.Polyline({
            path: gpsLog,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
          });

          gpsPath.setMap(map);

          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;

startRef.addEventListener("click", initMap);