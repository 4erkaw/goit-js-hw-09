import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formField: document.querySelector('.form'),
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if(shouldResolve){
        resolve({position,delay})
      }
      reject({position,delay});
    }, delay)
  })
}

function onSubmit(e){
  e.preventDefault();
  const form = e.currentTarget
  const dataForm = new FormData(form);
  const finalData = {};
  for(const [key,value] of dataForm.entries()){
    finalData[key] = Number(value);
  }

  form.reset();

  for(let position = 1; position <= finalData.amount; position += 1){
    createPromise(position,finalData.delay).then(success).catch(error);
    finalData.delay = finalData.delay + finalData.step
  }
}

function error({position,delay}){
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
function success({position,delay}){
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
}

refs.formField.addEventListener('submit', onSubmit)