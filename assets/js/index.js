var randNum1 = Math.floor(Math.random() * 6) + 1;
var imageSrc= "assets/images/dice" + randNum1 + ".png";
document.querySelector("img#player1").setAttribute("src", imageSrc);

var randNum2 = Math.floor(Math.random() * 6) + 1;
imageSrc= "assets/images/dice" + randNum2 + ".png";
document.querySelector("img#player2").setAttribute("src", imageSrc);

if(randNum1 > randNum2){
  document.querySelector("h1").textContent  = "🚩 Player1 wins!";
}
else if(randNum2 > randNum1){
  document.querySelector("h1").textContent = "Player2 wins! 🚩";
}
else{
  document.querySelector("h1").textContent  = "🚩 It's a draw. 🚩";
}
