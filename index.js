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
  options();
})