var price = document.getElementById('price');
var pastry = document.getElementById('pastry');
//for cake
function c12() {
  price.innerHTML="₦4000.00";
  pastry.innerHTML="12inch Vanilla Flavoured Cake"
}
function c20() {
  price.innerHTML="₦5200.00";
  pastry.innerHTML="20inch Vanilla Flavoured Cake"
}
function c15() {
  price.innerHTML="₦4599.99";
  pastry.innerHTML="15inch Vanilla Flavoured Cake";
}
//for bread
function b250() {
  price.innerHTML="₦400.00";
  pastry.innerHTML="Family Sized Butter Filled Coconut Bread";
}
function b1000() {
  price.innerHTML="₦1350.00";
  pastry.innerHTML="Super-sized Butter Filled Coconut Bread";
}
function b100() {
  price.innerHTML="₦250.00";
  pastry.innerHTML="Smallie Butter Filled Coconut Bread";
}
function b600() {
  price.innerHTML="₦999.99";
  pastry.innerHTML="Family-deluxe Butter Filled Coconut Bread";
}
//for cupcakes
function cc5() {
  price.innerHTML="₦800.00";
  pastry.innerHTML="'A Cupcake A Day...' Pack Of Cupcakes";
}
function cc10() {
  price.innerHTML="₦1500.00";
  pastry.innerHTML="'10 Is A Lucky Number' Pack Of Cupcakes";
}
function cc20() {
  price.innerHTML="₦2999.99";
  pastry.innerHTML="'A Bash Of Colors' Pack Of Cupcakes";
}
function cc50() {
  price.innerHTML="₦7250.00";
  pastry.innerHTML="'Cupcakes Everywhere!' Pack Of Cupcakes";
}
function cc100() {
  price.innerHTML="₦13499.99";
  pastry.innerHTML="'Where The Party At?' Pack Of Cupcakes";
}
//for Donuts
function do5() {
  price.innerHTML="₦800.00";
  pastry.innerHTML="'Donut Suprise' Pack Of Donuts";
}
function do10() {
  price.innerHTML="₦1500.99";
  pastry.innerHTML="'A Ten-Ring Legend' Pack Of Donuts";
}
function do20() {
  price.innerHTML="₦2999.99";
  pastry.innerHTML="'Circles Of Friends' Pack Of Donuts";
}
function do50() {
  price.innerHTML="₦7250.00";
  pastry.innerHTML="'Donut Spin Wheels' Pack Of Donuts";
}
function do100() {
  price.innerHTML="₦13499.99";
  pastry.innerHTML="'Circles Of Life' Pack Of Donuts";
}
//for chin-chin
function chn(a) {
    var cash = (a * 2) - .01 ;
    price.innerHTML = `₦${cash}`;
    switch (cash) {
        case 250:
            pastry.innerHTML ="'Pocket Pack' Chin-chin"
            break;
        case 600:
            pastry.innerHTML ="'E never finish' Chin-chin"
            break;
        case 1000:
            pastry.innerHTML ="'Super Jombo Jar' Chin-chin"
            break;
            return cash;
    }
}
console.log(chn(250))
