var slide4Index = 1;
showSlides4(slide4Index);
//change();

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slide4Index += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slide4Index = n);
}

function showSlides4(n4) {
  var j;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot4");
  if (n4 > slides4.length) {slide4Index = 1}
  if (n4 < 1) {slide4Index = slides4.length}
  for (j = 0; j < slides4.length; j++) {
      slides4[j].style.display = "none";
  }
  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active4", "");
  }
  slides4[slide4Index-1].style.display = "block";
  dots[slide4Index-1].className += " active4";
 
}

//slide in catering autoplay
 document.getElementById("slide1").addEventListener("click", function() {
  clearInterval(slideInterval);
   slideInterval = setInterval(change,3000);
      
      });

var slideInterval = setInterval(change,3000);


    function change() {
       plusSlides4(1);
        
    }