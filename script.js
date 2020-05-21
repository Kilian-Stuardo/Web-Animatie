
// var animation = document.querySelector('circle');
// console.log(animation);
//
// animation.addEventListener('click', toggle);
//
// function toggle(){
//   animation.classList.toggle('click');
// }



// //keyboard cross breakup
// var cross = document.querySelector('.red');
//
// window.addEventListener('keydown', toggle)
//
// function toggle(event) {
//   if (event.keycode === 40) {
//     cross.classList.add('down');
//
//   }
//   if(event.keycode === 38){
//     cross.classList.remove('down');
//   }
// }


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
    let pressed = Pixels.leftPressed--;
    getAllLeft.forEach((item) => {
      item.classList.add('animate');
      setValuesForRectLeftRight(item, pressed * 10);
    })
  }

  //right key
  if (event.keyCode === 39) {
    let pressed = Pixels.rightPressed++;
    getAllRight.forEach((item) => {
      item.classList.add('animate');
      setValuesForRectLeftRight(item, pressed * 10);
    })
  }

  //up key
  if (event.keyCode === 38) {
    let pressed = Pixels.upPressed--;
    getAllUp.forEach((item) => {
      item.classList.add('animate');
      setValuesForRectUpDown(item, pressed);
    })
  }

  // down key
  if (event.keyCode === 40) {
    let pressed = Pixels.downPressed++;
    getAllDown.forEach((item) => {
      item.classList.add('animate');
      setValuesForRectUpDown(item, pressed);
    })
  }

  // space to return
  if (event.keyCode === 32) {
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
