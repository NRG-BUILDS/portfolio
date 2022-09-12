function Projects( Name, PicSrc, Src) { 
    this.name = Name;
    this.pic = PicSrc;
    this.src = Src;
}

const project1 = new Projects(
    "Dammy's Cakes World",
    "cakes.jpg",
    "./dammycakes/")
const project2 = new Projects(
    "Furniture Site (Mobile Only)",
    "furniture.jpg",
    "./furniture/")
const project3 = new Projects(
    "Bookstore App (Mobile Only)",
    "bookstore.jpg",
    "./bookstore/bookstore.html")
const project4 = new Projects(
    "Hotel Landing Page (Mobile and PC)",
    "hotel.jpg",
    "./hotel/")
const project5 = new Projects(
    "A Bunch Of JavaScript Calculators",
    "calculator.jpg",
    "./calculator/")    
    
    
const projectArray = [project1, project2, project3, project4, project5];

let text = ""
for (i in projectArray) { 
    text += `<div class="projectItem">
            <a href= ${projectArray[i].src}>
            <img src= ${projectArray[i].pic}>
            <h5 class="swoop">${projectArray[i].name}</h5 class="swoop"></a>
        </div>`
}
document.getElementById('projectContainer').innerHTML = text





