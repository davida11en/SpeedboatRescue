var c,ltx;

var x = 10;
var cords = [];
// onload=setInterval(stopit5,1000);

// loads screen 
for (var i = 0; i < x; i++) {

    // console.log("is this thing on?", cords)
   onload = setTimeout(randomize)
//    console.log("is this thing on?2", cords.length)
}

//function to generate random circle placement, x,y and radius

function randomize(){
    // console.log("here");
    c = document.getElementById("screen");
    ltx = c.getContext("2d");
    //   var rr = Math.ceil((30* Math.random())+5)
    var rr = 10;
    var rx = Math.ceil(1100* Math.random());
    var ry = Math.ceil(1100* Math.random());
    // console.log('lookin for length111', cords.length)
    drawCircle(rx,ry,rr);  
    // console.log('lookin for length222', cords.length)
    cords.push([rx,ry])

}

function drawCircle(rx,ry,rr){
  var rr;
  var rx;
  var ry;
  var myColors = "orange";
  ltx.lineWidth = 20;
  ltx.strokeStyle = myColors;
  ltx.beginPath();
  ltx.arc(rx,ry,rr,0,2*Math.PI);
  ltx.stroke();
  ltx.closePath();

  // console.log('RX', rx)
  // console.log('RY', ry)
  // console.log('CORDS', cords)
  // console.log('BOATX', amarillo.x)
  // console.log('BOATY', amarillo.y)
  // console.log("BOAT DEETS", amarillo)
}

var elem = document.querySelector('.driver')
let rect = elem.getBoundingClientRect();



document.addEventListener('keydown', function(e) {
    // returning coordinates of boat
    console.log('BOATX', amarillo.x)
    // console.log('BOATY', amarillo.y)
    // console.log(getComputedStyle(elem))
    console.log('CORDS', cords)
    // console.log('RY', ry)
    // console.log(rect)


    if (amarillo.x > 700) {
      console.log('TEST RUN OVER 7 ');
      cords.pop();
      console.log('arr length', cords.length)
    } else if (amarillo.y < 350){
      console.log('TEST RUNDER 4')
    }
});

// console.log(elem)

// console.log('lookin for cords', cords);
// console.log('boat?', amarillo)

/*
 * need  
*/ 

// while (cords.length > 10) {
//     // console.log("is this thing on?")
//     const curX = amarillo.x
//     const curY = amarillo.y

//     for (var i = 0; i < cords.length; i++) {
//         let cordX = cords[i][0]
//         let cordY = cords[i][1]

//         if (Math.abs(curX - cordX) < 10) {
//             console.log('Xhit')
//             cords.splice(i, 1)
//         } else if (Math.abs(curY - cordY) < 10) {
//             console.log('Yhit')
//             cords.splice(i, 1)
//         }
//     }
