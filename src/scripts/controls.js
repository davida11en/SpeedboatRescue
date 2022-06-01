

window.getControls = function () {

  return {
    up: pressed('up'),
    down: pressed('down'),
    left: pressed('left'),
    right: pressed('right'),
  };
};

const arrowKeys = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
};
const wasdKeys = {
  up: 87,
  down: 83,
  left: 65,
  right: 68
};

const pressed = (key) => {
  return pressedKey[arrowKeys[key]] || pressedKey[wasdKeys[key]] || false;
};

const pressedKey = {};

window.addEventListener('keydown', event => {
  pressedKey[event.keyCode] = true;
});

window.addEventListener('keyup', event => {
  pressedKey[event.keyCode] = false;
});
