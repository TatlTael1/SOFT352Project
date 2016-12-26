var character; //Variable for the character to be stored in

var characterCreate = { //"Factory" to create the character object, could be done with a list of variables, but this makes it easir to read and re-use
  create: function() {
    character = {
      maxHitPoints: 100,
      hitPoints: 100,
      level: 1,
      attack: 5,
      armour: 3,
      gold: 0,
      exp: 0
    }
    health.value = 100;
    health.max = 100;
    $("#playerHealthBar").text("Player Health: " + character.hitPoints + "/" + character.maxHitPoints);
    drawCharacter(); //Call the function to draw the character
    return character; //Return the character object to the global variable to be used
  }
}