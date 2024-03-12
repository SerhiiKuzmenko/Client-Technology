const regexpInput = document.querySelector('#inputRegexp');
const regexpText = document.querySelector('.searched-text');

// console.log(regexpText.textContent);

let strText = regexpText.textContent.trim();
let copyText = strText;
let val;

regexpInput.addEventListener('input', regexpListenner);

function regexpListenner(event) {
  regexpText.textContent = copyText;
  strText = copyText;

  let str = event.currentTarget.value;
  // console.log(str);

  if (str == '' || str == '^') {
    regexpText.textContent = copyText;
    strText = copyText;
    return;
  }

  let regexp = new RegExp(str, 'g');
  // console.log(regexp);
  let res;
  val = copyText.match(regexp);

  // console.log(val);
  const indexes = [];
  while ((res = regexp.exec(copyText)) !== null) {
    // console.log(res);
    indexes.push(res.index);
  }

  indexes.sort((a, b) => {
    return b - a;
  });
  // console.log(indexes);
  let i;
  if (val !== null) {
    i = val.length - 1;
  }
  for (const index of indexes) {
    let tmp = '';

    tmp += `<span class="greenRegExp">${val[i]}</span>`;
    --i;
    // console.log(tmp);
    strText =
      strText.substring(0, index) +
      tmp +
      strText.substring(index + val[0].length);
    // console.log(tmp);
    // console.log(strText);
  }

  regexpText.innerHTML = strText;
}

const replaceText = document.querySelector('#replaceText');
const regexpBtn = document.querySelector('#regexpBtn');

regexpBtn.addEventListener('click', (event) => {
  if (replaceText.value == '') return;

  let textForReplace = replaceText.value;

 //console.log(strText);

  // regexpText.textContent = strText.replaceAll(
  //   `<span class="greenRegExp">${val[0]}</span>`,
  //   textForReplace
  // );

  for (let i = val.length - 1; i >= 0; --i) {
    strText = strText.replace(
      `<span class="greenRegExp">${val[i]}</span>`,
      textForReplace
    );
  }
  regexpText.textContent = strText;
  copyText = regexpText.textContent;
});

const regexpField = document.querySelector('#regexpField');

regexpField.addEventListener('input', (event) => {
  event.preventDefault();
  const regexpStr = regexpInput.value;
  const regexp = new RegExp(regexpStr, 'g');

  // console.log(regexp);
  // console.log(event.currentTarget.value);
  // console.log(event.currentTarget.value.match(regexp));
  if (event.currentTarget.value.match(regexp) !== null) {
    regexpField.classList.remove('red-border');
    regexpField.classList.add('green-border');
  } else {
    regexpField.classList.remove('green-border');
    regexpField.classList.add('red-border');
  }
});
