var x = document.getElementById("rooms");
var y = document.getElementById("suites");
var z = document.getElementById("villas");

var header = document.getElementById("multi-rooms-menu");
var btns = header.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("act");
  current[0].className = current[0].className.replace(" act", "");
  this.className += " act";
  });
}

function showRooms() {

        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "flex";

  }
  function showSuites() {


        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "flex";
  }
  function showVillas() {

        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "flex";
  }
