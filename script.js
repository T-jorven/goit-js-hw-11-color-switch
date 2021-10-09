const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector("body");  
const buttonsDiv = document.querySelector("#buttons");
const startButton = document.querySelector(".js-start");
const stopButton = document.querySelector(".js-stop");
buttonsDiv.addEventListener('click', buttonStatus);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
stopButton.def

//BACKGROUND COLOR CHANGE
let setNewColor;
function changeColor() {
  setNewColor = colors[randomIntegerFromInterval(0, 5)];
  body.removeAttribute('style');
  body.setAttribute('sttyle', `background-color: ${setNewColor}`);
}

stopButton.disabled = true;

//Button Function

function buttonStatus(event, setNewColor) { 
    if (event.target.textContent == "Start") {
        startButton.disabled = true;
        stopButton.disabled = false;
        colorInerval = setInterval(setNewColor, 1000);
        
    } else if (event.target.textContent == "Stop") {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(colorInerval);
    }
};