// click color
var el = document.getElementsByClassName("color");
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

// click event on all the buttons
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  console.log(hex);

  // set the hex color
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

// function to add the hex.
function changeFills(variable, hex) {
  for (var i = 0; i < variable.length; i++) {
    variable[i].style.fill = hex;
  }
}
