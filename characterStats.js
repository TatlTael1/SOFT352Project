var level = 1;
var attack = 5;
var armour = 3;
var gold = 0;
var exp = 0;

var character;
var characterCreate = {
  create: function() {
    character = {
      hitPoints: 100,
      level: level,
      attack: attack,
      armour: armour,
      gold: gold,
      exp: exp
    }
    drawCharacter();
    return character;
  }
}