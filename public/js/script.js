// var navbar = document.getElementById("navbar-sec")
// fetch('./pages/navbar.html')
//     .then(res => res.text())
//     .then(data => {
//         navbar.innerHTML = data;
//     })

// var wwd = document.getElementById("wwd")
// fetch('wwd.html')
//     .then(res => res.text())
//     .then(data => {
//         wwd.innerHTML = data;
//     })

// var anime = document.getElementById("fake")
// fetch("animebg.html")
//     .then(res => res.text())
//     .then(data => {
//         anime.innerHTML = data;
//     })

// var events = document.getElementById("evnt")
// fetch('events.html')
//     .then(res => res.text())
//     .then(data => {
//         events.innerHTML = data;
//     })

var fulldetailbox = document.getElementById("full-details-box");
var displaydetail = fulldetailbox.getElementsByTagName("div")[0];
function closefulldetail() {
    fulldetailbox.style.display = "none";
}
function returniddetail(id) {
    var myDive = document.getElementById(id);
    var subdiv = myDive.getElementsByTagName("div")[0];
    var ssubdiv = subdiv.getElementsByTagName("div")[0];
    var html = ssubdiv.innerHTML;
    displaydetail.innerHTML = html;
    fulldetailbox.style.display = "flex";
}

// var gallery1 = document.getElementById("gallery")
// fetch('gallery.html')
//     .then(res => res.text())
//     .then(data => {
//         gallery1.innerHTML = data;
//     })

var fullimgbox = document.getElementById("full-img-box");
var fullimg = document.getElementById("full-img");
function returnid(id) {
    var myDiv = document.getElementById(id);
    var myImg = myDiv.getElementsByTagName("img")[0];
    var mySrc = myImg.src;
    fullimgbox.style.display = "flex";
    fullimg.src = mySrc;
}
function closefullimg() {
    fullimgbox.style.display = "none";
}

function returnidevent(pic) {
    fullimgbox.style.display = "flex";
    fullimg.src = pic;
}