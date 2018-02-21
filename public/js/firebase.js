
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDkTyq7XgP22WUfxOMJVnJfR2cEJ2gzGMo',
  authDomain: 'fare-estimate-1518971558619.firebaseapp.com',
  databaseURL: 'https://fare-estimate-1518971558619.firebaseio.com',
  projectId: 'fare-estimate-1518971558619',
  storageBucket: 'fare-estimate-1518971558619.appspot.com',
  messagingSenderId: '952440199557'
};
firebase.initializeApp(config);




// Uber API Constants
var uberClientId = "3iEdarHtpAOsKTtEadPj-dAOAIfJIIIf";
var uberServerToken = "14nlZoOFwTd7QW_2KlucYtzQCSTi_wZ3zh45BGv1i";

// Create variables to store latitude and longitude
var userLatitude
  , userLongitude
  , partyLatitude = 40.7283405
  , partyLongitude = -73.994567;

navigator.geolocation.watchPosition(function (position) {
  // Update latitude and longitude
  userLatitude = position.coords.latitude;
  userLongitude = position.coords.longitude;

  // Query Uber API if needed
  getEstimatesForUserLocation(userLatitude, userLongitude);
});

function getEstimatesForUserLocation(latitude, longitude) {
  $.ajax({
    url: "https://api.uber.com/v1.2/estimates/time",
    headers: {
      Authorization: "Token " + uberServerToken
    },
    data: {
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: partyLatitude,
      end_longitude: partyLongitude
    },
    success: function (result) {
      console.log(result);
    }
  });
}