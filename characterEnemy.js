var canvas = document.getElementById("gameCanvas");
if (canvas.getContext("2d")) { // Check HTML5 canvas support
  ctx = canvas.getContext("2d"); // get Canvas Context object
  
  function drawZombie() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText("Zombie", 700, 60);
    
    ctx.beginPath();
    ctx.fillStyle = "green"; 
    ctx.arc(700, 100, 30, 0, Math.PI * 2, true); // draw circle for head
    // (x,y) center, radius, start angle, end angle, anticlockwise
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red"; // color
    ctx.lineWidth = 3;
    ctx.arc(700, 120, 10, 0, Math.PI, true); // draw semicircle for smiling
    ctx.stroke();

    // eyes
    ctx.beginPath();
    ctx.fillStyle = "red"; // color
    ctx.arc(690, 95, 3, 0, Math.PI * 2, true); // draw left eye
    ctx.fill();
    ctx.arc(710, 95, 3, 0, Math.PI * 2, true); // draw right eye
    ctx.fill();

    // body
    ctx.beginPath();
    ctx.moveTo(700, 130);
    ctx.lineTo(700, 230);
    ctx.strokeStyle = "green";
    ctx.stroke();

    // arms
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(700, 130);
    ctx.lineTo(650, 180);
    ctx.moveTo(700, 130);
    ctx.lineTo(750, 180);
    ctx.stroke();
    
    // legs
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(700, 230);
    ctx.lineTo(650, 330);
    ctx.moveTo(700, 230);
    ctx.lineTo(750, 330);
    ctx.stroke();
    
  }
  
  function drawRaider() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText("Raider", 700, 60);
    
    ctx.beginPath();
    ctx.fillStyle = "red"; 
    ctx.arc(700, 100, 30, 0, Math.PI * 2, true); // draw circle for head
    // (x,y) center, radius, start angle, end angle, anticlockwise
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "black"; // color
    ctx.lineWidth = 3;
    ctx.arc(700, 120, 10, 0, Math.PI, true); // draw semicircle for smiling
    ctx.stroke();

    // eyes
    ctx.beginPath();
    ctx.fillStyle = "black"; // color
    ctx.arc(690, 95, 3, 0, Math.PI * 2, true); // draw left eye
    ctx.fill();
    ctx.arc(710, 95, 3, 0, Math.PI * 2, true); // draw right eye
    ctx.fill();

    // body
    ctx.beginPath();
    ctx.moveTo(700, 130);
    ctx.lineTo(700, 230);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // arms
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(700, 130);
    ctx.lineTo(650, 180);
    ctx.moveTo(700, 130);
    ctx.lineTo(750, 180);
    ctx.stroke();
    
    // legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(700, 230);
    ctx.lineTo(650, 330);
    ctx.moveTo(700, 230);
    ctx.lineTo(750, 330);
    ctx.stroke();
    
  }
  
  function drawWolf() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText("Wolf", 500, 180);
    
    ctx.beginPath(); //Draw head
    ctx.fillStyle = "grey";
    ctx.arc(500, 225, 30, 0, Math.PI * 2, true);
    ctx.fill();
    
    ctx.beginPath(); //Draw mouth
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(480, 235);
    ctx.lineTo(520, 235);
    ctx.stroke();
    
    ctx.beginPath(); //Draw teeth
    ctx.fillStyle = "white";
    ctx.moveTo(485, 235);
    ctx.lineTo(490, 245);
    ctx.lineTo(495, 235);
    ctx.fill();
    ctx.moveTo(505, 235);
    ctx.lineTo(510, 245);
    ctx.lineTo(515, 235);
    ctx.fill();
    
    ctx.beginPath(); //Draw eyes
    ctx.fillStyle = "black";
    ctx.arc(490, 225, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.arc(510, 225, 3, 0, Math.PI * 2, true);
    ctx.fill();
    
    ctx.beginPath(); //Draw ears
    ctx.fillStyle = "grey";
    ctx.moveTo(460, 180);
    ctx.lineTo(475, 210);
    ctx.lineTo(490, 200);
    ctx.fill();
    ctx.moveTo(520, 180);
    ctx.lineTo(535, 210);
    ctx.lineTo(520, 240);
    ctx.fill();
    
    ctx.beginPath(); //Draw body
    ctx.strokeStyle = "grey";
    ctx.moveTo(530, 225);
    ctx.lineTo(640, 225);
    ctx.stroke();
    
    ctx.beginPath(); //Draw tail
    ctx.strokeStyle = "grey";
    ctx.moveTo(640, 225);
    ctx.lineTo(670, 200);
    ctx.stroke();
    
    ctx.beginPath(); //Draw legs
    ctx.strokeStyle = "grey";
    ctx.moveTo(570, 225);
    ctx.lineTo(600, 265);
    ctx.moveTo(570, 225);
    ctx.lineTo(540, 265);
    ctx.moveTo(640, 225);
    ctx.lineTo(610, 265);
    ctx.moveTo(640, 225);
    ctx.lineTo(670, 265);
    ctx.stroke();
  }
  
  function drawDireWolf() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText("Dire Wolf", 500, 180);
    
    ctx.beginPath(); //Draw head
    ctx.fillStyle = "brown";
    ctx.arc(500, 225, 30, 0, Math.PI * 2, true);
    ctx.fill();
    
    ctx.beginPath(); //Draw mouth
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(480, 235);
    ctx.lineTo(520, 235);
    ctx.stroke();
    
    ctx.beginPath(); //Draw teeth
    ctx.fillStyle = "white";
    ctx.moveTo(485, 235);
    ctx.lineTo(490, 245);
    ctx.lineTo(495, 235);
    ctx.fill();
    ctx.moveTo(505, 235);
    ctx.lineTo(510, 245);
    ctx.lineTo(515, 235);
    ctx.fill();
    
    ctx.beginPath(); //Draw eyes
    ctx.fillStyle = "black";
    ctx.arc(490, 225, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.arc(510, 225, 3, 0, Math.PI * 2, true);
    ctx.fill();
    
    ctx.beginPath(); //Draw ears
    ctx.fillStyle = "brown";
    ctx.moveTo(460, 180);
    ctx.lineTo(475, 210);
    ctx.lineTo(490, 200);
    ctx.fill();
    ctx.moveTo(520, 180);
    ctx.lineTo(535, 210);
    ctx.lineTo(520, 240);
    ctx.fill();
    
    ctx.beginPath(); //Draw body
    ctx.strokeStyle = "brown";
    ctx.moveTo(530, 225);
    ctx.lineTo(640, 225);
    ctx.stroke();
    
    ctx.beginPath(); //Draw tail
    ctx.strokeStyle = "brown";
    ctx.moveTo(640, 225);
    ctx.lineTo(670, 200);
    ctx.stroke();
    
    ctx.beginPath(); //Draw legs
    ctx.strokeStyle = "brown";
    ctx.moveTo(570, 225);
    ctx.lineTo(600, 265);
    ctx.moveTo(570, 225);
    ctx.lineTo(540, 265);
    ctx.moveTo(640, 225);
    ctx.lineTo(610, 265);
    ctx.moveTo(640, 225);
    ctx.lineTo(670, 265);
    ctx.stroke();
  }
}