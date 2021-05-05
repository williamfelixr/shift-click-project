/*-------------IMAGE CAROUSEL-------------------*/

// define gallery as imgArray and index using value of x 
var imageArray = ["media/bridge.jpg", "media/dog.jpg", "media/grass.jpg", "media/lake.jpg", "media/lichen.jpg", "media/mill.jpg"];
var x = 0;                                                   // use this to index the array
var image = document.getElementById("slide");                // this is where the images show up
var imageCounter = document.getElementById("image-counter"); // this is where the image counter shows up
imageCounter.innerText = (x + 1) + "/6";                     // initialise number shown under gallery
var imageInterval = 4000                                     // set size of time interval for auto-update

var imageTimer = setInterval(nextImage, imageInterval);      // call nextImage automatically - value set above

/* increases x by 1 each time function is called, returning to zero after final index in imgArray */
function nextImage() {
  if (x >= imageArray.length - 1) {
    x = 0;
  } else {
    x++
  } 
  image.src = imageArray[x];                                 // update img html tag with image "x" from array
  console.log(image.src);                                    // for debugging
  imageCounter.innerText = (x + 1) + "/6"                    // update number shown under gallery
  clearInterval(imageTimer);                                 // restarts auto timer in case of manual scroll - improves user experience
  imageTimer = setInterval(nextImage, imageInterval);
}

/* decrease x by 1 each time function is called and return to highest index of array after reaching zero. */
function previousImage() {
  if (x <= 0){
    x = imageArray.length - 1;
  } else {
    x--
  } 
  image.src = imageArray[x];                                 // update img html tag with image "x" from array
  console.log(image.src);                                    // for testing/debugging
  imageCounter.innerText = (x + 1) + "/6"                    // update number shown under gallery
  clearInterval(imageTimer);                                 // restarts auto timer in case of manual scroll - improves user experience
  imageTimer = setInterval(nextImage, imageInterval);
}  



// add event listener to use arrow keys to move through image gallery
document.addEventListener("keydown", function(event){
  if (event.key == "ArrowLeft") {
    previousImage();
  } else if (event.key =="ArrowRight") {
    nextImage();
  }
})


/*-------------------CLOCK---------------------*/

/*
I'd like to make this clickable with: 
 - a choice of time zones
 - 12/24hr format options
*/

// get current time and insert into inner text of clock div. 
function getTime() {
  var current = new Date();
  var clockDiv = document.getElementById("clock");
  var hours = (current.getUTCHours() + 1).toString().padStart(2,0);
  var minutes = current.getUTCMinutes().toString().padStart(2,0);
  var seconds = current.getUTCSeconds().toString().padStart(2,0);
  if (hours == 24){
    clockDiv.innerText = ["00", minutes, seconds].join(":") + " BST"
  } else {
    clockDiv.innerText = [hours, minutes, seconds].join(":") + " BST"
  } 
} /* this could be encapsulated better to make it more versatile. Perhaps by returning a "clock" value, 
  and defining a second function to insert that into the DOM. Ideally would have element name as an argument
  of this second function but not yet figured out how to call a function with an argument with setInterval. 
  Working on it. */

setInterval(getTime, 1000); // update time every second. Would be nice if the clock "blinked" too.




/*---------------------RESIZE BEHAVIOUR----------------------*/

// show and hide personal statement (called by ps-button in document which is only visible in narrow viewport width)
function togglePS() {
  var ps = document.getElementById("personal-statement");
  var button = document.getElementById("ps-button");
  if (ps.style.display === "block") {
    ps.style.display = "none";
  } else {
    ps.style.display = "block";
  }
} 

// show personal statement by default in wide view and hide by default in narrow view
window.addEventListener("resize", function() {
  if (window.innerWidth > 800){
    document.getElementById("personal-statement").style.display = "block";
  } else {
    document.getElementById("personal-statement").style.display = "none";
  }
}) 