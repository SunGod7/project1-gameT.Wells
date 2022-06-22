// canvas.setAttribute('width', '500');
  






// canvas.setAttribute('height', '200');

//const canvas = document.getElementById('easel')






const game = document.getElementById('canvas')
const movement = document.getElementById('movement')
const ansOne1 = document.getElementById('ansBtn1')
const ansTwo2 = document.getElementById('ansBtn2')
const ansThree3 = document.getElementById('ansBtn3')


const ctx = game.getContext('2d')


// game.setAttribute('width', getComputedStyle(game)['width'])
// game.setAttribute('height', getComputedStyle(game)['height'])
// console.log(game.width)
// console.log(game.height)

document.getElementById("ansBtn1").style.padding = "10px";
ansBtn1.style.backgroundColor = "red"; 

document.getElementById("ansBtn2").style.padding = "10px";
ansBtn2.style.backgroundColor = "lightblue";

document.getElementById("ansBtn3").style.padding = "10px";
ansBtn3.style.backgroundColor = "green";
// document.getElementById(
// 
// document.getElementById("ansBtn3").style.font-size = "30px";

document.getElementById("question-board").style.backgroundColor = "white";
document.getElementById("opperations").style.backgroundColor = "white";


let timeLeft = 7;
let timerInterval;
// const showProblemArray = [

// ]


function startGame(){
    
    
    
    
    let timeDisplay = document.getElementById("timeDisplay");
         timeDisplay.hidden = false
    
    timerInterval = setInterval(function() {
    timeLeft -= 1;
    timeDisplay.innerHTML = "Time left: " + timeLeft;
    if (timeLeft == 0) {
        clearInterval(timerInterval);
    }
    },1000)
}
