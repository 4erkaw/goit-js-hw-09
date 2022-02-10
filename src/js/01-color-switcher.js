const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let activeButton = refs.stopBtn.disabled

buttonActivity = true
let interval = null;

refs.startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonActivity = true
  buttonActivity = false
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    buttonActivity = true
    buttonActivity = false
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

