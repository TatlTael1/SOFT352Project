var canvas = document.getElementById("gameCanvas");
if (canvas.getContext("2d")) { // Check HTML5 canvas support
ctx = canvas.getContext("2d"); // get Canvas Context object

ctx.beginPath();
ctx.fillStyle = "bisque"; // #ffe4c4
ctx.arc(200, 100, 30, 0, Math.PI * 2, true); // draw circle for head
// (x,y) center, radius, start angle, end angle, anticlockwise
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "red"; // color
ctx.lineWidth = 3;
ctx.arc(200, 100, 20, 0, Math.PI, false); // draw semicircle for smiling
ctx.stroke();

// eyes
ctx.beginPath();
ctx.fillStyle = "green"; // color
ctx.arc(190, 95, 3, 0, Math.PI * 2, true); // draw left eye
ctx.fill();
ctx.arc(210, 95, 3, 0, Math.PI * 2, true); // draw right eye
ctx.fill();

// body
ctx.beginPath();
ctx.moveTo(200, 130);
ctx.lineTo(200, 230);
ctx.strokeStyle = "navy";
ctx.stroke();

// arms
ctx.beginPath();
ctx.strokeStyle = "#0000ff"; // blue
ctx.moveTo(200, 130);
ctx.lineTo(150, 180);
ctx.moveTo(200, 130);
ctx.lineTo(250, 180);
ctx.stroke();

// legs
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.moveTo(200, 230);
ctx.lineTo(150, 330);
ctx.moveTo(200, 230);
ctx.lineTo(250, 330);
ctx.stroke();
}