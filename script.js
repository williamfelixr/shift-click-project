var imgArray = ["media/bridge.jpg", "media/dog.jpg", "media/grass.jpg", "media/lake.jpg", "media/lichen.jpg", "media/mill.jpg"];
      var x = 1;
      var image = document.getElementById("slide");
      
      function nextImage() {
        if (x >= imgArray.length - 1) {
          x = 0;
        } else {
          x++
        } /* x increases by 1 each time function is called, returning to zero after final index in imgArray */
        
        image.src = imgArray[x]
      }

      function previousImage() {
        if (x <= 0){
          x = imgArray.length - 1;
        } else {
          x--
        } // x decreases by 1 each time function is called, returning to highest index after reaching zero

        image.src = imgArray[x]
      }

    document.addEventListener("keydown", function(event){
      if (event.key == "ArrowLeft") {
        previousImage();
      } else if (event.key =="ArrowRight") {
        nextImage();
      }

    })

