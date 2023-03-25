var randomNumber1= Math.floor(Math.random()*6)+1;
var imagNumber1="dice"+randomNumber1+".png";
var imagesrc1="images/"+imagNumber1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imagNumber2="dice"+randomNumber2+".png";
var imagesrc2="images/"+imagNumber2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesrc2);

if(randomNumber1>randomNumber2)
{
    document.querySelector(".heading").innerHTML="🚩 Player1 Won !"
}
else if (randomNumber1<randomNumber2)
{
    document.querySelector(".heading").innerHTML="Player 2 Won 🚩 !"
}
else 
{
    document.querySelector(".heading").innerHTML="Drow !";
}