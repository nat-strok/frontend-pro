function Hamburger(type) {
    this.set = [type];
    this.addTopping = function (topping) {
        this.set.push(topping);
    };

    this.getPrice = function () {
        let sum = 0;
        this.set.forEach(item => sum += item.price);
        return sum;
    };

    this.getCalories = function () {
        let sum = 0;
        this.set.forEach(item => sum += item.calories);
        return sum;
    };

    this.getText = function () {
        let listOfToppings = [];
        this.set.forEach(item => {
            if (item.name) listOfToppings.push(item.name);
        });
        return listOfToppings.join(', ');
    };
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
};
Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30
};
Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40
};
Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20,
    name: 'cheese'
};
Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5,
    name: 'salad'
};
Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
    name: 'potato'
};
Hamburger.TOPPING_SPICE = {
    price: 15,
    calories: 0,
    name: 'spice'
};
Hamburger.TOPPING_SAUCE = {
    price: 20,
    calories: 5,
    name: 'sauce'
};


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with ${hamburger.getText()}: ${hamburger.getPrice()}`);
console.log(`Calories with ${hamburger.getText()}: ${hamburger.getCalories()}`);