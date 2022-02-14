const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection(
    {
      host: 'localhost', 
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
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
      name: 'action',
      type: 'list',
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
  var employeeQuery = 'SELECT * FROM employee';
    connection.query(employeeQuery, function(err, res) {
        if (err) throw err;
        console.table('All Employees:', res); 
        showOptions();
    })
}

function viewDepartments() {
  var departmentQuery = 'SELECT * FROM department';
    connection.query(departmentQuery, function(err, res) {
        if(err)throw err;
        console.table('All Departments:', res);
        showOptions();
    })

}

function viewRoles() {
  var roleQuery = 'SELECT * FROM role';
    connection.query(roleQuery, function(err, res){
        if (err) throw err;
        console.table('All Roles:', res);
        showOptions();
    })
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'What is their first name?',
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'What is their last name?',
      },
      {
        name: 'manager_id',
        type: 'input',
        message: 'Who does this employee work for?',
      },
      {
        name: 'role',
        type: 'input',
        message: 'What is this employees role id?',
      }
    ])
    .then(function (answer){
      connection.query('INSERT INTO employee SET ?',
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        manager_id: answer.manager_id,
        role_id: answer.role,
      });
      var employeeQuery = 'SELECT * FROM employee';
      connection.query(employeeQuery, function(err, res){
        if (err) throw err;
        console.table('All Employees:', res);
        showOptions();
      })
    })
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: 'newDepartment', 
        type: 'input', 
        message: 'What is your new department called?'
      }
      ])
      .then(function (answer) {
        connection.query('INSERT INTO department SET ?',
            {
                name: answer.newDepartment
            });
        var departmentQuery = 'SELECT * FROM department';
        connection.query(departmentQuery, function(err, res){
          if (err) throw err;
          console.table('All Departments:', res);
          showOptions();
        })
            
      })
}

function addRole() {
  inquirer
    .prompt([
      {
        name: 'newRole', 
        type: 'input', 
        message: 'What is your new role called?'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'How much does this member make?'
      },
      {
        name: 'Department',
        type: 'input',
        message: 'What department does this role work for? (Insert Department ID)'
      }
      ])
      .then(function (answer) {
        connection.query('INSERT INTO role SET ?',
          {
            title: answer.newRole,
            salary: answer.salary,
            department_id: answer.Department
          });
        var roleQuery = 'SELECT * FROM role';
        connection.query(roleQuery, function(err, res){
          if (err) throw err;
          console.table('All Roles:', res);
          showOptions();
        })
      })
};

