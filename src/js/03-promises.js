const refs = {
  formField: document.querySelector('.form'),
  // submitBtn: document.querySelector('button')
}


refs.formField.addEventListener('submit', createPromise)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    if(shouldResolve){
      resolve("stf")
    }
    reject("omg")
  })
}
