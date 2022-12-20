  //first dice
var random1 = Math.floor(Math.random()*6)+1;
var img_source1 = "images/dice"+random1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",img_source1);

  //second dice
var random2 = Math.floor(Math.random()*6)+1;
var img_source2 = "images/dice"+random2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",img_source2);

// result
if(random1>random2)
  document.getElementsByTagName("h1")[0].innerHTML = "🥇Player1 Won";
else if(random1<random2)
  document.getElementsByTagName("h1")[0].innerHTML = "Player2 Won🥇";
else
  document.getElementsByTagName("h1")[0].innerHTML = "Draw Match😒";
