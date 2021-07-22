function taskOne() {
    const yearContainer = document.querySelector('#title span');
    const newYearValue = document.querySelector('input[name=year]');
    yearContainer.textContent = newYearValue.value;
    newYearValue.value = '';
}

function taskTwo() {
    const elem = document.querySelector('[my-attribute]');
    elem.removeAttribute('my-attribute');
}

function taskThree() {
    const allElements = document.querySelectorAll('[data-id]');
    for (let elem of allElements) {
        elem.style.backgroundColor = 'rgba(49,123,24,0.25)';
    }
}

function taskFour(e) {
    function newElement(tag, content) {
        let elem = document.createElement(tag);
        elem.textContent = content;
        return elem;
    }

    const parentElem = document.querySelector('tbody');
    const previousElem = document.querySelector('table tr:last-child');
    const newRow = parentElem.insertBefore(newElement('tr'), previousElem);
    newRow.appendChild(newElement('td', 'Any Company'));
    newRow.appendChild(newElement('td', 'Any Company'));
    newRow.appendChild(newElement('td', 0));
    e.stopPropagation();
}

function taskFive() {
    const parentElem = document.querySelector('tbody');
    const firstRow = document.querySelector('table th').parentElement.nextElementSibling;
    parentElem.removeChild(firstRow);
}
function taskSix() {
    document.querySelector('#title').style.fontSize = '24px';
}

function load() {
    document.querySelector('#removeAttrBtn').addEventListener('click', taskTwo);
    document.querySelector('#setGreenBtn').addEventListener('click', taskThree, true);
    document.querySelector('#addRowBtn').addEventListener('click', taskFour);
    document.querySelector('#removeSecondRowBtn').addEventListener('click', taskFive);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', taskSix);
} else {
    taskSix();
}