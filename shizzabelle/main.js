window.addEventListener("scroll", reveal);
window.addEventListener("scroll", swoop);
// To check the scroll position on page load
reveal();
//to play slide up and side animations on scroll
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
 } 
 function swoop() {
  let swoops = document.querySelectorAll(".swoop");
  for (let i = 0; i < swoops.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = swoops[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      swoops[i].classList.add("active");
    } else {
      swoops[i].classList.remove("active");
    }
  }
 } 

const logo = document.querySelector('.bigText')

const logoFonts = ["'Pacifico', cursive", "'Lobster', cursive", "'Lobster Two', cursive", "'Satisfy', cursive"]
let i = 0
function switchFonts() { 
    if ( i < logoFonts.length - 1) { 
        i++;
    } else if (i >= logoFonts.length -1) { i = 0
    }
    logo.style.fontFamily = logoFonts[i]
}
setInterval(switchFonts, 500)
