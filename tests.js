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
  assert.equal(character.hitPoints, "100", "Zombie has attacked");
  assert.equal(health.value, "100", "Health bar changed to reflect player health");
  assert.equal(character.hitPoints, "100", "Damage would be 0, Zombie deals 8 against an armour of 8, which is the 3 base + 5 from defending, 100 - 0 = 100 so the HP would be 100");
  $("#playSP").toggle();
  $("#attack").css("visibility", "hidden");
  $("#defend").css("visibility", "hidden");
  $("#item").css("visibility", "hidden");
  $("#run").css("visibility", "hidden");
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

QUnit.test("Test the battle features: Run", function (assert) {
  $("#playSP").trigger('click');
  $('#run').trigger('click');
  assert.equal(round, "-1", "The creature disappears, and the round number is set to -1, to be reset to zero when the restart button is clicked");
  $("#playSP").toggle();
  $("#restart").css("visibility", "hidden");
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

QUnit.test("Test the battle features: Restart", function (assert) {
  $("#playSP").trigger('click');
  $('#run').trigger('click');
  $('#restart').trigger('click');
  assert.equal(round, "0", "The creature reappears, the round is set to 0 to cycle through the array of monsters");
  $("#playSP").toggle();
  $("#attack").css("visibility", "hidden");
  $("#defend").css("visibility", "hidden");
  $("#item").css("visibility", "hidden");
  $("#run").css("visibility", "hidden");
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