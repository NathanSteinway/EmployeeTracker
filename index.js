const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost', 
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },

    console.log('You are now connected to employees database.')
);

connection.connect(function(err){
  if (err) throw err;
  showOptions();
})

function showOptions() {
  inquirer
    .prompt({
      name: 'list',
      type: 'option',
      message: 'You are now viewing our employee database. What would you like to do next?',
      choices: [
        'View all employees',
        'View all departments',
        'View all roles',
        'Add an employee',
        'Add a department',
        'Add a role',
        'Update employee role',
        ]
      }).then(function (answer) {
          switch (answer.action) {
            case 'View all employees':
                viewEmployees();
                break;
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Update employee role':
                updateRole();
                break;
          }
    });
};

function viewEmployees() {

}

function viewDepartments() {

}

function viewRoles() {

}

function addEmployee() {

}

function addDepartment() {

}

function addRole() {

}

function updateRole() {

}

