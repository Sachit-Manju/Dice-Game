// Created a random number for the dice

// setting the random no. to the dice on the LEFT

var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);




var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);


// setting the random no. to the dice on the RIGHT


var randomNumber2 = Math.random();
 randomNumber2 = randomNumber2*6;
 randomNumber2 = Math.floor(randomNumber2)+1;
 console.log(randomNumber2);

 var randomDiceSource1 = "images/"+"dice"+randomNumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src" , randomDiceSource1);



// Winner indicator

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins "
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins "
}
else{
    document.querySelector("h1").innerHTML="Its a draw "
}