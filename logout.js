function logout() {
  sessionStorage.setItem("loggedIn", 0);
  window.location.reload();
}