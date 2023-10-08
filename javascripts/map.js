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
}
