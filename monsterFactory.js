var monster;
var monsterFactory = {
  create: function(type) {
    if(type == 'zombie') {
      monster = {
        hitPoints: 30,
        expPoints: 10,
        dmg: 10,
        armour: 1,
        gold: 15
      }
      drawZombie();
    }
    return monster;
  }
}