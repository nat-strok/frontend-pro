function collectDataToArray(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        arr[i] = data[i].innerText;
    }
    return makeNumber(arr);
}

function makeNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('B')) {
            arr[i] = +arr[i].replace('B', '000000000');
        } else if (arr[i].includes('M')) {
            arr[i] = +arr[i].replace('M', '000000');
        } else {
            arr[i] = +arr[i];
        }
    }
    return arr;
}

function calcSum(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return reduceFormatNumber(sum);
}

function reduceFormatNumber(num) {
    if (num % 1000000000 === 0) {
        return num / 1000000000 + "B";
    } else {
        return num / 1000000 + "M";
    }
}

let revenueValues = collectDataToArray(document.querySelectorAll('td[data-id="revenue-value"]'));
let totalSum = (calcSum(revenueValues));
let totalText = document.querySelector('#summ');
totalText.textContent = totalText.textContent + ' ' + totalSum;