showSlidesac(2);

  function showSlidesac(n) {
    var ji=0;
    var slidesac3 = document.getElementsByClassName("myslidestory");
    var dots = document.getElementsByClassName("demo4");
    
    var dots2 = document.getElementsByClassName("underline-home");
    for (ji = 0; ji < slidesac3.length; ji++) {
  
        slidesac3[ji].style.visibility= "hidden";
    //   slidesac3[ji].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-stay-home", "");
      }
      for (i = 0; i < dots.length; i++) {
        dots2[i].style.visibility= "hidden";
      }
    slidesac3[n-1].style.visibility = "visible";
    dots[n-1].className += " active-stay-home";
    dots2[n-1].style.visibility = "visible";
  
    
  }