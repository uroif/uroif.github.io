var canvas = document.querySelector("#my_canvas");
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';

ctx.font = '40pt Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Hello', 10, 100)

ctx.beginPath();
ctx.moveTo(100, 30);
ctx.lineTo(400, 30);
ctx.lineTo(100, 250);
ctx.lineTo(400, 250);
ctx.lineWidth = 15;
ctx.strokeStyle = '#454545';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.stroke();

var x = 300;
var y = 300;
var rad = 75;
var startAngle = 1.1 * Math.PI;
var endAngle = 1.9 * Math.PI;
var counterClockwise = false;
ctx.beginPath();
ctx.arc(x, y, rad, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 20;
ctx.strokeStyle = '#aaaaaa';
ctx.stroke();
