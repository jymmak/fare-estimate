let inputFrom = document.getElementById('origin');
let inputTo = document.getElementById('destination');
let btnRoad = document.getElementById('btnIndication');

let autocompleteInputs = () => {
  new google.maps.places.Autocomplete(inputFrom);
  new google.maps.places.Autocomplete(inputTo);
};

let calculateAndDisplayRoute = (directionsService, directionsDisplay) => {
  event.preventDefault();
  directionsService.route({
    origin: inputFrom.value,
    destination: inputTo.value,
    travelMode: 'DRIVING'
  }, function (response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};

function initMap() {

  var lineSymbol = {
     path: 'M 0,-1 0,1',
     strokeOpacity: 1,
     scale: 4
   };

  var polylineDotted = new google.maps.Polyline({
       	strokeColor: '#000000',
        strokeOpacity: 0,
        fillOpacity: 0,
        icons: [{
          icon: lineSymbol,
          offset: '0',
          repeat: '20px'
        }],
      });
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer({
    polylineOptions: polylineDotted
});

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
      lat: -12.020651498087096,
      lng: -77.1
    }
  });
  directionsDisplay.setMap(map);
  let initRoad = (event) => {
    event.preventDefault();
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  autocompleteInputs();
  // asociando evento a elemento del DOM
  btnRoad.addEventListener('click', initRoad);

}
