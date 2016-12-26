var health = document.getElementById("health"); //Get the progress bar so it can be modified - Player bar
var monHealth = document.getElementById("monHealth") //Get the progress bar so it can be modified - Monster bar
var round = 0; //Round count, starts at 0 because of array
var monsterArray = ["zombie", "zombie", "zombie"]; //Array of monsters, in the order that the player fights them (could maybe randomise it?)

function attackEnemy() {
  console.log("You have attacked!");
  dmgDealt = character.attack - monster.armour; //Work our how much health will be lost
  newHP = monster.hitPoints - dmgDealt; //Apply the damage done
  monster.hitPoints = newHP; //Assign the new HP value to the monster object
  enemyHealthBar(dmgDealt); //Call the function that alters the health bar, passes the damage
  $("#monsterHealthBar").text("Monster Health: " + newHP + "/" + monster.maxHitPoints); //Displays the monster's current health against it's maximum health, to compliment the health bar
  if(newHP > 0) { //If the enemy's HP is over 0...
    enemyAttack(); //...they attack back
  } else { //Otherwise...
    goldEarned = monster.gold; //Give the player gold
    expEarned = monster.expPoints; //Give the player experience
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear the Canvas...
    drawCharacter(); //...And redraw the player character so the enemy disappears
    roundAdd = round + 1; //As Arrays start at 0, the round number displayed needs to be 1 higher
    var r = confirm("You cleared round " + roundAdd + "! Do you want to continue?") //Give them the option to move onto the next round or stop
    if (r == true) { //If the move on...
      round = round + 1; //Advance the round count
      nextRound(); //Call the function that creates the next round
      return round; //Pass the new round number back
    } else { //If they cancel
      $("#attack").css("visibility", "hidden"); //Hide the battle buttons
      $("#defend").css("visibility", "hidden");
    }
  }
  return monster.hitPoints; //Return the new HP value to the object
}

function defend() { //Defend function adds 5 to the armour value to reduce damage dealt
  console.log("You have defended!");
  armour = character.armour + 5;
  enemyAttackD(armour);
}

function playerHealthBar(dmg) { //Works the same as enemyHealthBar, just affects the player's health bar
  console.log("In playerHealthBar");
  this.dmg = dmg;
  health.value = health.value - dmg;
  console.log(health.value);
  return health.value;
}

function enemyHealthBar(dmg) {
  console.log("In enemyHealthBar");
  this.dmg = dmg; //Take the damage value for use
  monHealth.value = monHealth.value - dmg; //Set the value of the progress bar to its current value minus the damage done
  console.log(monHealth.value);
  return monHealth.value; //Return the new value
}

function enemyAttack() { //Same as attackEnemy, but from the enemy to the player
  console.log("You have been attacked!");
  dmgDealt = monster.dmg - character.armour;
  newHP = character.hitPoints - dmgDealt;
  character.hitPoints = newHP;
  $("#playerHealthBar").text("Player Health: " + newHP + "/" + character.maxHitPoints); //Displays the player's current health against their maximum health, to compliment the health bar
  console.log(character.hitPoints);
  playerHealthBar(dmgDealt);
  return character.hitPoints;
}

function enemyAttackD(armour) { //Works the same as enemyAttack, but needs different function as a parameter is being passed, and unlike Java Constructors, the name can't be the same, so the D stands for Defended 
  console.log("You have been attacked! But you defended!");
  this.armour = armour;
  dmgDealt = monster.dmg - armour;
  newHP = character.hitPoints - dmgDealt;
  $("#playerHealthBar").text("Player Health: " + newHP + "/" + character.maxHitPoints); //Displays the player's current health against their maximum health, to compliment the health bar
  character.hitPoints = newHP;
  console.log(character.hitPoints);
  playerHealthBar(dmgDealt);
  return character.hitPoints;
}

function nextRound() { //Starts the next round, i.e. creates the next monster in the array
  monsterFactory.create(monsterArray[round]);
}