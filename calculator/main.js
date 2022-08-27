"use strict";
//Day 1 Test Of If Statement
console.log('Hello World!');
function humanInput(question) {
    if (question == "yes") {
        return "Nice seeing you Human!";
    }
   return "Hmm. Try that again...Human?"
}

console.log(humanInput("yes"))

//Lets see if we can toggle:
/*function darkmode() {
    let body = document.body;
    body.classList.toggle('darkmode') 
}
*/
document.getElementById('equals').addEventListener('click', function() {
    let input = document.getElementById('value').value;
    let answer = calculation(input);
    document.getElementById('number').innerHTML = input;
    document.getElementById('answer').innerHTML = answer;
})
function calculation(x) {
    return x*x;
}
document.getElementById('add').addEventListener('click', function() {
    let a = document.getElementById('A').value;
    let b = document.getElementById('B').value;
    document.getElementById('result').innerHTML = Number(a) + Number(b)
})

document.getElementById('run').addEventListener('click', function() {
    let speed = Number(document.getElementById('speed').value);
    let time = Number(document.getElementById('time').value);
    let accl = Number(document.getElementById('accl').value);
    if (accl =="" |time == ""| speed=="") {
        document.getElementById('velocity').innerHTML= "guy, supply all variables na";
    } else {
    let velocity = calcV(speed, time, accl);
    
    document.getElementById('velocity').innerHTML =`${velocity}m/s<sup>2</sup>`;}
})
function calcV(u, a, t) {
    let v;
    v = u + ( a * t);
    return v;
}

document.getElementById('getDistance').addEventListener('click', function() {
    let speed = document.getElementById('speedS').value;
    let time = document.getElementById('timeS').value;
    let accl = document.getElementById('acclS').value;
    let answer = calcS(speed, time, accl);
    document.getElementById('distance').innerHTML = `${answer}m`;
    try {
        if (time == "" | speed == ""| accl == "") throw "State all variables";
    } 
    catch (err) { document.getElementById('distance').innerHTML = err
    }
})
function calcS(u, t, a) {
let S
let tt = t * t;
S = u * t + (0.5 * a * tt);
return S
}

document.getElementById('elect').addEventListener('click', function() {
let v = Number(document.getElementById('volt').value);
let I = Number(document.getElementById('current').value);
let r = Number(document.getElementById('resist').value);
let Av = I * r; 
let AI = v / r; 
let Ar = v / I;
if (v == "") {
document.getElementById('volt').value = Av;} 
else if (I == "") {
document.getElementById('current').value = AI;} 
else if (r == "") {
document.getElementById('resist').value = Ar;}
})
