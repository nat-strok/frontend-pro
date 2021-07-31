const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function () {
        return `${this.firstName} ${this.secondName}`;
    }
};
const userJobs = {
    firstName: "Steve",
    secondName: "Jobs"
};
const userWozniak = {
    firstName: "Steve",
    secondName: "Wozniak"
};
const userRoberts = {
    firstName: "Julia",
    secondName: "Roberts"
};

console.log('1) ' + user.getFullName());
console.log('2) ' + user.getFullName.call(userJobs));
console.log('3) ' + user.getFullName.apply(userWozniak));
const fullNameRoberts = user.getFullName.bind(userRoberts);
console.log('4) ' + fullNameRoberts());

function User(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
}

const user1 = new User('Mark', 'Gatiss');
const user2 = new User('Judith', 'Dench');
const user3 = new User('Michael', 'Sheen');

console.log(`5) ${user.getFullName.call(user1)} \n   ${user.getFullName.call(user2)} \n   ${user.getFullName.call(user3)}`);