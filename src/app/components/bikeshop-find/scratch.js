// var shortestDistance = function() {

  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var size = 0;
  var currentPosition;

  // An array of interesting places we want to potentially visit.
  var interestingPlaces = [
    {'title': 'Regents Park', 'latLng': new google.maps.LatLng(51.530686, -0.154753)},
    {'title': 'Hyde Park', 'latLng': new google.maps.LatLng(51.507293, -0.164022)},
    {'title': 'Green Park', 'latLng': new google.maps.LatLng(51.504088, -0.141706)},
    {'title': 'Regents Park', 'latLng': new google.maps.LatLng(51.479185, -0.159903)}
  ];

  // An array to store results from Google routing API.
  var routeResults = [];

  // Call this upon page load to set everything in motion!
  function initialize(currentLat, currentLng) {
    currentPosition = new google.maps.LatLng(currentLat, currentLng);
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
      zoom: 13,
      center: currentPosition
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    directionsDisplay.setMap(map);

    var marker = new google.maps.Marker({
          position: currentPosition,
          map: map,
          title: 'Currrent location.',
          icon: 'https://www.dropbox.com/s/9idmjxzkwx017b6/cycling.png?dl=0'
    });

    var i = interestingPlaces.length;
     while (i--) {
      interestingPlaces[i].marker = new google.maps.Marker({
        position: interestingPlaces[i].latLng,
        map: map,
        title: interestingPlaces[i].title,
        icon: 'https://www.dropbox.com/s/9idmjxzkwx017b6/cycling.png?dl=0'
      });
    }

    findNearestPlace();
  }


  // Loops through all inteesting places to calculate route between our current position
  // and that place.
  function findNearestPlace() {
    var i = interestingPlaces.length;
    size = interestingPlaces.length;
    routeResults = [];
    while (i--) {
      calcRoute(interestingPlaces[i].latLng, storeResult);
    }
  }


  // A function to calculate the route between our current position and some desired end point.
  function calcRoute(end, callback) {
    var request = {
        origin: currentPosition,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        callback(response);
      } else {
        size--;
      }
    });
  }


  // Stores a routing result from the API in our global array for routes.
  function storeResult(data) {
    routeResults.push(data);
    if (routeResults.length === size) {
      findShortest();
    }
  }


  // Goes through all routes stored and finds which one is the shortest. It then
  // sets the shortest route on the map for the user to see.
  function findShortest() {
    var i = routeResults.length;
    var shortestIndex = 0;
    var shortestLength = routeResults[0].routes[0].legs[0].distance.value;

    while (i--) {
      if (routeResults[i].routes[0].legs[0].distance.value < shortestLength) {
        shortestIndex = i;
        shortestLength = routeResults[i].routes[0].legs[0].distance.value;
      }
    }
    directionsDisplay.setDirections(routeResults[shortestIndex]);
  }

  // Expose the initialize function publicly as "init".
  return {
    init: initialize
  };
// }();

// Upon page load, lets start the process!
// google.maps.event.addDomListener(window, 'load', shortestDistance.init(51.489554, -0.12969));
