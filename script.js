const mapRef = document.querySelector('#map')

const gpsLog = []
const gpsCapture = {}

// const watchId = navigator.geolocation.watchPosition(position => {
//     const { latitude, longitude } = position.coords;
//     // Show a map centered at latitude / longitude.
//     // mapRef.innerHTML = '<iframe width="700 height="700" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;output=embed"></iframe>';
    
//     gpsCapture.latitude = latitude
//     gpsCapture.longitude = longitude

//     gpsLog.push(gpsCapture)

//     console.log(gpsLog)

//   });

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 53.350405, lng: -6.206338 },
      zoom: 17,
      mapTypeId: 'satellite'
    });

    const watchId = navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;
        // Show a map centered at latitude / longitude.
        // mapRef.innerHTML = '<iframe width="700 height="700" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;output=embed"></iframe>';
        
        gpsCapture.latitude = latitude
        gpsCapture.longitude = longitude
    
        gpsLog.push(gpsCapture)
    
        console.log(gpsLog)
    
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

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
  //   });
  }