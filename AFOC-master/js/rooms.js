var slideIndex = 1;
showSlidesA(slideIndex);

// Next/previous controls
function plusSlidesA(n) {
  showSlidesA(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesA");


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeA";
 

  
}