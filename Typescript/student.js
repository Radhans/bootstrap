var student = /** @class */ (function () {
    function student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return student;
}());
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = new student("Jane", "M.", "user");
console.log(greeter(user));
