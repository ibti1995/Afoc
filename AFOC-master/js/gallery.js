var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active3", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active3";
 

  
}

document.getElementById("slide2").addEventListener("click", function() {
  clearInterval(slideInterval2);
   slideInterval2 = setInterval(changegalery,3000);
      
      });

var slideInterval2 = setInterval(changegalery ,3000);


    function changegalery() {
       plusSlides(1);
        
    }