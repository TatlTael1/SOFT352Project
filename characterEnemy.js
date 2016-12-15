var canvas = document.getElementById("gameCanvas");
if (canvas.getContext("2d")) { // Check HTML5 canvas support
ctx = canvas.getContext("2d"); // get Canvas Context object

ctx.beginPath();
ctx.fillStyle = "bisque"; // #ffe4c4
ctx.arc(700, 100, 30, 0, Math.PI * 2, true); // draw circle for head
// (x,y) center, radius, start angle, end angle, anticlockwise
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "red"; // color
ctx.lineWidth = 3;
ctx.arc(700, 100, 20, 0, Math.PI, false); // draw semicircle for smiling
ctx.stroke();

// eyes
ctx.beginPath();
ctx.fillStyle = "green"; // color
ctx.arc(690, 95, 3, 0, Math.PI * 2, true); // draw left eye
ctx.fill();
ctx.arc(710, 95, 3, 0, Math.PI * 2, true); // draw right eye
ctx.fill();

// body
ctx.beginPath();
ctx.moveTo(700, 130);
ctx.lineTo(700, 230);
ctx.strokeStyle = "navy";
ctx.stroke();

// arms
ctx.beginPath();
ctx.strokeStyle = "#0000ff"; // blue
ctx.moveTo(700, 130);
ctx.lineTo(650, 180);
ctx.moveTo(700, 130);
ctx.lineTo(750, 180);
ctx.stroke();

// legs
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.moveTo(700, 230);ctx
ctx.lineTo(650, 330);
ctx.moveTo(700, 230);
ctx.lineTo(750, 330);
ctx.stroke();
}