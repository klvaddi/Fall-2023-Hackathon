const logoutElement = document.getElementById("logoutButton");
logoutElement.addEventListener("click", doLogout);

function doLogout() {
  clearClientSession();

  window.location.href = "/html/index.html";
}

function clearClientSession() {
  document.cookie =
    "firstName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "lastName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
