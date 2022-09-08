var c,ltx;

var x = 10;
var cords = []; //lifejacket coordinates
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

function fillCircle(cordx,cordy) {
  var myColors = 'hsl(193, 100%, 46%)';
  ltx.lineWidth = 20;
  ltx.strokeStyle = myColors;
  ltx.beginPath();
  ltx.arc(cordx,cordy,10,0,2*Math.PI);
  ltx.stroke();
  ltx.closePath();
}


var elem = document.querySelector('.driver')
let rect = elem.getBoundingClientRect();
// console.log('OG COREDS', cords);
// var copy = Object.assign

document.addEventListener('keydown', function(e) {
    // startTimer(e)
    var curX = amarillo.x
    var curY = amarillo.y

 

    for (var i = 0; i < cords.length; i++) {
        var cordX = cords[i][0]
        var cordY = cords[i][1]

        if ((Math.abs(curX - cordX) + Math.abs(curY - cordY)) < 80) {
          // console.log('HIT')
          // console.log('hitx', curX)
          // console.log('hity', curY)
          // console.log('life x', cordX);
          // console.log('life x', cordY);
          fillCircle(cordX, cordY)
          // cords[i] = [null, null]
        } 
    }

    
    
});





const timer = document.getElementById("timer");
let timerInterval;

const startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we clear the variables
  let second = 0,
    minute = 0,
    hour = 0;

  // Next we set a interval every 1000 ms
  timerInterval = setInterval(function () {
    // Toggle the odd class every interval
  timer.classList.toggle('odd');

    // We set the timer text to include a two digit representation
    timer.innerHTML =
      (hour ? hour + ":" : "") +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);

    // Next we add a new second since one second is passed
    second++;

    // We check if the second equals 60 "one minute"
    if (second == 60) {
      // If so, we add a minute and reset our seconds to 0
      minute++;
      second = 0;
    }
    // console.log(cords)
    // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
};



// soon as the boat moves the time starts
// soon as the 
