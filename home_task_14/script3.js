function errorHidden(attr) {
    const errorMessage = document.querySelector('.error');
    attr ? errorMessage.classList.add('hidden') : errorMessage.classList.remove('hidden');
}

function checkInputNumber(input) {
    input.value = input.value.replace(',', '.');
    if (/^-*\d+(\.\d*)*$/g.test(input.value)) {
        return input;
    } else {
        errorHidden(false);
        input.value = '';
        input.focus();
        return false;
    }
}

function createElem(tag, text, classes) {
    const el = document.createElement(tag);
    el.classList.add(classes);
    el.textContent = text;
    return el;
}

function onCreateCounter(e) {
    e.preventDefault();

    const inputText = document.querySelector('#textInput');
    if (!checkInputNumber(inputText)) return;
    errorHidden(true);

    const parentElem = document.body;
    const counterBlock = createElem('div', '', 'counter-block');
    const counterTxt = createElem('div', `Counter value:`, 'counter-txt');
    const counterOuter = createElem('span', `${inputText.value}`, 'counter-outer');
    const counterBtn = createElem('button', 'Count');
    inputText.value = '';

    parentElem.append(counterBlock);
    counterBlock.append(counterTxt, counterBtn);
    counterTxt.append(counterOuter);
    counterBtn.addEventListener('click', onCount);
}

function onCount(e) {
    errorHidden(true);
    const counterOuter = e.target.parentElement.querySelector('.counter-outer');
    let counterValue = parseFloat(counterOuter.textContent);
    function changeCounter(num) {
        return () => ++num;
    }
    const counter = changeCounter(counterValue);
    counterOuter.textContent = counter();
}

const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', onCreateCounter);