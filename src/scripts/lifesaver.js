var c,ctx;

var x = 10;
var interval = 1000
// onload=setInterval(stopit5,1000);

//function to generate random circle parameters, x,y and radius
for (var i = 0; i < x; i++) {
    setTimeout(randomize, i * interval)
}

function randomize(){
 // console.log("here");
  c = document.getElementById("screen");
  ctx = c.getContext("2d");
//   var rr = Math.ceil((30* Math.random())+5)
  var rr = 10;
  var rx = Math.ceil(290* Math.random());
  var ry = Math.ceil(290* Math.random());

  drawCircle(rx,ry,rr);  
}

function drawCircle(rx,ry,rr){
  var myColors = "orange";
  ctx.strokeStyle = myColors;
  ctx.beginPath();
  ctx.arc(rx,ry,rr,0,2*Math.PI);
  ctx.stroke();
  ctx.closePath();
}




// lifesavers---------------------------
// const $rescue = document.getElementById('rescue');


// const ring = $rescue.getContext('2d');
// // $rescue.height = 25;
// // $rescue.width = 25;
// ring.fillStyle = 'rgb(255, 90, 8)';
// ring.stroke(-10, -10, 24, 24)
// -----------------------------------lifesavers end


// const $lifesaver = document.querySelector('.lifesaver');

// const RANDX = Math.floor(Math.random() * 801) + 200;
// const RANDY = Math.floor(Math.random() * 801) + 200;

// const lifesaver = {
//     $el: document.querySelector('.lifesaver'),
//     x: RANDX,
//     y: RANDY
// }


// const circle = function (centerX, centerY, radius, color) {
//     this.centerX = centerX;
//     this.centerY = centerY;
//     this.radius = radius;
//     this.color = color;
//   };
  
//   Circle.randomCircle = function (maxX, maxY, numCircles) {
//     return new Circle(
//       maxX * Math.random(),
//       maxY * Math.random(),
//       Circle.radius(maxX, maxY, numCircles),
//       Circle.randomColor()
//     );
//   };
  
//   const HEX_DIGITS = "0123456789ABCDEF";
  
//   Circle.randomColor = function () {
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += HEX_DIGITS[Math.floor((Math.random() * 16))];
//     }
  
//     return color;
//   };
  
//   Circle.radius = function (maxX, maxY, numCircles) {
//     let targetCircleArea = (maxX * maxY) / numCircles;
//     let targetRadius = Math.sqrt(targetCircleArea / Math.PI);
//     return 2 * targetRadius;
//   };
  
//   Circle.prototype.moveRandom = function (maxX, maxY) {
//     let dx = (Math.random() * 2) - 1;
//     let dy = (Math.random() * 2) - 1;
  
//     this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);
//     this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);
//   };
  
//   Circle.prototype.render = function (ctx) {
//     ctx.fillStyle = this.color;
//     ctx.beginPath();
  
//     ctx.arc(
//       this.centerX,
//       this.centerY,
//       this.radius,
//       0,
//       2 * Math.PI,
//       false
//     );
  
//     ctx.fill();
//   };