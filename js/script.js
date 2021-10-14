const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//References
  const startBtnRef = document.querySelector(".js-start");
  const stopBtnRef = document.querySelector(".js-stop");
  let timerId = null;
  
//Functions
  startBtnRef.addEventListener("click", () => {
    timerId = setInterval(() => {
        let color = colors[Math.floor(Math.random()*colors.length)];
        document.body.style.backgroundColor = color;
        startBtnRef.disabled = true;
    }, 1000);
  });
  
  stopBtnRef.addEventListener("click", () => {
    clearInterval(timerId);
    startBtnRef.disabled = false;
  });









/* stopButton.def

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
}; */