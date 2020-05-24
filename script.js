// click button
var leftArrow = document.querySelector("#arrow-left");
var rightArrow = document.querySelector("#arrow-right");
var downArrow = document.querySelector("#arrow-down");
var upArrow = document.querySelector("#arrow-up");
var reloadButton = document.querySelector('#reload');

// click color
var el = document.getElementsByClassName("color");
var getAllLeft = document.querySelectorAll(".left");
var getAllRight = document.querySelectorAll(".right");
var getAllUp = document.querySelectorAll(".up");
var getAllDown = document.querySelectorAll(".down");
var Pixels = {
  leftPressed: 0,
  rightPressed: 0,
  upPressed: 0,
  downPressed: 0,
};
// All the parents
var getAllRed = document.querySelector(".red").children;
var getAllOrange = document.querySelector(".orange").children;
var getAllYellow = document.querySelector(".yellow").children;
var getAllGreen = document.querySelector(".green").children;
var getAllBlack = document.querySelector(".black").children;
var originalColors = {
  red: '#DC1626',
  orange: '#F69107',
  yellow: '#F8E711',
  green: '#2D8601',
  black: '#031528',
}

var ea = document.querySelector('.B-middle');
console.log(ea);

ea.addEventListener('click', toggle);

function toggle(){
  ea.classList.toggle('click');
}


console.log(getAllLeft);
// click event on all buttons
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener('click', changeColor);
}

function changeColor(e) {
  // get hex color
  let hex = e.target.getAttribute("data-hex");
  console.log(hex);

  // set hex color
  if (hex === 'multicolor') {
    changeFills(getAllRed, originalColors.red)
    changeFills(getAllOrange, originalColors.orange)
    changeFills(getAllYellow, originalColors.yellow)
    changeFills(getAllGreen, originalColors.green)
    changeFills(getAllBlack, originalColors.black)
  } else {
    changeFills(getAllRed, hex);
    changeFills(getAllOrange, hex);
    changeFills(getAllYellow, hex);
    changeFills(getAllGreen, hex);
    changeFills(getAllBlack, hex);
  }
}

// function to add hex
function changeFills(variable, hex) {
  for (var i = 0; i < variable.length; i++) {
    variable[i].style.fill = hex;
  }
}


// cross breakup
window.addEventListener('keydown', toggle)

function toggle(event) {
  console.log(event);

  // left key
  if (event.keyCode === 37) {
    pressLeftLogic();
  }

  //right key
  if (event.keyCode === 39) {
    pressRightLogic();
  }

  //up key
  if (event.keyCode === 38) {
    pressUpLogic();
  }

  // down key
  if (event.keyCode === 40) {
    pressDownLogic();
  }

  // space to return
  if (event.keyCode === 32) {
    pressReloadLogic();
  }

}

// eventlistener on the left arrow
leftArrow.addEventListener('click', pressLeftLogic)

// eventlistener on the right arrow
rightArrow.addEventListener('click', pressRightLogic)

// eventlistener on the up arrow
upArrow.addEventListener('click', pressUpLogic)

// eventlistener on the downarrow
downArrow.addEventListener('click', pressDownLogic)
// eventlistener on the reload button
reloadButton.addEventListener('click', pressReloadLogic)

// functionality of pressing left
function pressLeftLogic() {
  let pressed = Pixels.leftPressed--;
  getAllLeft.forEach((item) => {
    item.classList.add('animate');
    setValuesForRectLeftRight(item, pressed * 10);
  })
}

// functionality of pressing right
function pressRightLogic() {
  let pressed = Pixels.rightPressed++;
  getAllRight.forEach((item) => {
    item.classList.add('animate');
    setValuesForRectLeftRight(item, pressed * 10);
  })
}
// up logic
function pressUpLogic() {
  let pressed = Pixels.upPressed--;
  getAllUp.forEach((item) => {
    item.classList.add('animate');
    setValuesForRectUpDown(item, pressed);
  })
}
// reload press down logic
function pressDownLogic() {
  let pressed = Pixels.downPressed++;
  getAllDown.forEach((item) => {
    item.classList.add('animate');
    setValuesForRectUpDown(item, pressed);
  })
}

// reload function
function pressReloadLogic() {
  Pixels = {
    leftPressed: 0,
    rightPressed: 0,
    upPressed: 0,
    downPressed: 0,
  };
  getAllDown.forEach((item) => {
    setValuesForRectUpDown(item, 0);
    setValuesForRectLeftRight(item, 0);
  })
  getAllLeft.forEach((item) => {
    setValuesForRectUpDown(item, 0);
    setValuesForRectLeftRight(item, 0);
  })
  getAllRight.forEach((item) => {
    setValuesForRectUpDown(item, 0);
    setValuesForRectLeftRight(item, 0);
  })
  getAllUp.forEach((item) => {
    setValuesForRectUpDown(item, 0);
    setValuesForRectLeftRight(item, 0);
  })
}


// change x value
function setValuesForRectLeftRight(rectangle, translateX) {
  let transformString = `translateX(${translateX}px)`;
  console.log(transformString)
  console.log(rectangle);
  rectangle.style.transform = transformString;
}

// change y value
function setValuesForRectUpDown(rectangle, translateY) {
  let transformString = `translateY(${translateY}px)`;
  rectangle.style.transform = transformString;
}


var ea
