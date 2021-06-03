//random image 1
var randomNumber1;

randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice" + randomNumber1 + ".png"; //dice1.png- dice6.png
var Source1 = "images/" + randomDiceImage;  //src attribute

document.querySelectorAll("img")[0].setAttribute("src", Source1);

//random image 2
var randomNumber2;
randomNumber2 = Math.floor(Math.random()*6)+1;
Source2= "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", Source2);


//decision of winner
if(randomNumber1> randomNumber2) {
   result= ("🚩 Player 1 wins");

}

else if(randomNumber2 > randomNumber1) {
  result= ("Player 2 wins🚩");
}

else {
  result=("Draw!");
}

document.querySelector("h1").innerHTML= result;