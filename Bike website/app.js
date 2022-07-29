let redColor = document.getElementById("red");
let blueColor = document.getElementById("blue");
let blackColor = document.getElementById("black");
let bikeimg = document.getElementById("bike");

redColor.onclick = function(){
    bikeimg.style.backgroundImage ="url(images/BMW1.png)";
}
blueColor.onclick = function(){
    bikeimg.style.backgroundImage ="url(images/BMW2.png)";
}
blackColor.onclick = function(){
    bikeimg.style.backgroundImage ="url(images/BMW3.png)";
}