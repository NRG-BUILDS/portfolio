setInterval(function() { 
    let nName = document.getElementById('nicknames');
    if (nName.innerHTML == "Emmax") { 
        nName.innerHTML = "Oju";
    } 
    else if (nName.innerHTML == "Oju") { 
        nName.innerHTML = "Ay"
    }
    else {
        nName.innerHTML = "NRG!!!"
        nName.style.color = "var(--purple)"
    }
}, 1500)
