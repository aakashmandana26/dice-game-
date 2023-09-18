
var num1= Math.floor(Math.random() * 6)+1;

var randomSrc= "images/dice" + num1 + ".png";

document.querySelector(".img1").setAttribute("src", randomSrc)


var num2= Math.floor(Math.random() * 6)+1;

var randomSrc2 = "images/dice" + num2 + ".png";

document.querySelector(".img2").setAttribute("src", randomSrc2)

function result(x,y){
    if(num1>num2){
        return "Player 1 wins!"
    }
    else if(num1<num2){
        return "Player 2 wins!"
    }
    else{
        return "Draw"
    }
}
document.querySelector("h1").innerText=result(num1,num2)
    





