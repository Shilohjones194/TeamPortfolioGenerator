// run it with node index.js

//for package.json: "scripts":{"start": "node index.js"}

const fs = require('fs')
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('/lib/Intern');
const Manager = require('/lib/Manager');

const generatePage = require('.')
const writeHTML = require()