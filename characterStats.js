var character; //Variable for the character to be stored in

var characterCreate = { //"Factory" to create the character object, could be done with a list of variables, but this makes it easier to read and re-use
  create: function() {
    $.ajax({ //Ajax call using the stored username to get the character details from their user profile
        url: "/getCharacter",
        data: { 
          "username": sessionStorage.getItem("username")
        },
        cache: false, //Don't cache the call
        type: "POST",
        success: function(response) {
          console.log("Character made!"); //Add all the character values to the preset variables - global variables aren't ideal but they were the best way to get it working
          
          character = { //Set up the character stats from the variables
            maxHitPoints: response.character.maxHitPoints,
            hitPoints: response.character.hitPoints,
            level: response.character.level,
            attack: response.character.attack,
            armour: response.character.armour,
            gold: response.character.gold,
            exp: response.character.exp,
            items: response.character.items
          }
        
          health.value = response.character.hitPoints; //Set up the player health bar
          health.max = response.character.maxHitPoints;
          $("#playerHealthBar").text("Player Health: " + response.character.hitPoints + "/" + response.character.maxHitPoints);
          drawCharacter(); //Call the function to draw the character
          return character; //Return the character object to the global variable to be used
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
    
  }
}