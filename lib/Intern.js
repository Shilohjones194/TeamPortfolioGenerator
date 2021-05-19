//Employee has all the major roles.
// except for School
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, email, id, role, school) {
        super(name, email, id, role)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;