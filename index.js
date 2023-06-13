function calculateDistance() {
  var pointA = document.getElementById('pointA').value;
  var pointB = document.getElementById('pointB').value;

  var coordinatesA = pointA.split(',').map(parseFloat);
  var coordinatesB = pointB.split(',').map(parseFloat);

  var lat1 = coordinatesA[0];
  var lon1 = coordinatesA[1];
  var lat2 = coordinatesB[0];
  var lon2 = coordinatesB[1];

  var distance = getDistance(lat1, lon1, lat2, lon2);
  document.getElementById('result').textContent = 'Distance: ' + distance.toFixed(2) + 'km';
}

function getDistance(lat1, lon1, lat2, lon2) {
  var earthRadius = 6371; // in kilometers

  var dLat = toRadians(lat2 - lat1);
  var dLon = toRadians(lon2 - lon1);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var distance = earthRadius * c;
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
