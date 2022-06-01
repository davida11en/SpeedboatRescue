// // bunldes js code for import 



// document.addEventListener('DOMContentLoaded', () => {
//     var gamecanvas = document.getElementById('gamecanvas'); 
//     gamecanvas.width = 400;
//     gamecanvas.height = 700;
//     var road = gamecanvas.getContext('2d');
//     road.fillStyle = "grey"; 
//     road.fillRect(20,20,400,700);

//     var car = gamecanvas.getContext('2d'); 
//     var posX = 100;
//     var posY = 350;
//     var dx = 0;
//     var dy = 0;

//     setInterval(function () {
//         var gamecanvas = document.getElementById('gamecanvas'); 
//         gamecanvas.width = 400;
//         gamecanvas.height = 500;
//         var road = gamecanvas.getContext('2d');
//         road.fillStyle = "grey"; 
//         road.fillRect(0,0,400,500);
//         posX += dx;
//         posY += dy;

//         if (posX > 360) {
//             dx = 0;
//             posX = 360;
//         } else if (posX < 0){
//             dx = 0;
//             posX = 0;
//         } else if (posY > 430){
//             dy = 0;
//             posY = 430;
//         } else if (posY < 0){
//             dy = 0;
//             posY = 0;
//         }

//         car.fillStyle = "pink"; 
//         car.fillRect(posX,posY,40,70)
//     }, 5);

  
//     window.addEventListener('keydown', keydown);
//     function keydown(event) {
//         switch(event.keyCode){
//             case 37: 
//                 dx = -1;
//                 dy = 0;
//                 break;
//             case 38: 
//                 dx = 0;
//                 dy = -1;
//                 break;
//             case 39: 
//                 dx = 1;
//                 dy = 0;
//                 break;
//             case 40: 
//                 dx = 0;
//                 dy = 1;
//                 break;
//         }
//     }

//     window.addEventListener('keyup', keyup);
//     function keyup(event) {
//         switch(event.keyCode){
//             case 37: 
//                 dx = 0;
//                 dy = 0;
//                 break;
//             case 38: 
//                 dx = 0;
//                 dy = 0;
//                 break;
//             case 39: 
//                 dx = 0;
//                 dy = 0;
//                 break;
//             case 40: 
//                 dx = 0;
//                 dy = 0;
//                 break;
//         }
//     }

// })