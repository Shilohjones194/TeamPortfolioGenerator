// run it with node index.js

//for package.json: "scripts":{"start": "node index.js"}

const fs = require('fs')
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
var HTMLcode = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>TeamProfile</title>
</head>

<body>
    <header class="bg-primary text-center">
        <h1>Team Profile system</h1>

    </header>
    <main class="container d-flex justify-content-evenly">`



//const generatePage = require('.');
// const writeHTML = require();

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
        choices: ["Engineer", "Intern", "Manager"]
    }
    ])
        /// Need to make specific questions about Engineer(gitHub),  Intern(School) and Manager(office number):

        ////////Engineer Question:
        .then(answers => {
            if (answers.role === 'Engineer') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'github',
                    message: "Enter Engineer's GitHub Account name",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            console.log('Need to enter Github username!')
                            return false;
                        }
                    }
                }])
                    .then(ans => {
                        var newEngineer = new Engineer(answers.name, answers.email, answers.id, ans.github) 
                        //console.log(newEngineer)
                        generateHTML(newEngineer)
                        addMore()
                    })
                /////////// Intern Question
            } else if (answers.role === 'Intern') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'Enter Interns School',
                    validate: school => {
                        if (school) {
                            return true;
                        } else {
                            console.log("Need to enter Intern's school!")
                            return false;
                        }
                    }
                }])
                    .then(ans => {
                        var newIntern = new Intern(answers.name, answers.email, answers.id, ans.school)  
                        //console.log(newIntern)
                        generateHTML(newIntern)
                        addMore()
                    })
                ///////// Manager Question
            } else if (answers.role === 'Manager') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'officeNumber',
                    message: "Enter Manager's office number",
                    validate: officeNumber => {
                        if (officeNumber) {
                            return true;
                        } else {
                            console.log("Need to enter Manager's office number!")
                            return false;
                        }
                    }
                }])
                    .then(ans => {
                        var newManager = new Manager(answers.name, answers.email, answers.id, ans.officeNumber)
                        //console.log(newManager)
                        generateHTML(newManager)
                        addMore()
                    })
            }
        })

    /// still need to add option to add another teammate and loop over the questions again.

}

getInfo();


function addMore() {
    inquirer.prompt([{
        type: 'list',
        name: 'name',
        choices: ['add more employees', 'exit application'],
        message: 'Add employees'
    }]).then(function (userResponse) {
        switch (userResponse.name) {
            case 'add more employees':
                getInfo()
                break;
            default:
                writeHTML()
        }
    })
}
function generateHTML(Employee) {
    console.log(Employee);
    HTMLcode += `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${Employee.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${Employee.getRole()}</h6>
        <strong> Email:</strong> <a href="mailto:${Employee.getEmail()}" class="card-link"> ${Employee.getEmail()}</a>
        <h6 class="card-subtitle mb-2 text-muted">Id:${Employee.getId()}</h6>`
        //Its not reading my else if statements//
    if (Employee.getRole() === 'Manager') {
        //changed down below to h6 to see if it does anything
        HTMLcode += `<p><strong> Office Number:<strong> ${Employee.getOfficeNumber()}</p>`
    }
    else if (Employee.getRole() === 'Engineer') {
        HTMLcode += `<strong> GitHub Account:</strong> <a href="https://github.com/${Employee.getGithub()}" class="card-link"> ${Employee.getGithub()}</a>`
    }
    else if (Employee.getRole() === 'Intern') {
        HTMLcode += `<p><strong>School: </strong> ${Employee.getSchool()}</p>`

    }
    HTMLcode += `
        </div >
        </div >`
}


function writeHTML(){
    HTMLcode += `  </main>
    </body>
    
    </html>`
    console.log(HTMLcode);
    fs.writeFileSync('./dist/index.html', HTMLcode, function( err) {
        if (err) throw err;
        console.log('HTMLgenerator')
    })
}