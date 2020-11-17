var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = ["slides1", "slides2","slides3","slides4","slides5","slides6","mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11", "mySlides12", "mySlides13", "mySlides14", "mySlides15","mySlides16", "mySlides17", "mySlides18", "mySlides19", "mySlides20", "mySlides21", "mySlides22", "mySlides23", "mySlides24"]
showSlides6(1, 0);
showSlides6(1, 1);
showSlides6(1, 2);
showSlides6(1, 3);
showSlides6(1, 4);
showSlides6(1, 5);
showSlides6(1, 6);
showSlides6(1, 7);
showSlides6(1, 8);
showSlides6(1, 9);
showSlides6(1, 10);
showSlides6(1, 11);
showSlides6(1, 12);
showSlides6(1, 13);
showSlides6(1, 14);

//mob
showSlides6(1, 15);
showSlides6(1, 16);
showSlides6(1, 17);
//
showSlides6(1, 18);
showSlides6(1, 19);
showSlides6(1, 20);
//
showSlides6(1,21 );
showSlides6(1, 22);
showSlides6(1, 23);



function plusSlides6(n, no) {
    console.log(no , n );
  showSlides6(slideIndex[no] += n, no);
}
/*
function currentSlide(n) {
  showSlides(slideIndex = n);
}*/

function showSlides6(n, no) {
  var i=0;
  var x = document.getElementsByClassName(slideId[no]);
 // var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    console.log(x[i] ," length", x.length);
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
  //dots[slideIndex[no]-1].className += " active";
}

  // Thumbnail image controls
showSlidesac(1);
  function showSlidesac(n) {
    var ji;
    var slidesac = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");


    for (ji = 0; ji < slidesac.length; ji++) {
      slidesac[ji].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active6", "");
      }
    slidesac[n-1].style.display = "block";
    dots[n-1].className += " active6";



  }