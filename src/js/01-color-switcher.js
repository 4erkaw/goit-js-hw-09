const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.disabled = true
let interval = null;

refs.startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnChanger(true,false)
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    btnChanger(false, true)
})


function btnChanger (a,b){
  refs.startBtn.disabled = a
  refs.stopBtn.disabled = b
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

