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
    console.log('lookin for length111', cords.length)
    drawCircle(rx,ry,rr);  
    console.log('lookin for length222', cords.length)
    cords.push([rx,ry])

    // while (cords.length > 1) {
    //         console.log('test')
    // const curX = amarillo.x
    // const curY = amarillo.y

    // for (var i = 0; i < cords.length; i++) {
    //     let cordX = cords[i][0]
    //     let cordY = cords[i][1]

    //     if (Math.abs(curX - cordX) < 10) {
    //         console.log('Xhit')
    //         cords.splice(i, 1)
    //     } else if (Math.abs(curY - cordY) < 10) {
    //         console.log('Yhit')
    //         cords.splice(i, 1)
    //     }
    // }

    // }

}

function drawCircle(rx,ry,rr){
  var myColors = "orange";
  ltx.lineWidth = 20;
  ltx.strokeStyle = myColors;
  ltx.beginPath();
  ltx.arc(rx,ry,rr,0,2*Math.PI);
  ltx.stroke();
  ltx.closePath();
}

console.log('lookin for cords', cords);
console.log('boat?', amarillo)


/**
 * janky logic
 * amarillo x === cords[i][0]
 * amarillo y === cords[i][1]
 * 
 * we're going to need current x and current y
 * if current x or current y 
 * for now if either x or y have a difference of less than 8 they've colided
 * 
 * until cords.length is empty meaning no more rescues keep this loop going
 * if boat touches any circle print hit
 * 
 */
console.log(cords[0])

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

// }

