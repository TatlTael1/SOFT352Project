// Validating Empty Field
function check_empty() {
  if (document.getElementById('Rname').value == "" || document.getElementById('Rpassword').value == "" || document.getElementById('Rpassword2').value == "") {
    alert("Fill All Fields!"); //Alert if any field is blank
  }
  else {
    if (document.getElementById('Rpassword').value != document.getElementById('Rpassword2').value) { //Validating passwords
      alert("Passwords do not match!"); //Alert if the passwords don't match
    }
    else { //If all fields are full and the passwords match, register them
      $.ajax({
        url: "/register",
        data: { 
          "username": document.getElementById('Rname').value, //Get the values entered by the user into the username and password fields
          "password": document.getElementById('Rpassword').value 
        },
        cache: false, //Don't cache the call
        type: "POST", //Post so the username and password aren't put into the URL
        success: function(response) {
          alert("Registered successfully!"); //On success, alert the user they have been registered
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
      });
    }
  }
}
//Function To Display Popup
function div_show() {
  document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
  document.getElementById('abc').style.display = "none";
}