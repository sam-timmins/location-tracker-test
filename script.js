// const details = document.querySelector('#details')

let sec = 10;
const timerRef = document.querySelector('#timer');


function countdownTimer() {

    timer = setInterval(() => {
      timerRef.innerHTML = +sec;
      sec--;
      if (sec === 0) {
        sec = 10
        timerRef.innerHTML = 'Finished'
        clearTimer()
        gpsCapture()
        
      }
    }, 1000);
  
}

function gpsCapture(){
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    details.innerHTML += "Latitude: "+latitude+" | Longitude: "+longitude+"<br>";
  })
  
  countdownTimer()
}

function clearTimer(){
  clearInterval(timer)
}



// let reqcount = 0
// const timer


// navigator.geolocation.watchPosition(successCallBack);

// function countdownTimer() {
//   console.log(timer)
//   while (timer > 1) {
//     timer--
//     timerRef.innerHTML = timer
//   }

// }

// function intervalSetter() {

// }

countdownTimer()

// function successCallBack(position) { 
//    const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;

//    reqcount++;

//    details.innerHTML = "Accuracy: "+accuracy+"<br>";
//    details.innerHTML += "Latitude: "+latitude+" | Longitude: "+longitude+"<br>";
//    details.innerHTML += "Altitude: "+altitude+"<br>";
//    details.innerHTML += "Heading: "+heading+"<br>";
//    details.innerHTML += "Speed: "+speed+"<br>";
//    details.innerHTML += "reqcount: "+reqcount;
// }


// const mapRef = document.querySelector('#map')

// const gpsLog = []
// const gpsCapture = {}

// const watchId = navigator.geolocation.watchPosition(position => {
//     const { latitude, longitude } = position.coords;
//     // Show a map centered at latitude / longitude.
//     // mapRef.innerHTML = '<iframe width="700 height="700" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;output=embed"></iframe>';
    
//     gpsCapture.latitude = latitude
//     gpsCapture.longitude = longitude

//     gpsLog.push(gpsCapture)

//     console.log(gpsLog)

//   });

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: 53.350405, lng: -6.206338 },
  //     zoom: 17,
  //     mapTypeId: 'satellite'
  //   });

  //   const watchId = navigator.geolocation.watchPosition(position => {
  //       const { latitude, longitude } = position.coords;
  //       // Show a map centered at latitude / longitude.
  //       // mapRef.innerHTML = '<iframe width="700 height="700" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;output=embed"></iframe>';
        
  //       gpsCapture.latitude = latitude
  //       gpsCapture.longitude = longitude
    
  //       gpsLog.push(gpsCapture)
    
  //       console.log(gpsLog)
    
  //     });

  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const pos = {
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           };

  //           const gpsPath = new google.maps.Polyline({
  //             path: gpsLog,
  //             geodesic: true,
  //             strokeColor: "#FF0000",
  //             strokeOpacity: 1.0,
  //             strokeWeight: 2,
  //           });
  
  //           gpsPath.setMap(map);
  
  //           map.setCenter(pos);
  //         },
  //         () => {
  //           handleLocationError(true, infoWindow, map.getCenter());
  //         }
  //       );
  //     } else {
  //       // Browser doesn't support Geolocation
  //       handleLocationError(false, infoWindow, map.getCenter());
  //     }
  // //   });
  // }