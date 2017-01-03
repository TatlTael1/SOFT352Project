var monster; //Variable to store the monster object in
var monsterFactory = { //Factory to create monsters
  create: function(type) { //Create action that is passed a type of monster, followed by a series of "if" statements to select the correct type of monster to create
    if(type == 'zombie') { //If passed "zombie", assign the zombie stats to the monster object
      monster = {
        maxHitPoints: 30,
        hitPoints: 30,
        expPoints: 10,
        dmg: 8,
        armour: 1,
        gold: 15
      }
      monHealth.value = 30; //Set the health bar value and max value to the health of the monster
      monHealth.max = 30;
      drawZombie(); //Call the function to draw the zombie to the canvas
    }
    if(type == 'raider') { //If passed "raider", assign raider stats to the monster object
      monster = {
        maxHitPoints: 50,
        hitPoints: 50,
        expPoints: 20,
        dmg: 20,
        armour: 3,
        gold: 50
      }
      monHealth.value = 50;
      monHealth.max = 50;
      drawRaider();
    }
    if(type == 'wolf') { //If passed "wolf", assign wolf stats to monster object
      monster = {
        maxHitPoints: 40,
        hitPoints: 40,
        expPoints: 15,
        dmg: 13,
        armour: 1,
        gold: 25
      }
      monHealth.value = 40;
      monHealth.max = 40;
      drawWolf();
    }
    if(type == 'dire wolf') { //If passed "dire wolf", assign dire wolf stats to monster object
      monster = {
        maxHitPoints: 80,
        hitPoints: 80,
        expPoints: 40,
        dmg: 25,
        armour: 5,
        gold: 75
      }
      monHealth.value = 80;
      monHealth.max = 80;
      drawDireWolf();
    }
    $("#monsterHealthBar").text("Monster Health: " + monster.hitPoints + "/" + monster.hitPoints);
    return monster; //Return the created monster to be used
  }
}