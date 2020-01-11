// start the game


// to generate random number from 1 to 6 
var randomNumber1 = Math.floor(Math.random()*6) + 1
//alert(randomNumber1);

// to change pictures randomly

var randomizeImages1 = "images/dice" + randomNumber1 + ".png";

// change images for player 1
var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src", randomizeImages1);

// change images for player 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomizeImages2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomizeImages2);

if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML="Player 1 won ⛳";

}else if (randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML = "🚩 Player 2 won";
}
else{
	document.querySelector("h1").innerHTML = "Is a Draw 💖💝"
}
	

