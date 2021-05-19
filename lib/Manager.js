//Employee has all the major roles.
//Except office number

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, role, officeNumber) {
        super(name, email, id, role)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
