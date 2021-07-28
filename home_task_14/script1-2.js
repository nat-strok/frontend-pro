function arrayFill(item, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(item);
    }
    return arr;
}

console.log(arrayFill('x', 5));


function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        } else {
        for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }
    }
    return sum;
}

let array = [[1, 2, 3], [4, 5], [6]];
console.log(arraySum(array));
console.log(array.flat(Infinity).reduce((sum, item) => sum += item));