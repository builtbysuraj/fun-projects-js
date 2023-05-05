const timerEle = document.getElementById("timer")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let startTime = 0
let elapsedTime = 0
let timerIntervel

// start 
function startTimer() {
  startTime = Date.now() - elapsedTime
  timerIntervel = setInterval(() => {
    elapsedTime = Date.now() - startTime
    timerEle.textContent = formatTime(elapsedTime);
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

// format
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

// stop
function stopTimer() {
  clearInterval(timerIntervel);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// reset
function resetTimer() {
  clearInterval(timerIntervel);

  elapsedTime = 0;
  timerEle.textContent = "00:00:00";

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener("click", () => {
  startTimer()
})

stopBtn.addEventListener("click", () => {
  stopTimer()
})

resetBtn.addEventListener("click", () => {
  resetTimer()
})
