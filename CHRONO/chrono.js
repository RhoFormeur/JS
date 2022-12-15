const body = document.querySelector("body")
body.style.margin = 0
body.style.padding = 0
body.style.fontFamily = "New X Digital tfb, sans-serif"

const app = document.getElementById("app")
const div = document.createElement("div")
const p = document.createElement("p")

app.style.display = "flex"
app.style.flexDirection = "column"
app.style.alignItems = "center"
div.style.width = "300px"
div.style.background = "black"
div.style.textAlign = "center"
p.style.color = "red"
div.appendChild(p)
app.appendChild(div)

let ms = "0"
let s = "0"
let m = "0"
let h = "0"
display(ms,s,m,h)

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

function display(a,b,c,d){
    p.innerText = addZero(d) + " : " + addZero(c) + " : " + addZero(b) + " : " + addZero(a)
}

const containerBtn = document.createElement("div")
const btnStart = document.createElement("button")
const btnStop = document.createElement("button")
const btnReset = document.createElement("button")

btnStart.innerText = "Start"
btnStart.setAttribute("onclick", "start()")
btnStop.innerText = "Stop"
btnStop.setAttribute("onclick", "stop()")
btnReset.innerText = "Reset"
btnReset.setAttribute("onclick", "reset()")

containerBtn.appendChild(btnStart)
containerBtn.appendChild(btnStop)
containerBtn.appendChild(btnReset)
app.appendChild(containerBtn)

let chrono = {}
let play = 0
// Lancement chrono
function start() {
    if (play == 0){
        chrono = setInterval(timer, 10)
        play = 1
    }
}

// Reset des valeurs
function reset() {
    stop()
    ms = "0"
    s = "0"
    m = "0"
    h = "0"
    display(ms,s,m,h)
}

// Fonction pour stopper l'interval
function stop() {
    clearInterval(chrono)
    play = 0
}

// Fonction timer
function timer() {
    if (ms < 99) {
        ms++
        display(ms,s,m,h)
    } else if (s < 59) {
        ms = 0
        s++
        display(ms,s,m,h)
    } else if (m < 59) {
        ms = 0
        s = 0
        m++
        display(ms,s,m,h)
    } else if (h < 23) {
        ms = 0
        s = 0
        m = 0
        h++
        display(ms,s,m,h)
    } else {
        ms = 0
        s = 0
        m = 0
        h = 0
        display(ms,s,m,h)
    }
}

