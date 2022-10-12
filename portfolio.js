window.addEventListener("scroll", reveal);
window.addEventListener("scroll", swoop);
// To check the scroll position on page load
reveal();

//Get Nav menu and button
let nav = document.getElementById('nav');
let navBtn = document.getElementById('navbtn');

//Show and close nav menu
function showNav() { 
        nav.style.height = "100%";
}
function closeNav() { 
        nav.style.height = "0%";
}
//Create message for "CV" button
document.getElementById('cvbtn').addEventListener("click", function() {
    document.getElementById('cv').innerHTML = "Still Working On That..."
})

//Switching between light and dark theme
function theme() {
    let body = document.body;
    let pic = document.getElementById('profilePic');
    let themebtn = document.getElementById('switch')
    
    body.classList.toggle('lightmode');
    if (pic.src.match('./profile_dark.jpg')) {
        pic.src = "./profile_light.jpg";
        themebtn.innerHTML = "light_mode"
        
    } else {
        pic.src = "./profile_dark.jpg";
        themebtn.innerHTML = "dark_mode"
    }
    
}    

//Creating a Countdown Timer

// Set the date we're counting down to
var countDownDate = new Date("May 12, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("codeDays").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



function reveal() {
  var reveals = document.querySelectorAll(".panel");
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
  var reveals = document.querySelectorAll('.projectItem');
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
  let swoops = document.querySelectorAll(".swoop");
  for (let i = 0; i < swoops.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = swoops[i].getBoundingClientRect().top;
    let elementVisible = 30;
    if (elementTop < windowHeight - elementVisible) {
      swoops[i].classList.add("active");
    } else {
      swoops[i].classList.remove("active");
    }
  }
 } 

