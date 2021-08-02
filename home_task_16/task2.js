function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log(`Hello, I'm ${this.name}`);
    };
}

function Employee(name) {
    this.name = name;
}

function Client(name) {
    this.name = name;
}

Employee.prototype = new Person();
Client.prototype = new Person();

const personJohn = new Person("John");
const sysAdmin = new Employee("Bob");
const clientNatalia = new Client("Natalia");