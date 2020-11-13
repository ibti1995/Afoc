window.addEventListener("resize" , function(event){ resizestory()

}



);
resizestory()
function resizestory(){ var clientHeight = document.getElementById('myDiv').offsetHeight;
 console.log(clientHeight) ;
document.getElementById('sd').style.height =(clientHeight+200).toString()+"px";


}


var slideIndexRoom = 1;
showSlidesRoom(slideIndexRoom);


// Next/previous controls
function plusSlidesRoom(n) {
  showSlidesRoom(slideIndexRoom += n);
}

// Thumbnail image controls
function currentSlideRoom(n) {
  showSlidesRoom(slideIndexRoom = n);
}

function showSlidesRoom(n) {
  var i;
  var slides = document.getElementsByClassName("slide-rooms");
 
  if (n > slides.length) {slideIndexRoom = 1}
  if (n < 1) {slideIndexRoom = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexRoom-1].style.display = "block";

 

  
}

document.getElementById("slideRoom").addEventListener("click", function() {
  clearInterval(slideIntervalRoom);
   slideIntervalRoom = setInterval(changeRoom,3000);
      
      });

var slideIntervalRoom = setInterval(changeRoom ,3000);


    function changeRoom() {
       plusSlidesRoom(1);
        
    }


    //*** suites */

    var slideIndexsuite = 1;
showSlidessuite(slideIndexsuite);


// Next/previous controls
function plusSlidessuite(n) {
  showSlidessuite(slideIndexsuite += n);
}

// Thumbnail image controls
function currentSlidesuite(n) {
  showSlidessuite(slideIndexsuite = n);
}

function showSlidessuite(n) {
  var i;
  var slides = document.getElementsByClassName("slide-suites");
 
  if (n > slides.length) {slideIndexsuite = 1}
  if (n < 1) {slideIndexsuite = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexsuite-1].style.display = "block";

 

  
}

document.getElementById("slidesuite").addEventListener("click", function() {
  clearInterval(slideIntervalsuite);
   slideIntervalsuite = setInterval(changesuite,3000);
      
      });

var slideIntervalsuite = setInterval(changesuite ,3000);


    function changesuite() {
       plusSlidessuite(1);
        
    }

    // ************* villas *****************
    var slideIndexvilla = 1;
showSlidesvilla(slideIndexvilla);


// Next/previous controls
function plusSlidesvilla(n) {
  showSlidesvilla(slideIndexvilla += n);
}

// Thumbnail image controls
function currentSlidevilla(n) {
  showSlidesvilla(slideIndexvilla = n);
}

function showSlidesvilla(n) {
  var i;
  var slides = document.getElementsByClassName("slide-villas");
 
  if (n > slides.length) {slideIndexvilla = 1}
  if (n < 1) {slideIndexvilla = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexvilla-1].style.display = "block";

 

  
}

document.getElementById("slidevilla").addEventListener("click", function() {
  clearInterval(slideIntervalvilla);
   slideIntervalvilla = setInterval(changevilla,3000);
      
      });

var slideIntervalvilla = setInterval(changevilla ,3000);


    function changevilla() {
       plusSlidesvilla(1);
        
    }