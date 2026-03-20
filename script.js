let questions = [
{
question: "Which language runs in the browser?",
answers: ["Java", "C", "JavaScript", "Python"],
correct: "JavaScript"
},

{
question: "What does CSS stand for?",
answers: [
"Central Style Sheets",
"Cascading Style Sheets",
"Computer Style Sheets",
"Creative Style System"
],
correct: "Cascading Style Sheets"
},

{
question: "Which company developed JavaScript?",


answers: ["Google","Netscape","Microsoft","Apple"],


correct: "Netscape"
},

{
question: "Which tag is used for JavaScript in HTML?",


answers: ["&lt; script &gt;" ,"&lt; js &gt","&lt; javascript &gt","&lt; code &gt;"],


correct: "&lt; script &gt;"
},

{
question: "Which symbol is used for comments in JavaScript?",
answers: ["//","#","&lt; !-- -- &gt;","**"],
correct: "//"
}
];

let current = 0;
let score = 0;
let timer;
let timeLeft = 10;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const feedback = document.getElementById("feedback");
const timerText = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const quizBox = document.getElementById("quiz-box");
const scoreBox = document.getElementById("score-box");
const finalScore = document.getElementById("final-score");
const thankBtn = document.getElementById("thank-btn");

function startQuiz(){
showQuestion();
}

function showQuestion(){

reset();

let q = questions[current];
question.innerHTML = q.question;

q.answers.forEach(a=>{

let btn = document.createElement("button");
btn.innerHTML = a;

btn.onclick = ()=>checkAnswer(a,btn);

answers.appendChild(btn);

});

startTimer();
updateProgress();
}

function startTimer(){

timeLeft = 10;

timerText.innerHTML = "Time: "+timeLeft;

timer = setInterval(()=>{

timeLeft--;
timerText.innerHTML = "Time: "+timeLeft;

if(timeLeft === 0){

clearInterval(timer);
feedback.innerHTML = "Time Up!";
nextBtn.style.display = "block";

}

},1000);

}

function checkAnswer(answer,btn){

clearInterval(timer);

let correct = questions[current].correct;

if(answer === correct){

btn.classList.add("correct");
feedback.innerHTML = "Correct!";
score++;

}else{

btn.classList.add("wrong");
feedback.innerHTML = "Wrong! Correct answer: "+correct;

}

Array.from(answers.children).forEach(button=>{
button.disabled=true;
});

nextBtn.style.display="block";
}

nextBtn.onclick = ()=>{

current++;

if(current < questions.length){

showQuestion();

}else{

showResult();

}

};

function reset(){

answers.innerHTML="";
feedback.innerHTML="";
nextBtn.style.display="none";

}

function updateProgress(){

let percent = ((current)/questions.length)*100;
progressBar.style.width = percent+"%";

}

function showResult(){

quizBox.style.display="none";
scoreBox.style.display="block";

finalScore.innerHTML = "Your Score: "+score+" / "+questions.length;

}

/* Thank You Button */

thankBtn.onclick = function(){

alert("Thank you for taking the quiz!");

window.location.href="about:blank";

}

startQuiz();
