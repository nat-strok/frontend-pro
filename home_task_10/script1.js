function taskOne(oldText, newText) {
    const allElements = document.body.querySelectorAll('*');
    for (let elem of allElements) {
        if (elem.textContent === oldText) {
            return elem.textContent = newText;
        }
    }
}

function taskTwo() {
    const elem = document.querySelector('[my-attribute]');
    elem.removeAttribute('my-attribute');
}

function taskThree(selector, color) {
    const allElements = document.querySelectorAll(selector);
    for (let elem of allElements) {
        elem.style.backgroundColor = color;
    }
}

function taskFour(tdOneValue, tdTwoValue, tdThreeValue) {

    function newElement(tag, content) {
        let elem = document.createElement(tag);
        elem.textContent = content;
        return elem;
    }

    const parentElem = document.querySelector('tbody');
    const previousElem = document.querySelector('table tr:last-child');
    const newRow = parentElem.insertBefore(newElement('tr'), previousElem);
    newRow.appendChild(newElement('td', tdOneValue));
    newRow.appendChild(newElement('td', tdTwoValue));
    newRow.appendChild(newElement('td', tdThreeValue));
}

function taskFive() {
    const parentElem = document.querySelector('tbody');
    const firstRow = document.querySelector('table th').parentElement.nextElementSibling;
    parentElem.removeChild(firstRow);
}

taskOne('2021', '2020');
taskTwo();
taskThree('[data-id]', 'rgba(49,123,24,0.25)');
taskFour('Any Company', 'Any Contact', 0);
taskFive();