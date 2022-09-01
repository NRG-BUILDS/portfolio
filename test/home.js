//Get Nav menu and button
const nav = document.getElementById('nav');
const navBtn = document.getElementById('navbtn');

//Show and close nav menu
function showNav() { 
        nav.style.height = "100%";
}
function closeNav() { 
        nav.style.height = "0%";
}




function showServices() { 
    let serv = document.getElementById('service');
    serv.style.height = "100%";
}






window.addEventListener("scroll", reveal);
window.addEventListener("scroll", swoop);
// To check the scroll position on page load
reveal();

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
 } 
 function swoop() {
  var swoops = document.querySelectorAll(".swoop");
  for (var i = 0; i < swoops.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = swoops[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      swoops[i].classList.add("active");
    } else {
      swoops[i].classList.remove("active");
    }
  }
 } 
