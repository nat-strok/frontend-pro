function createCalculator(startValue) {
    return {
        sum: (n) => startValue += n,
        mult: (n) => startValue *= n,
        sub: (n) => startValue -= n,
        div: (n) => startValue = startValue / n,
        set: (n) => startValue = n,
        value: () => startValue
    };
}

const counter = createCalculator(10);


console.log(`start value: ${counter.value()}`);

counter.sum(5);
console.log(`sum 5 => ${counter.value()}`);

counter.mult(10);
console.log(`mult 10 => ${counter.value()}`);

counter.sub(40);
console.log(`sub 40 => ${counter.value()}`);

counter.div(10);
console.log(`div 10 => ${counter.value()}`);

counter.set(100);
console.log(`set 100 => ${counter.value()}`);