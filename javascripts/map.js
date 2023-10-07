function displayOnMap() {
  let coords = geoController.getPosition().coords;
  console.log(coords);
  window.location.href =
    "https://google.com/maps?q=${coords.latitude}, ${coords.longitude}";
}
