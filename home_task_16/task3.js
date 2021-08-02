function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

const students = [
    new Student('Student 1', [10, 9, 8, 0, 10]),
    new Student('Student 12', [10, 0, 8, 0, 3, 4])
];

Student.prototype.averageMark = function () {
    return this.marks.reduce((sum, item) => (sum + item)) / this.marks.length;
};