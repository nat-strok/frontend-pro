function createCalculator(startValue) {
    return {
        sum: (n) => startValue += n,
        mult: (n) => startValue *= n,
        sub: (n) => startValue -= n,
        div: (n) => startValue /= n,
        set: (n) => startValue = n,
        value: () => startValue
    };
}

const calc = createCalculator(10);


console.log(`start value: ${calc.value()}`);

calc.sum(5);
console.log(`sum 5 => ${calc.value()}`);

calc.mult(10);
console.log(`mult 10 => ${calc.value()}`);

calc.sub(40);
console.log(`sub 40 => ${calc.value()}`);

calc.div(10);
console.log(`div 10 => ${calc.value()}`);

calc.set(100);
console.log(`set 100 => ${calc.value()}`);