import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysData: document.querySelector('[data-days]'),
  hoursData: document.querySelector('[data-hours]'),
  minutesData: document.querySelector('[data-minutes]'),
  secondsData: document.querySelector('[data-seconds]'),
};

let chosenDate = null;
let diff = null;
let interval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0];
    if (Date.now() > chosenDate) {
      Notify.failure(`Please choose a date in the future`);
      refs.startBtn.disabled = true;
      return;
    }
    refs.startBtn.disabled = false;
  },
};

refs.startBtn.disabled = true;
flatpickr('#datetime-picker', options);


const renderTime = () => {
    diff = chosenDate - Date.now();

    if(diff <= 0){
        clearInterval(interval)
        return
    }
   const data = convertMs(diff)
    dataRender(data)
}

function addLeadingZero(value){
return String(value).padStart(2, '0')
}

function dataRender({days = 0, hours = 0, minutes = 0, seconds = 0}){

  refs.daysData.textContent = addLeadingZero(days)
  refs.hoursData.textContent = addLeadingZero(hours)
  refs.minutesData.textContent = addLeadingZero(minutes)
  refs.secondsData.textContent = addLeadingZero(seconds)

}



refs.startBtn.addEventListener('click', () => {
   interval = setInterval(() => renderTime()
), 1000});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


