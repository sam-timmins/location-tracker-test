const detailsRef = document.querySelector('#details')
const timerRef = document.querySelector('#timer');
const gpsLogRef = document.querySelector('#gps-log');

const gpsLog = []


let sec = 3;

function countdownTimer() {

    timer = setInterval(() => {
      timerRef.innerHTML = +sec;
      sec--;
      if (sec === 0) {
        sec = 3
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

    gpsLog.forEach(addPinsToMap)
  
  })
  
  countdownTimer()
}

function clearTimer(){
  clearInterval(timer)
}


function addPinsToMap(value){
  // gpsLogRef.innerHTML += 'Lat: ' +value.latitude+ ' | Long: ' +value.longitude + '<br>'
}

countdownTimer()

