//open navigation menu
const nav = document.querySelector('.nav')
function toggleModal() { 
    let modal = document.getElementById('loginModal')
    modal.style.padding = "0 0";
    modal.style.height = "0%";
}
function createUser() { 
    username = document.getElementById('username').value;
    toggleModal();
}
//for highlight slider
const slideImage = document.querySelector('.highlight')
let sliderIndex = 1;
//next and previous functions
function moveSlide(a) { 
    let c = sliderIndex + (a);
    sliderIndex = c
    if (sliderIndex > 3) { 
        sliderIndex = 1
    } else if ( sliderIndex < 1) { 
        sliderIndex = 3
    }
    slideImage.style.backgroundImage = `url('slide${sliderIndex}.jpg')`;
}
//auto change slide
function changeSlide() { 
    sliderIndex++;
    if (sliderIndex > 3) { 
        sliderIndex = 1
    }
    slideImage.style.backgroundImage = `url('slide${sliderIndex}.jpg')`
}
setInterval(changeSlide, 6000)


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
