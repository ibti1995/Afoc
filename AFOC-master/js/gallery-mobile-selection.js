
 var dots = document.getElementsByClassName("demo3");
 function openCity(evt, cityName, n) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   for (i = 0; i < tabcontent.length; i++) {
     dots[i].className = dots[i].className.replace(" active6", "");
   }
   dots[n - 1].className += " active6";
   document.getElementById(cityName).style.display = "flex";

 }

 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();


var dots2 = document.getElementsByClassName("demo32");
function openCity2(evt, cityName, n) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.visibility = "hidden";
  }
  for (i = 0; i < tabcontent.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active6", "");
  }
  dots2[n - 1].className += " active6";
  document.getElementById(cityName).style.visibility = "visible";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();
