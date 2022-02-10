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
  refs.startBtn.disabled = true
  refs.stopBtn.disabled = false
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    refs.stopBtn.disabled = true
    refs.startBtn.disabled = false
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

