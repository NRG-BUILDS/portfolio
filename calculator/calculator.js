//Switching between light and dark theme
function theme() {
    let body = document.body;
    let themebtn = document.getElementById('switch');
    
    body.classList.toggle('lightmode');
    if (themebtn.innerHTML == "dark_mode") {
        themebtn.innerHTML = "light_mode"
    } else {
        themebtn.innerHTML = "dark_mode"
    }
    
}    

//creates equation viewer
let text = "";
let equation = document.getElementById('text');
//create result viewer
let result = document.getElementById('result');
//gets result animation background
let lay = document.getElementById('overlay');

// Result Animations
function result_animation() { 
    lay.style.width = "100%";
    result.style.color = "white";
    equation.style.color = "white";
}
function reverse_animation() { 
    lay.style.width = "0%";
    result.style.color = "var(--inputcolor)";
    equation.style.color = "var(--inputcolor)";
}



/*Allows buttons to input number*/
function buttonAction(a) { 
    reverse_animation();
    text += a;
    equation.innerHTML = text;
}
//creates clear button
document.getElementById('clear').addEventListener('click', 
    function() { 
        reverse_animation();
        text = ""
        equation.innerHTML = text
        result.innerHTML = text
    })
    
function add() { 
    Number(text);
    text += "+"
    equation.innerHTML = text
}
function subtract() { 
    Number(text);
    text += "-"
    equation.innerHTML = text
}
function multiply() { 
    Number(text);
    text += "*"
    equation.innerHTML = text
}
function divide() {
    Number(text);
    text += "/"
    equation.innerHTML = text
}
//create equals to function
function equal() { 
    let answer = eval(text).toString()
    answer
    
    if (answer.length > 10) { 
        
        result.innerHTML = eval(text).toFixed(9);
    } else { 
        Number(answer)
        result.innerHTML = answer;
    }
    result_animation();
}

//create delete function
function del() { 
    reverse_animation();
    text = text.slice(0, -1)
    equation.innerHTML = text
}
//create percentage function
function percent() { 
    result.innerHTML = (eval(text)) / 100;
    result_animation()
}

