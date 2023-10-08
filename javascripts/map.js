function getLocation() {
  const confirmation = confirm("Allow this website to access your location?");
  const mapContainer = document.getElementById("map-container");
  const button = document.querySelector(".red-button");
  const status = document.getElementById("status");

  if (confirmation) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Hide the button and show the map container
          button.style.display = "none";
          mapContainer.style.display = "block";

          // Initialize the map centered at the specified latitude and longitude
          const map = new google.maps.Map(
            document.getElementById("map-container"),
            {
              center: { lat: latitude, lng: longitude },
              zoom: 15, // Zoom level (adjust as needed)
            }
          );

          // Add a marker at the specified location
          const marker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: "Your Location", // Marker tooltip (optional)
          });

          // Update status message
          status.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        },
        function () {
          status.textContent = "Unable to retrieve your location";
        }
      );
    } else {
      status.textContent = "Geolocation is not supported by this browser";
    }
  } else {
    status.textContent = "Geolocation access denied.";
  }
}
