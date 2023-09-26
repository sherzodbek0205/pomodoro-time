const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short");
const long = document.querySelector(".long");
const main = document.querySelector(".main");
const board = document.querySelector(".board");
const start = document.querySelector(".start");
const title = document.querySelector("title");
const pause = document.querySelector(".pause");
const timerElement = document.getElementById("timer");
const music = document.querySelector(".music");
let countdownTime=300;
let timerInterval;

short.onclick = () => {
  timerElement.innerText = "01:00";
  main.classList = "next";
  board.classList = "board one";
  countdownTime = 60;

};

pomodoro.onclick = () => {
  timerElement.innerText = "05:00";
  main.classList = "";
  board.classList = "board";
  countdownTime=300;
};

long.onclick = () => {
  timerElement.innerText = "15:00";
  main.classList = "next2";
  board.classList = "board two";
  countdownTime = 900;
};

start.onclick = () => {
  start.style.display = "none";
  pause.style.display = "block";

  timerInterval = setInterval(updateTimer, 1000);
};

pause.onclick = () => {
  start.style.display = "block";
  pause.style.display = "none";

  clearInterval(timerInterval);
};

function updateTimer() {
  let minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;

  let formattedTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

  timerElement.textContent = formattedTime;
  title.innerText = formattedTime;

  countdownTime--;

  if (countdownTime < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Time's Up";
    music.innerHTML=`  <audio autoplay src="/audio/tc4v8fj7knlq3dhwf2.m4a"></audio>`;
  }
}