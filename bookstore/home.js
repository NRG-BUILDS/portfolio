
function gotop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function show_modal() {
    document.getElementById('modal').style.height = "60%";
}
function close_modal() {
    document.getElementById('modal').style.height = "0%";
}
function create_user() {
    let name = document.getElementById('username').value;
    document.getElementById('name').innerHTML = `Hey ${name}!`;
    document.getElementById('modal').style.height = "0%";
}


//create constructor for books
function Book(title, author, price) { 
    this.name = title;
    this.writer = author;
    this.cost = price;
}
const book6 = new Book("Try Harder", "Emmanuel Omolaju", "$70.00");

document.getElementById('t6').innerHTML = book6.name;
document.getElementById('a6').innerHTML = book6.writer;
document.getElementById('p6').innerHTML = book6.cost
