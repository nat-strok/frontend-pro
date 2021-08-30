// task 1
const countTotal = () => ({total: 100});
console.log(countTotal());

// task 2
const result = `Today is ${new Date}`
console.log(result);

// task 3
let a = 2,
    b = 3;
console.log(`Initial values: a=${a}, b=${b}`);
[a, b] = [b, a];
console.log(`New values: a=${a}, b=${b}`);
