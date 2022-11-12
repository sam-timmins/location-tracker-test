const detailsRef = document.querySelector('#details')
const timerRef = document.querySelector('#timer');
const gpsLogRef = document.querySelector('#gps-log');
const mapRef = document.querySelector('#map');

const gpsLog = []


let sec = 10;

function countdownTimer() {

    timer = setInterval(() => {
      timerRef.innerHTML = +sec;
      sec--;
      if (sec === 0) {
        sec = 10
        timerRef.innerHTML = 'Location Point Added'
        clearTimer()
        gpsCapture()
        
      }
    }, 1000);
  
}

function gpsCapture(){
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    detailsRef.innerHTML += "Latitude: "+latitude+" | Longitude: "+longitude+"<br>";

    gpsCapture.latitude = latitude
    gpsCapture.longitude = longitude

    gpsLog.push(gpsCapture)

    gpsLog.forEach(initMap)
  
  })
  
  countdownTimer()
}

function clearTimer(){
  clearInterval(timer)
}


function addPinsToMap(value){
  lat = value.latitude
  long = value.longitude
  // gpsLogRef.innerHTML += 'Lat: ' +value.latitude+ ' | Long: ' +value.longitude + '<br>'
  
}

countdownTimer()

function initMap() {
  // const latLong = addPinsToMap()
  const myLatLng = { lat: gpsCapture.latitude, lng: gpsCapture.longitude };

  const map = new google.maps.Map(
    mapRef,
    {
      zoom: 17,
      center: myLatLng,
    }
  );

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}
window.initMap = initMap;