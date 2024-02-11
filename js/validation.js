const inputL = document.querySelector('#linp');
const inputR = document.querySelector('#rinp');

const answerTextDiv = document.querySelectorAll('.answer')[0];
const answerText = document.querySelectorAll('.answer-text');

const resetBtn = document.querySelector('#btnResetValid');

const answerForm = document.querySelector('.valid-form');

const spanX2 = document.querySelectorAll('.exit')[2];
const spanX3 = document.querySelectorAll('.exit')[3];

const onlyL = document.querySelector('.modal-valid-item-l');
const onlyR = document.querySelector('.modal-valid-item-r');

const modalValid = document.querySelector('#modal-valid');

const tipL = document.querySelector('.tip-l');
const tipR = document.querySelector('.tip-r');

const modalL = document.querySelectorAll('.modal-valid-item-l')[0];
const modalR = document.querySelectorAll('.modal-valid-item-r')[0];

spanX2.addEventListener('click', () => {
  if (onlyR.style.display == 'none') {
    modalValid.style.display = 'none';
    // classChecker();
  } else {
    onlyL.style.display = 'none';
  }
});

spanX3.addEventListener('click', () => {
  if (onlyL.style.display == 'none') {
    modalValid.style.display = 'none';
    // classChecker();
  } else {
    onlyR.style.display = 'none';
  }
});

window.addEventListener('click', (event) => {
  if (
    event.target !== modalL &&
    event.target !== tipL &&
    event.target !== modalR &&
    event.target !== tipR &&
    event.target !== spanX2 &&
    event.target !== spanX3
  ) {
    modalValid.style.display = 'none';
    onlyL.style.display = 'none';
    onlyR.style.display = 'none';
    classChecker();
  }
});

resetBtn.addEventListener('click', (event) => {
  const answerText = document.querySelectorAll('.answer-text')[0];
  if (answerText) {
    answerText.style.display = 'none';
  }
});

answerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const {
    elements: { linp, rinp },
  } = event.currentTarget;

  let bool = false;
  let alertTextL;
  let alertTextR;
  if (linp.value.trim() === '' || isNaN(linp.value) || linp.value < 0) {
    inputL.classList.toggle('wrong');
    modalValid.style.display = 'block';
    onlyL.style.display = 'block';
    bool = true;

    if (linp.value.trim() === '') {
      alertTextL =
        'Комірка L не може бути порожньою! Введіть будь ласка числове значення!';
    }
    if (isNaN(linp.value)) {
      alertTextL =
        'Ви ввели не числове значення для L! Введіть будь ласка числове значення!';
    }
    if (linp.value < 0) {
      alertTextL =
        "L не може бути від'ємним, введіть будь ласка позитивне числове значення!";
    }

    tipL.textContent = alertTextL;
  }
  if (rinp.value.trim() === '' || isNaN(rinp.value) || rinp.value < 0) {
    inputR.classList.toggle('wrong');
    modalValid.style.display = 'block';
    onlyR.style.display = 'block';
    bool = true;

    if (rinp.value.trim() === '') {
      alertTextR =
        'Комірка R не може бути порожньою! Введіть будь ласка числове значення!';
    }
    if (isNaN(rinp.value)) {
      alertTextR =
        'Ви ввели не числове значення для R! Введіть будь ласка числове значення!';
    }
    if (rinp.value < 0) {
      alertTextR =
        "R не може бути від'ємним, введіть будь ласка позитивне числове значення!";
    }

    tipR.textContent = alertTextR;
  }

  if (bool) {
    return;
  }

  const answer = (Math.PI * rinp.value * (linp.value + rinp.value)).toFixed(2);
  answerTextDiv.innerHTML = `<p class="answer-text">Площа поверхні конуса = ${answer}См<sup>2<sup></p>`;
  const answerText = document.querySelectorAll('.answer-text')[0];
  answerText.style.display = 'block';
});

function classChecker() {
  if (inputL.classList.contains('wrong')) {
    inputL.classList.toggle('wrong');
  }
  if (inputR.classList.contains('wrong')) {
    inputR.classList.toggle('wrong');
  }
}



const aboutCheckBoxBtn = document.querySelector("#chbox");
const aboutText = document.querySelectorAll(".about-cone")[0];

console.log(aboutText);


aboutCheckBoxBtn.addEventListener("change", (event)=>{
  if(event.target.checked){
    aboutText.style.display="block";
  }else{
    aboutText.style.display="none";
  }
});
