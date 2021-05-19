// run it with node index.js

//for package.json: "scripts":{"start": "node index.js"}

const fs = require('fs')
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('/lib/Intern');
const Manager = require('/lib/Manager');

const generatePage = require('.');
const writeHTML = require();

// list of questions to collect the output data
function getInfo() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is the Employee's Name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Need to enter name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Need to enter email address')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "enter employee ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Need to enter a valid ID!')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "Employee's role",
        choices: ["Employee", "Engineer", "Intern", "Manager"]
    }
    ])
        /// Need to make specific questions about Engineer(gitHub),  Intern(School) and Manager(office number):

        ////////Engineer Question:
        .then(answers => {
            if (answers.role === 'Engineer') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'github',
                    message: "Enter Engineer's GitHub",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            console.log('Need to enter Github username!')
                            return false;
                        }
                    }
                }])
                    .then(answers => {
                        console.log(answers.gitHub)
                        //Do I need to create another CONST for Answers/name,email,id,role and specific question?       
                        addMore()
                    })
                /////////// Intern Question
            } else if (answers.role === 'Intern') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'Enter Interns School',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log("Need to enter Intern's school!")
                            return false;
                        }
                    }
                }])
                    .then(answers => {
                        console.log(answers.school);
                        //Do I need to create another CONST for Answers/name,email,id,role and specific question?
                        addMore()
                    })
                ///////// Manager Question
            } else if (answers.role === 'Manager') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'officeNumber',
                    message: "Enter Manager's office number",
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            console.log("Need to enter Manager's office number!")
                            return false;
                        }
                    }
                }])
                    .then(answers => {
                        //Do I need to create another CONST for Answers/name,email,id,role and specific question?
                        console.log(answers.officeNumber);
                    })
            }
        })

    /// still need to add option to add another teammate and loop over the questions again.

}

getInfo();
