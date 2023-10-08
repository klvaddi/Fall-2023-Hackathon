const x = document.getElementById("demo");
function getLocation() {
  const confirmation = confirm("Allow this website to access your location?");
  if (confirmation) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  } else {
    x.innerHTML = "Geolocation access denied.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;

  initMap(position.coords.latitude, position.coords.longitude);
}
function initMap(latitude, longitude) {
  // Get latitude and longitude from geolocation
  const lat = latitude; /* Your latitude value */
  const lng = longitude; /* Your longitude value */

  // Create a new map centered at the specified latitude and longitude
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 13,
    mapTypeId: "roadmap",
  });

  // Add a marker at the specified location
  const marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: "Your Location", // Marker tooltip (optional)
  });
}
