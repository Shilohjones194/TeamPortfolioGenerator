//Employee has all the major roles.
// add Github
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, role, github) {
        super(name, email, id, role)
        this.github = github;
    }
    getgitHub() {
        return this.github;
    }
}
module.exports = Engineer;