QUnit.test( "Click Play Single Player and check if game starts", function( assert ) {
  $("#playSP").trigger('click');
  assert.equal($("#attack").css("visibility"), "visible", "Attack button is visible, game has started");
  $("#playSP").toggle();
  $("#attack").css("visibility", "hidden");
  $("#defend").css("visibility", "hidden");
  var canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

QUnit.test("Test the battle features: Attack", function (assert) {
  $("#playSP").trigger('click');
  $('#attack').trigger('click');
  assert.notEqual(monster.hitPoints, "30", "Damage is dealt");
  assert.notEqual(monHealth.value, "30", "Health bar changes to reflect the monster's health");
  assert.notEqual(character.hitPoints, "100", "Zombie has attacked back");
  assert.notEqual(health.value, "100", "Health bar changed to reflect player health");
  $("#playSP").toggle();
  $("#attack").css("visibility", "hidden");
  $("#defend").css("visibility", "hidden");
  var canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  monHealth.value = monHealth.max;
  character.hitPoints = 100;
  monHealth.value = 0;
  monHealth.max = 0;
  health.value = 0;
  health.max = 0;
});

QUnit.test("Test the battle features: Defend", function (assert) {
  $("#playSP").trigger('click');
  $('#defend').trigger('click');
  assert.notEqual(character.hitPoints, "100", "Zombie has attacked");
  assert.notEqual(health.value, "100", "Health bar changed to reflect player health");
  assert.equal(character.hitPoints, "98", "Damage would be 2, Zombie deals 10 against an armour of 8, which is the 3 base + 5 from defending, 100 - 2 = 98 so the HP would be 98");
  $("#playSP").toggle();
  $("#attack").css("visibility", "hidden");
  $("#defend").css("visibility", "hidden");
  $("#playerHealthBar").text("Player Health: ");
  $("#monsterHealthBar").text("Monster Health: ");
  var canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  monHealth.value = monHealth.max;
  character.hitPoints = 100;
  monHealth.value = 0;
  monHealth.max = 0;
  health.value = 0;
  health.max = 0;
});
