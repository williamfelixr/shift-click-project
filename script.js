var imgArray = ["media/bridge.jpg", "media/dog.jpg", "media/grass.jpg",
               "media/lake.jpg", "media/lichen.jpg", "media/mill.jpg"];
var x = 0;
var image = document.getElementById("slide");
var imageCounter = document.getElementById("image-counter");
imageCounter.innerText = (x + 1) + "/6"
    
document.addEventListener("keydown", function(event){
  if (event.key == "ArrowLeft") {
    previousImage();
  } else if (event.key =="ArrowRight") {
    nextImage();
  }

})



function nextImage() {
  if (x >= imgArray.length - 1) {
    x = 0;
  } else {
    x++
  } /* x increases by 1 each time function is called, returning 
  to zero after final index in imgArray */

  image.src = imgArray[x];
  console.log(image.src);
  imageCounter.innerText = (x + 1) + "/6"
}

function previousImage() {
  if (x <= 0){
    x = imgArray.length - 1;
  } else {
    x--
  } /* x decreases by 1 each time function is called, 
  returning to highest index of array after reaching zero */

  image.src = imgArray[x];
  console.log(image.src);
  imageCounter.innerText = (x + 1) + "/6"
} // x value determined above used to index array 

setInterval(nextImage, 4000);

function togglePS() {
  var ps = document.getElementById("personal-statement");
  var button = document.getElementById("ps-button");
  if (ps.style.display === "block") {
    ps.style.display = "none";
  } else {
    ps.style.display = "block";
  }
} // hides personal statement behind button in mobile view

window.addEventListener("resize", function() {
  if (window.innerWidth > 800){
    document.getElementById("personal-statement").style.display = "block";
  } else {
    document.getElementById("personal-statement").style.display = "none"
  }
}) // sets the default display to "block" on desktop and "none" on mobile





