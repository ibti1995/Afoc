var x = document.getElementById("rooms");
var y = document.getElementById("dining");
var z = document.getElementById("act");
var t = document.getElementById("Evt");
var w = document.getElementById("experience");

var header = document.getElementById("offers-sec-menu");
var btns = header.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName(" activ");
        current[0].className = current[0].className.replace("activ","");
        this.className += " activ";
    });
}

function showOfferRooms() {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
    t.style.display = "none";
    w.style.display = "none";


}
function showOfferDining() {
    y.style.display = "flex";
    z.style.display = "none";
    t.style.display = "none";
    x.style.display = "none";
    w.style.display = "none";

}
function showOfferAct() {
    w.style.display = "none";
    t.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
}
function showOfferExp() {
    z.style.display = "none";
    t.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "flex";
}
function showOfferEvt() {
    z.style.display = "none";
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    t.style.display = "flex";
}