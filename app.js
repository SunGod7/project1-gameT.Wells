

const game = document.getElementById('canvas')
const movement = document.getElementById('movement')
const ansOne = document.getElementById('ansBtn1')
const ansTwo = document.getElementById('ansBtn2')
const ansThree = document.getElementById('ansBtn3')
const ansFour = document.getElementById('ansBtn4')
const reSetBtn = document.getElementById('resetButton')
// this.image = document.getElementById('catOne')
// this.image = document.getElementById('catTwo')
// this.image = document.getElementById('dog')
// document.addEventListener('DOMContentLoaded', main)
// function main (){
const ctx = game.getContext('2d');

// draw(ctx) {
//   ctx.fillStyle = 'black'
//   ctx.fillRect(this.x, this.y, this.width, this.height)
//   ctx.drawImage = 'red'
// }
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])


ctx.width = game.width
ctx.height= game.height

ctx.fillStyle = 'black'
ctx.fillRect(10, 10, 80, 80)
ctx.strokeRect = 'red'
ctx.lineWidth = 5

ctx.fillStyle = 'black'
ctx.fillRect(450, 20, 80, 80)
ctx.strokeRect = 'red'
ctx.lineWidth = 5

ctx.fillStyle = 'purple'
ctx.fillRect(250, 50, 30, 30)
ctx.strokeRect = 'red'
ctx.lineWidth = 5

// ctx.beginPath()
// ctx.arc(300, 300, 30, 0, Math.PI = 2, false);
// ctx.strokeStyle = 'black'
// ctx.stroke()
console.log(game)


document.getElementById("ansBtn1").style.padding = "15px";
ansBtn1.style.backgroundColor = "red"; 

document.getElementById("ansBtn2").style.padding = "15px";
ansBtn2.style.backgroundColor = "lightblue";

document.getElementById("ansBtn3").style.padding = "15px";
ansBtn3.style.backgroundColor = "green";

document.getElementById("ansBtn4").style.padding = "15px";
ansBtn4.style.backgroundColor = "pink";

document.getElementById("gameWon").style.backgroundColor = "white";
document.getElementById("opperations").style.backgroundColor = "white";
document.getElementById("gameOver").style.backgroundColor = "white";
//global variables
let timeLeft = 25;
let timerInterval;
let correctAnswer = 0;
let score = 0;
let gameWon = 35;
let gameOver = score < 35;
let gameOn = false;

function startGame(){
  
  
document.getElementById("startBtn").disabled = true;
   
  nextQuestion()
    //sets timer
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.hidden = false
    
    timerInterval = setInterval(function() {
    timeLeft -= 1;
    timeDisplay.innerHTML = "Time left: " + timeLeft;
    
    
    
    // stops timer
    if (timeLeft == 0 || score == gameWon) {
        clearInterval(timerInterval);
        

     } 
  
   
  
   
      if (timeLeft == 0) { 
          let YouLose = document.getElementById('gameOver').textContent = 'You lose!!!!'
          console.log(YouLose)
    }
    
  },1000)
}

//creates random #'s for questions 
function nextQuestion() {
  let opperationsDiv = document.getElementById("opperations");
  let numOne = Math.floor(Math.random() * 12);
  let numTwo = Math.floor(Math.random() * 12);
  correctAnswer = numOne * numTwo;
  opperationsDiv.innerHTML = numOne + "*" + numTwo;

  
  let wrongAnswer1 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer2 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer3 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer4 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  
  document.getElementById("ansBtn1").innerHTML = wrongAnswer1
  document.getElementById("ansBtn2").innerHTML = wrongAnswer2
  document.getElementById("ansBtn3").innerHTML = wrongAnswer3
  document.getElementById("ansBtn4").innerHTML = wrongAnswer4
  
  let correctAnswerIndex = Math.floor(Math.random()*4)+1;
  let correctAnswerID = "ansBtn" + correctAnswerIndex;
  document.getElementById(correctAnswerID).innerHTML = correctAnswer;

}
//make right answer appear on button
function checkAnswer(btnIndex) {
     
     let answer = document.getElementById("ansBtn" + btnIndex).innerHTML;
     if (answer == correctAnswer) score += 5;
     
     document.getElementById("scoreBrd").innerHTML = "current score: " + score;
     nextQuestion()
     
     if (score == gameWon) {
      
      console.log('gameWon')
      document.getElementById('gameWon').textContent = 'Your Free!!!!'
      
     } 
}
  

const reStart = () => {
   
    startBtn.disabled = false;
    clearInterval(timerInterval);
    timeLeft = 26;
    //startGame()
    gameOn = true;
    score = 0;
    document.getElementById("scoreBrd").innerText = ''
    document.getElementById('gameWon').innerText = ''
    document.getElementById('gameOver').innerText = ''
    document.getElementById("ansBtn1").innerText = ''
    document.getElementById("ansBtn2").innerText = ''
    document.getElementById("ansBtn3").innerText = ''
    document.getElementById("ansBtn4").innerText = ''
    document.getElementById("opperations").innerText = ''
    document.getElementById("timeDisplay").innerText = ''
}
