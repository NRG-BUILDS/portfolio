const projectArray = []//houses all projects

function Projects( Name, PicSrc, Src) {
    projectArray.push(this)// auto add new project objects to Array
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
const project6 = new Projects( 
    "Online Music Streaming App",
    "music.jpg",
    "./music-player/")    

function showProjects() { 
    let text = ""
    for (i = projectArray.length - 1; i > -1; i--) { 
        text += `<div class="projectItem">
            <a href= ${projectArray[i].src}>
            <img src= ${projectArray[i].pic}>
            <h5 class="swoop">${projectArray[i].name}</h5 class="swoop"></a>
        </div>`
    }
    document.getElementById('projectContainer').innerHTML = text
} 
showProjects()



