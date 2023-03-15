const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
// render(myArrayOfTeamMembers) 

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// code taken from class
inquirer.createPromptModule([{
    //manager questions
}]).then(response => {
    // populate manager info
    // promptForNextEmployee () 
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
        // if you want engineer, intern or done
    }]).then(response => {
        // if engineer
        // promptForEngineer
        // else if intern
        // promptForIntern
        // else
        // use the functionality from page-template to generate the team 
        // call buildPage function
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        // engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        // intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
    // generates a HTML file 
    // render(myArrayOfTeamMembers)
}