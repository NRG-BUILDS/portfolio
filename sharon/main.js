updateTimes = () => { 
    const date = new Date()
    const hour = date.getHours()
    const day = date.getDay()
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const greeting = document.getElementById("greeting");
    const status = document.getElementById("open_status");
    const closeTime = document.getElementById("close_time");
    console.log(day)
    if ( hour >= 1 && hour <= 11) { 
        greeting.innerHTML = "Good Morning"
    } else if (12 <= hour && hour <= 16) { 
        greeting.innerHTML = "Good Day"
    } else if ( 17 <= hour && hour <= 23 || hour == 0 ) {
        greeting.innerHTML = "Good Evening"
    } else{ console.log("oops")}
    
    for (let i = 0; i < daysArray.length; i++ ) { 
        if ( day === i && hour < 18) { 
            status.innerHTML = daysArray[i] + ", Currently Open";
            closeTime.innerHTML = "Till 6pm This Evening"
        } else if(day === i && hour > 18) { 
            status.innerHTML = daysArray[i] + ", Currently Closed";
            closeTime.innerHTML = "Till 6am Tomorrow"
        }
        if (day === 6 || day === 0) {
            status.innerHTML = daysArray[i] + ", Currently Closed"
            closeTime.innerHTML = "Till 6am Monday"
        }
    }
}
updateTimes()


window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();
//to play slide up and side animations on scroll
function reveal() {
  let slideR = document.querySelectorAll(".slide_r");
  let slideU = document.querySelectorAll(".slide_u");
  for (let i = 0; i < slideR.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideR[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      slideR[i].classList.add("active");
    } else {
      slideR[i].classList.remove("active");
    }
  }
  for (let i = 0; i < slideU.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = slideU[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
          slideU[i].classList.add("active");
      } else {
          slideU[i].classList.remove("active");
      }
  }
 }
