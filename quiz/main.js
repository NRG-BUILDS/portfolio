const welcome = document.querySelector('.welcome')
const user = document.querySelector('#user')
const startBtn = document.querySelector('.start')
const displayContainer = document.querySelector('.app_container')
const display = document.querySelector('.app')
const nextBtn = document.querySelector('.next')
const resultCard = document.querySelector('.result_card')
const questionArray = [] //houses question objects
const answerArray = [] //houses answers which will be listed out at quiz end
//create question object constructor
function Question(qNumber, question, optionBox, answer) { 
    questionArray.push(this); //automatically adds questions to questionArray
    this.num = qNumber
    this.quest = question
    this.options = optionBox //options are stored in arrays
    this.ans = answer
    answerArray.push(this.ans);
    
    //this method converts the array to radio buttons in html
    this.optionList = function() { 
        let text = "<div class='ans'>";
        let Len = this.options.length
        for (let i = 0; i < Len; i++) {
            text += `<div class="options"><label><input type="radio" name="option" value="${this.options[i]}">` + this.options[i] + "</input></label></div>" + "<br>";
        }
        text += "</div>";
        return text
    }
}



//create question objects
const qu1 = new Question (
    "Question 1", 
    "Which of the following is a markup language?",
    ["HTML", "CSS", "JAVASCRIPT", "French"], 
    "HTML"
)
//console.log(qu1.options)

const qu2 = new Question (
    "Question 2", 
    "Who Is Taller At Noon?",
    ["A Man", "His Thirst", "His Shadow"],
    "His Thirst"
)
const qu3 = new Question (
    "Question 3", 
    "What Was Queen Elizabeth's Surname?",
    ["The Second😂", "II", "Windsor", "Buckingham"],
    "Windsor"
)
const qu4 = new Question (
    "Question 4", 
    "According to evolution, Which Came First?",
    ["The Chicken", "The Egg", "Charles Darwin"],
    "The Egg"
)
const qu5 = new Question(
    "Question 5",
    "Who Is The Most Handsome Dev You Know?",
    ["NRG (this is a trick question. I'm the answer. PICK ME IF YOU WANT TO LIVE!!!)", "Yourself", "Your Mentor"],
    "NRG (this is a trick question. I'm the answer. PICK ME IF YOU WANT TO LIVE!!!)"
)
const qu6 = new Question(
    "Question 6",
    "I'm Running Out Of Qs At This Point. What Do You Think Next Q Is About?",
    ["Math", "History", "Tech"],
    "History"
)
const qu7 = new Question(
    "Question 7",
    "What Did You Have For Breakfast (this is a history question)",
    ["Bread", "Noodles", "Fasting", "Prayers", "Rice", "Motivational Speech", "Hehe..don't worry, all answers are correct"],
    "All"
)
const qu8 = new Question(
    "Question 8 (Since Morning)",
    "Solve x<sup>2</sup> - 12 = -12",
    ["12", "24", "0", "End ASUU Strike🥲"],
    "0"
)
const qu9 = new Question(
    "Question 9",
    "Whic Superhero Is Likely To Be A Good WEB Developer?",
    ["Batman", "Iron Man", "Thor", "Spider Man", "Cyborg", "Wonder Woman"],
    "Spider Man"
)
const qu10 = new Question(
    "Question 10",
    "This was fun making. Even though, it will take y'all 2 mins to complete, was it fun?",
    ["Yes!", "No", "Either ways, you get another free point😘"],
    "All"
);

//next button calls save() and changeQuestion() function
nextBtn.addEventListener("click", function() {save()})

//
startBtn.addEventListener("click", function() {changeQuestion()})
startBtn.addEventListener("click", function() {
    username = user.value
})

//=========Counters
//score adds +1 at every correct answer
const score = (function() { 
    counter = 0;
    return function() { counter += 1; return counter}
})()
//start adds +1 in order to change question number
// "qu" is a variable that will be used as a "global index". qu increases per changeWuestion()
const start = (function() { 
    qu = -1;
    return function() { qu += 1; return qu}
})()

function changeQuestion() {
        welcome.style.display = "none"
    
        start()
        if (qu > questionArray.length - 1) {
            getResults()
        }//Goes to results page when last question has been answered
        
        current = `<div class="active"><h2>${questionArray[qu].num}</h2> \
        <p>${questionArray[qu].quest}</p> \
        ${questionArray[qu].optionList()}</div>`;
        display.innerHTML = current
    }; //this function is called by the Start Quiz button to initialize first question.

function save() { 
    
    let chosenOption = document.querySelector('input[name="option"]:checked').value;//get value of chosen option. If no option is chosen, this function will automatically be disabled
    
    let ansLen = answerArray.length
   
    if (chosenOption == questionArray[qu].ans) {
        score();
    }//scores if chosen answer matches object answer
    
    if (questionArray[qu].ans == "All") {
        score();
    }//scores if a question has All options as answers
    changeQuestion();
    console.log(counter)
    //console.log(chosenOption)
}
function getResults() { 
    displayContainer.style.display = "none"
    resultCard.style.display = "block"
    
    resultCard.innerHTML = `<p>Nice Work ${username}</p>
        <h1>${counter}/${questionArray.length}</h1>
        <p>As for answers...</p>
        ${showAnswers()}
        <a href="/"><button>Retry</button></a>`
}

function showAnswers() {
    let text = "<ol>"
    for (i = 0; i < answerArray.length; i++ ) {
        text += "<li>" + answerArray[i] + "</li>"
    }
    text += "</ol>"
    return text
}
