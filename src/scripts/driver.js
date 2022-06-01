// screen view -----------------
const WIDTH = 1200;
const HEIGHT = 1200;

const $canvas = document.getElementById('screen');

$canvas.width = WIDTH;
$canvas.height = HEIGHT;

const ctx = $canvas.getContext('2d');

ctx.fillStyle = 'rgb(255, 255, 255)'; //trail fill
//---------------------screen view end

//boat parameters------------------------
const amarillo = {
    $el: document.querySelector('.driver'),
    x: WIDTH / 2, //positioned at center
    y: HEIGHT / 2,
    xVelocity: 0,
    yVelocity: 0,
    knots: 0,
    reverse: 0,
    drift: 0,
    driftSpeed: 0, 
    score: 0
};

const boats = [amarillo];

function boatParams (boat) {
    const {
      x,
      y,
      xVelocity,
      yVelocity,
      knots,
      reverse,
      drift,
      driftSpeed,
      isAccelerating,
      isReversing,
      isTurningLeft,
      isTurningRight,
      score
    } = boat;
}
//----------------------- boat parameters end

// physics-------------------
const maxKnots = 0.075;
const maxReverse = 0.0375;
const knotsCalc = 0.001;
const reverseCalc = 0.0005;

const drift = 0.95;
const driftSpeed = 0.95;
const turnSpeed = 0.002;
// --------------------physics end

//boat movement ---------------------
let isAccelerating = false;
let isReversing = false;

function moveBoat(boat) {

    if (boat.isAccelerating){
        boat.knots += knotsCalc * 1;
    } else {
        boat.knots -= knotsCalc;
    }

    if (boat.isReversing) {
        boat.reverse += reverseCalc;
    } else {
        boat.reverse -= reverseCalc;
    }

    boat.knots = Math.max(0, Math.min(maxKnots, boat.knots));
    boat.reverse = Math.max(0, Math.min(maxReverse, boat.reverse));
} 

function turnBoat(boat) {
    const compass = boat.knots > boat.reverse ? 1 : -1;

    if (boat.isTurningLeft) {
        boat.driftSpeed -= compass * turnSpeed * boat.isTurningLeft;
    }

    if (boat.isTurningRight) {
        boat.driftSpeed += compass * turnSpeed * boat.isTurningRight;
    }

    boat.xVelocity += Math.sin(boat.drift) * (boat.knots - boat.reverse);
    boat.yVelocity += Math.cos(boat.drift) * (boat.knots - boat.reverse);

    boat.x += boat.xVelocity;
    boat.y -= boat.yVelocity;
    boat.xVelocity *= drift;
    boat.yVelocity *= drift;
    boat.drift += boat.driftSpeed;
    boat.driftSpeed *= driftSpeed;
}
//---------------------boat movement end


// upddate boat position------------
function updateBoatPosition() {
    boats.forEach(moveBoat);
    boats.forEach(turnBoat);
}
// ----------------------update boat position end


// controls action ---------------------------------
let userInput;

const motionControls = () => {
    var canTurn = amarillo.knots > 0.0025 || amarillo.reverse;
    var controls = window.getControls();

    const gas = Math.round(controls.up * 10) / 10;
    const reverse = Math.round(controls.down * 10) / 10;

    if (amarillo.isAccelerating !== gas || amarillo.isReversing !== reverse) {
        userInput = true;
        amarillo.isAccelerating = gas;
        amarillo.isReversing = reverse;
    }
    const turnLeft = canTurn && Math.round(controls.left * 10) / 10;
    const turnRight = canTurn && Math.round(controls.right * 10) / 10;

    if (amarillo.isTurningLeft !== turnLeft) {
        userInput = true;
        amarillo.isTurningLeft = turnLeft;
    }

    if (amarillo.isTurningRight !== turnRight) {
        userInput = true;
        amarillo.isTurningRight = turnRight;
    }
}
// ----------------------------controls action end


// screen wrap -----------------------------------
const screenWrap = () => {

    if (amarillo.x > WIDTH + 17.5) {
        amarillo.x -= WIDTH + 29;
        // userInput = true;
    } else if (amarillo.x < -17.5) {
        amarillo.x += WIDTH + 29;
        // userInput = true;
    } 

    if (amarillo.y > HEIGHT + 17.5) {
        amarillo.y -= HEIGHT + 29;
        // userInput = true;
    } else if (amarillo.y < -17.5) {
        amarillo.y += HEIGHT + 29;
        // userInput = true;
    }
}
// -----------------------------------------screen wrap end

// calls to controls----------------------------
let lastTime;
let acc = 0;
const step = 1/120;

setInterval(() => {

    motionControls();
    screenWrap();

    for (let i = 0; i < boats.length; i++) {
        const boat = boats[i];
  
        if (amarillo === boat) {
          continue;
        }
    }

    const ms = Date.now();

    if (lastTime) {
        acc += (ms - lastTime) / 1000;

        while (acc > step) {
            updateBoatPosition();

            acc -= step;
        }
    }

    lastTime = ms;

    if(userInput){ 
        boatParams(amarillo);
    }
}, 1000 / 120);
// -----------------------------------calls to controls

// rendering boat-------------------------------
function renderBoat (boat) {
    const { x, y, drift, knots, reverse, driftSpeed } = boat;

    boat.$shape = boat.$el.querySelector('.boatshape');

    boat.$el.style.transform = `translate(${x}px, ${y}px)`;

    boat.$shape.style.transform = `rotate(${drift * 180 / Math.PI}deg)`;
    
    const inMotion = (boat.knots > 0.0025) || boat.reverse > 0;

    if (inMotion) {
        if (((maxReverse === reverse) || (maxKnots === knots)) && Math.abs(driftSpeed) < 0.002) {
            return;
        }

        ctx.fillRect(
            x - 1 * 3,
            y - 1 * 3,
            4,
            4
        );
 
    }
};
// -----------------------------------------------rendering boat end

// centers camera on boat-----------------
const ocean = {
    x: window.innerWidth / 2 - amarillo.x,
    y: window.innerHeight / 2 - amarillo.y
};
//---------------------------------boat camera done

// render game--------------------------------
const $ocean = document.querySelector('.ocean');
function render(ms) {
    requestAnimationFrame(render);

    boats.forEach(renderBoat);

    ocean.x = window.innerWidth / 2 - amarillo.x;
    ocean.y = window.innerHeight / 2 - amarillo.y;

    $ocean.style.transform = `translate(${ocean.x}px, ${ocean.y}px)`;
}

requestAnimationFrame(render);
// ----------------------------render game end