var times_clicked=0;
var button= document.getElementById("button");

function changepic() {
  times_clicked+=1;
  if (times_clicked==1) {
    document.getElementById("image").src = "rai1.JPG";
    console.log(button);
  } else if (times_clicked==2) {
    document.getElementById("image").src = "rai2.jpg";
    document.getElementById("button").innerHTML = "BACK TO 1ST EXPOSE";
    console.log(button);
  } else if (times_clicked== 3) {
    document.getElementById("image").src = "rai.JPG";
    times_clicked = 0;
    document.getElementById("button").innerHTML = "NEXT EXPOSEEEE";
    console.log(button);
}}
