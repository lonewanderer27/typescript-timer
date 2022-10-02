export { }

let [miliseconds, seconds, minutes] = [0, 0, 0]
let timerRef = document.getElementById('timerDisplay')
let interval: number | null = null
var buttonStart = document.getElementById("btn--start")
var buttonStop = document.getElementById("btn--stop")
var buttonReset = document.getElementById("btn--reset")

buttonStart!.addEventListener("click", () => {
  if (interval !== null) {
    clearInterval(interval)
  }
  interval = setInterval(displayTimer, 10)
  console.log("start btn clicked")
})

buttonStop!.addEventListener("click", () => {
  clearInterval(interval?.valueOf())
})

buttonReset!.addEventListener("click", () => {
  clearInterval(interval?.valueOf())
  miliseconds = 0
  seconds = 0
  minutes = 0
  timerRef!.innerHTML = "00:00"
})

function displayTimer() {
  miliseconds += 10;

  if (miliseconds == 1000) {
    miliseconds = 0
    seconds++

    if (seconds == 60) {
      seconds = 0
      minutes++

      if (minutes == 60) {
        minutes = 0
      }
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes
  let s = seconds < 10 ? "0" + seconds : seconds
  // let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds

  timerRef!.innerHTML = `${m}:${s}`
}

