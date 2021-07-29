function createElem(tag, text, classes) {
    const el = document.createElement(tag);
    el.classList.add(classes);
    el.textContent = text;
    return el;
}

function createCounter(output, input) {
    let counter = +input.value;
    return function () {
        counter++;
        output.textContent = counter;
    };
}

function onCreateBlock(e) {
    e.preventDefault();
    const inputText = document.querySelector('#textInput');
    const parentElem = document.body;
    const counterBlock = createElem('div', '', 'counters-block');
    const counterTxt = createElem('div', `Counter value:`, 'counter-txt');
    const counterValue = createElem('span', `${inputText.value}`, 'counter-value');
    const counterBtn = createElem('button', 'Count');
    parentElem.append(counterBlock);
    counterBlock.append(counterTxt, counterBtn);
    counterTxt.append(counterValue);
    const newCounter = createCounter(counterValue, inputText);
    counterBtn.onclick = newCounter;
    inputText.value = '';
}

const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', onCreateBlock);