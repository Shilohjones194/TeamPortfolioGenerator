//Employee has all the major roles.
//Except office number

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
