
document.getElementById("rooms-mob").addEventListener("click", displayRooms);
var x = document.getElementById("rooms");
var y = document.getElementById("dining");
var z = document.getElementById("act");
var t = document.getElementById("Evt");
var w = document.getElementById("experience");
function displayRooms() {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
    t.style.display = "none";
    w.style.display = "none";
}
document.getElementById("dining-mob").addEventListener("click", displayDining);
document.getElementById("activities-mob").addEventListener("click", displayAct);
document.getElementById("events-mob").addEventListener("click", displayEvent);
document.getElementById("experience-mob").addEventListener("click", displayExp);
function displayDining() {
    y.style.display = "flex";
    z.style.display = "none";
    t.style.display = "none";
    x.style.display = "none";
    w.style.display = "none";

}
function displayAct() {
    w.style.display = "none";
    t.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
}
function displayExp() {
    z.style.display = "none";
    t.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    w.style.display = "flex";
}
function displayEvent() {
    z.style.display = "none";
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    t.style.display = "flex";
}