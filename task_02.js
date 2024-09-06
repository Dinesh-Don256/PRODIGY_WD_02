// script.js
let timer;
let elapsedTime = 0; // time in milliseconds
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(2, '0');
}

function startStopwatch() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        elapsedTime += 10; // increment time by 10 milliseconds
        updateDisplay();
    }, 10);
}

function pauseStopwatch() {
    if (!isRunning) return;
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    document.getElementById('lapList').innerHTML = ''; // Clear lap times
}

function recordLap() {
    if (!isRunning) return;
    const lapTime = document.getElementById('display').textContent;
    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);
