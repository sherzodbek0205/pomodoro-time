const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short");
const long = document.querySelector(".long");
const main = document.querySelector(".main");
const board = document.querySelector(".board");
const start = document.querySelector(".start");
short.onclick = () => {
main.classList = "next";
board.classList = "board one"
countdownTime = 3;
}
pomodoro.onclick = () => {
  main.classList = "";
  board.classList = "board";
}
long.onclick = () => {
  main.classList = "next2";
  board.classList = "board two";
}
 let countdownTime = 300;


 let timerElement = document.getElementById("timer");
start.onclick = () => {
 start.innerText = "Pause";


 function updateTimer() {
   let minutes = Math.floor(countdownTime / 60);
   let seconds = countdownTime % 60;

   let formattedTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");


   timerElement.textContent = formattedTime;


   countdownTime--;


   if (countdownTime < 0) {
     clearInterval(timerInterval);
     timerElement.style.fontSize = "85px"
     timerElement.textContent = "Time's Up";

   }
 }

 let timerInterval = setInterval(updateTimer, 1000);
}