var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var teacher4 = {
    firstName: "Steve",
    fullTimeEmployee: true,
    lastName: "Alex",
    location: "KSA",
    experience: 40,
};
teacher4.location = "USA";
console.log(teacher4);
console.log("--------------------------------");
console.log("2. Extending the Teacher class");
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
console.log("------------------------------------------");
console.log("3. Printing teachers");
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
console.log("-------------------------");
console.log("4. Writing a class");
var StudentClass = /** @class */ (function () {
    function StudentClass(fistName, lastName) {
        this.firstName = fistName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework());
