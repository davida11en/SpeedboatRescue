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
console.log('OG COREDS', cords);
// var copy = Object.assign

document.addEventListener('keydown', function(e) {
    // returning coordinates of boat
    console.log('BOATX', amarillo.x)
    console.log('BOATY', amarillo.y)
    // console.log(getComputedStyle(elem))
    // console.log('CORDS', cords)
    // console.log('CORDS', cords.length)
    // console.log('RY', ry)
    // console.log(rect)


    // if (amarillo.x > 700) {
    //   console.log('TEST RUN OVER 7 ');
    //   cords.pop();
    //   console.log('arr length', cords.length)
    // } else if (amarillo.x < 350){
    //   console.log('TEST RUNDER 4')
    // }

    // while (cords.length > 0) {
    
    var curX = amarillo.x
    var curY = amarillo.y

 

    for (var i = 0; i < cords.length; i++) {
        var cordX = cords[i][0]
        var cordY = cords[i][1]

        console.log('life x', cordX); // life x 375
        console.log('boat x', curX); // lifesaver.js:88 boat x 454.1293141041299
        console.log('XCORD DIFF', Math.abs(curX - cordX)); // lifesaver.js:89 XCORD DIFF 79.12931410412989
        console.log('boat y', curY); // lifesaver.js:90 boat y 573.1367017988306
        console.log('life y', cordY) // lifesaver.js:91 life y 470
        console.log('YCORD DIFF', Math.abs(curY - cordY)); //lifesaver.js:92 YCORD DIFF 103.13670179883059

        






        //      console.log('life x', cordX);
        //       console.log('boat x', curX);
        // console.log('XCORD DIFF', Math.abs(curX - cordX));
        //                console.log('boat y', curY);
        //       console.log('life y', cordY)
        // console.log('YCORD DIFF', Math.abs(curY - cordY));
        // console.log('boat y', curY);
        // console.log('OG COREDS', cords);
        // console.log('life y', cordY)
        // while (cords.length > 0) {
          // if (Math.abs(curX - cordX) < 2 || Math.abs(curY - cordY) < 2) {
          //     console.log('HIT+++++')
          //     console.log('life x', cordX);
          //     console.log('boat x', curX);
          //     console.log('XCORD DIFF', Math.abs(curX - cordX));
          //     console.log('boat y', curY);
          //     console.log('life y', cordY)
     
          //     console.log('CORDS', cords.length)
          //     cords.splice(i, 1)
          //     console.log('CORDS cut', cords)
          //     console.log('CORDS', cords.length)
          // }
        // }
        // } else if (Math.abs(curY - cordY) < 5) {
        //     console.log('Yhit')
        //     console.log('life x', cordX);
        //     console.log('boat x', curX);
        //      console.log('boat y', curY);
        //       console.log('life y', cordY)
        //     // cords.splice(i, 1)
        // }
    }

    
});

// console.log(elem)

// console.log('lookin for cords', cords);
// console.log('boat?', amarillo)

/*
  now that ive found out a way to get live coordinates of the boat and coordinate of the lifejackets
  next steps:
    -make function that checks collision
    -make a function that fills circles with ocean color in exact spot to cover the lifevest 
    -also delete the coordinate from array to let game know when you're finished
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
