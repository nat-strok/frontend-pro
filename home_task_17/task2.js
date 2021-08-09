class Hamburger {
    constructor(type) {
        this.set = [type];
    }

    addTopping (topping) {
        this.set.push(topping);
    };

    getPrice() {
        return this.set.reduce((sum, item) => sum + item.price, 0);
    };

    getCalories() {
        return this.set.reduce((sum, item) => sum + item.calories, 0);
    };

    getText() {
        return this.set.filter(item => item.name).map(item => item.name).join(', ');
    };

    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };
    static SIZE_MEDIUM = {
        price: 75,
        calories: 30
    };
    static SIZE_LARGE = {
        price: 100,
        calories: 40
    };
    static TOPPING_CHEESE = {
        price: 10,
        calories: 20,
        name: 'cheese'
    };
    static TOPPING_SALAD = {
        price: 20,
        calories: 5,
        name: 'salad'
    };
    static TOPPING_POTATO = {
        price: 15,
        calories: 10,
        name: 'potato'
    };
    static TOPPING_SPICE = {
        price: 15,
        calories: 0,
        name: 'spice'
    };
    static TOPPING_SAUCE = {
        price: 20,
        calories: 5,
        name: 'sauce'
    };
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with ${hamburger.getText()}: ${hamburger.getPrice()}`);
console.log(`Calories with ${hamburger.getText()}: ${hamburger.getCalories()}`);