window.onload = function () {
  const mapContainer = document.getElementById("map-container");
  const status = document.getElementById("status");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

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
};
