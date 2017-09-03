var times_clicked=0;
function changepic() {
  times_clicked+=1;
  if (times_clicked==1) {
    document.getElementById("image").src = "rai1.JPG";
  } else if (times_clicked==2) {
    document.getElementById("image").src = "rai2.JPG";
    document.getElementById("button").innerHTML = "BACK TO 1ST EXPOSE";
  } else if (times_clicked== 3) {
    document.getElementById("image").src = "rai.JPG";
    times_clicked = 0;
}}
