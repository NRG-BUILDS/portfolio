const welcome = document.querySelector('.welcome')
const displayContainer = document.querySelector('.app_container')
const display = document.querySelector('.app')
const nextBtn = document.querySelector('.next')
const resultCard = document.querySelector('.result_card')
const questionArray = [] //houses question objects
const answerArray = []
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
let qu1 = new Question (
    "Question 1", 
    "Verify your name (plus get free point)",
    ["Seun", "Sharon", "Mubarak", "Kunle", "Favour", "Hi, I'm a group ghost👻"], 
    "All"
)
console.log(qu1.options)

let qu2 = new Question (
    "Question 2", 
    "Who Is Taller?",
    ["Favor", "Dronix", "Emmanuel"],
    "Dronix"
)
let qu3 = new Question (
    "Question 3", 
    "What Was Queen Elizabeth's Surname?",
    ["The Second😂", "II", "Windsor", "Buckingham"],
    "Windsor"
)
let qu4 = new Question (
    "Question 4", 
    "Which Came First?",
    ["The Chicken", "The Egg", "Charles Darwin"],
    "The Chicken"
)
let qu5 = new Question(
    "Question 5",
    "Who Was Recently Crowned \"Most Handsome\" In The Group??",
    ["Emmanuel (this is a trick question. I'm the answer. PICK ME IF YOU WANT TO LIVE!!!)", "Kunle", "Seun", "Favour", "Mubarak"],
    "Emmanuel (this is a trick question. I'm the answer. PICK ME IF YOU WANT TO LIVE!!!)"
)
let qu6 = new Question(
    "Question 6",
    "I'm Running Out Of Qs At This Point. What Do You Think Next Q Is About?",
    ["Math", "History", "Tech"],
    "History"
)
let qu7 = new Question(
    "Question 7",
    "What Was Used As Condoms Before Condoms?",
    ["Special latex flowers", "Animal intestines", "Clothes", "Prayers"],
    "Animal intestines"
)
let qu8 = new Question(
    "Question 8",
    "Want Me To Teach You JavaScript, you'd pay?",
    ["Yes", "No", "Hehe, you get a point either way...", "...Except you're Kunle😂"],
    "All"
)
let qu9 = new Question(
    "Question 9",
    "Who's Vns 'sound like a penis'?",
    ["Dah Boy", "Aidrop Boy", "Mr. sexismin iless", "Iniiii!!!!", "Imaginary glowups", "Sha-run"],
    "Imaginary glowups"
)
let qu10 = new Question(
    "Question 10",
    "This was fun making. Even though, it will take y'all 3 mins to complete, was it fun?",
    ["Yes!", "Meh", "I feel personally attacked because I don't understand jokes and now I'm angry"],
    "Yes!"
);

//next button calls save() and changeQuestion() function
nextBtn.addEventListener("click", function() {save()})
//nextBtn.addEventListener("click", function() {changeQuestion()})

//=========Counters
//score adds +1 at every correct answer
const score = (function() { 
    counter = 0;
    return function() { counter += 1; return counter}
})()
//start adds +1 in order to change question number
const start = (function() { 
    qu = -1;
    return function() { qu += 1; return qu}
})()

function changeQuestion() {
        welcome.style.display = "none"
    
        start()
        if (qu > questionArray.length - 1) {
            displayContainer.style.display = "none"
            resultCard.style.display = "block"
        }//removes quiz card when last question has been answered
        
        current = `<div class="active"><h2>${questionArray[qu].num}</h2> \
        <p>${questionArray[qu].quest}</p> \
        ${questionArray[qu].optionList()}</div>`;
        display.innerHTML = current
    };    

//changeQuestion()//declared to initialize first question.

function save() { 
    
    let chosenOption = document.querySelector('input[name="option"]:checked').value;//get value of chosen option. If no option is chosen, this function will automatically be disabled
    
    let ansLen = answerArray.length
    for (let i = 0; i < ansLen; i++) {
        if (chosenOption == answerArray[i]) {
        score();
        }//scores if chosen answer is part of answers in array
    }
    if (questionArray[qu].ans == "All") {
        score();
    }//scores if a question has All options as answers
    document.getElementById('result').innerHTML = counter
    changeQuestion();
    //console.log(counter)
    //console.log(chosenOption)
}







console.log(questionArray.length)
