var monster; //Variable to store the monster object in
var monsterFactory = { //Factory to create monsters
  create: function(type) { //Create action that is passed a type of monster, followed by a series of "if" statements to select the correct type of monster to create
    if(type == 'zombie') { //If passed "Zombie", assign the zombie stats to the monster object
      monster = {
        maxHitPoints: 30,
        hitPoints: 30,
        expPoints: 10,
        dmg: 10,
        armour: 1,
        gold: 15
      }
      monHealth.value = 30;
      monHealth.max = 30;
      $("#monsterHealthBar").text("Monster Health: " + monster.hitPoints + "/" + monster.hitPoints);
      drawZombie(); //Call the function to draw the zombie to the canvas
    }
    return monster; //Return the created monster to be used
  }
}