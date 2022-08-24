const nav = document.getElementById('navbar');
const push = document.getElementById('pushall')

function opennav() {
    if (nav.style.display == "none") {
    nav.style.display = "inline-block";
    push.style.marginLeft = "60px";
    document.getElementById('navbtn'). style.backgroundColor = "orange"
} else {
    nav.style.display = "none";
    push.style.marginLeft = "0";
    document.getElementById('navbtn'). style.backgroundColor = "white"
}
}


function closenav() {
    nav.style.display = "none"
    push.style.marginLeft= "0"
}
