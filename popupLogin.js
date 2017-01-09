var username;
function check_login() {
  if(document.getElementById('Lname').value == "" || document.getElementById('Lpassword').value == "") { //Check if the fields are empty
    alert("Please enter your username and password!");
  } else {
    $.ajax({
        url: "/login",
        data: { 
          "username": document.getElementById('Lname').value, //Get the values entered by the user into the username and password fields
          "password": document.getElementById('Lpassword').value 
        },
        cache: false, //Don't cache the call
        type: "POST", //Post so the username and password aren't put into the URL
        success: function(response) {
          if(sessionStorage.getItem("loggedIn") == 1) { //If you are already logged in...
            alert("You are already logged in!"); //Alert the user
          } else {  
            sessionStorage.setItem("loggedIn", 1); //Set a session based localStorage variable to act as the logged in filter for things
            username = response.Username; //Get the username from the response
            sessionStorage.setItem("username", username); //Store it in the sessionStorage for use with other calls to the server
            $('#goldAndExp').text("You have " + response.character.gold + " gold and " + response.character.exp + " exp. You are level: " + response.character.level); //Set the Gold and Exp values over the goldAndExp p tag
            $('#popupR').css("visibility", "hidden"); //Hide the login and register buttons, unhide the logout button
            $('#popupL').css("visibility", "hidden");
            $('#logout').css("visibility", "visible");
            alert("Logged in successfully!"); //On success, alert the user they have been logged in
          }
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
}

//Function To Display Popup
function show_login() {
  document.getElementById('def').style.display = "block";
}
//Function to Hide Popup
function login_hide() {
  document.getElementById('def').style.display = "none";
}