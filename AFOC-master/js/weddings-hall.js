var slide5Index = 1;
showSlides5(slide5Index);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slide5Index += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slide5Index = n);
}

function showSlides5(n5) {
  var j;
  var slides5 = document.getElementsByClassName("mySlides5");

  if (n5 > slides5.length) {slide5Index = 1}
  if (n5 < 1) {slide5Index = slides5.length}
  for (j = 0; j < slides5.length; j++) {
      slides5[j].style.display = "none";
  }
  
  slides5[slide5Index-1].style.display = "block";
  
}
document.getElementById("slide-hall").addEventListener("click", function() {
  clearInterval(slideIntervalhall);
   slideIntervalhall = setInterval(changehall,3000);
      
      });

var slideIntervalhall = setInterval(changehall,3000);


    function changehall() {
       plusSlides5(1);
        
    }