var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceNumber1 = "./images/dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceNumber1);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceNumber2 = "./images/dice" + randomnumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceNumber2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player1 is Winner.";
} else if (randomnumber1 === randomnumber2) {
  document.querySelector("h1").innerHTML = "Its a tie.";
} else {
  document.querySelector("h1").innerHTML = "Player2 is Winner";
}
