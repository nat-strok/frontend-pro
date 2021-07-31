function Calc(startValue) {
    this.value = startValue;
    this.sum = (n) => this.value += n;
    this.mult = (n) => this.value *= n;
    this.sub = (n) => this.value -= n;
    this.div = (n) => this.value /= n;
    this.set = (n) => this.value = n;
}

const calc = new Calc(10);

console.log(`start value: ${calc.value}`);
calc.sum(5);
console.log(`sum 5 => ${calc.value}`);
calc.mult(10);
console.log(`mult 10 => ${calc.value}`);
calc.sub(40);
console.log(`sub 40 => ${calc.value}`);
calc.div(10);
console.log(`div 10 => ${calc.value}`);
calc.set(100);
console.log(`set 100 => ${calc.value}`);

